package com.goup.service;

import com.goup.dto.ParticipationDTO;
import com.goup.dto.ProgressionUpdateDTO;
import com.goup.entity.Challenge;
import com.goup.entity.ChallengeType;
import com.goup.entity.Participation;
import com.goup.entity.User;
import com.goup.repository.ParticipationRepository;
import com.goup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ParticipationService {
    
    private final ParticipationRepository participationRepository;
    private final UserRepository userRepository;
    private final ChallengeService challengeService;
    private final UserService userService;
    private final NotificationService notificationService;
    
    @Transactional
    public ParticipationDTO participateInChallenge(Long userId, Long challengeId) {
        User user = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        // Vérifier si l'utilisateur participe déjà
        if (participationRepository.existsByUserAndChallenge(user, challenge)) {
            throw new RuntimeException("Vous participez déjà à ce défi");
        }
        
        Participation participation = new Participation();
        participation.setUser(user);
        participation.setChallenge(challenge);
        
        participation = participationRepository.save(participation);
        
        // Mettre à jour les statistiques
        user.setTotalDefisParticipes(user.getTotalDefisParticipes() + 1);
        userRepository.save(user);
        
        // Créer une notification pour le créateur du défi
        String message = user.getNomUtilisateur() + " participe à votre défi : " + challenge.getNom();
        notificationService.createNotification(challenge.getCreateur().getId(), "NOUVELLE_PARTICIPATION", message);
        
        return convertToDTO(participation);
    }
    
    @Transactional
    public ParticipationDTO updateProgression(Long userId, Long challengeId, ProgressionUpdateDTO dto) {
        User user = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        Participation participation = participationRepository.findByUserAndChallenge(user, challenge)
            .orElseThrow(() -> new RuntimeException("Participation non trouvée"));
        
        // Calculer les différences pour les statistiques
        Integer diffTemps = 0;
        Double diffDistance = 0.0;
        Integer diffReps = 0;
        
        if (dto.getTempsMinutes() != null && dto.getTempsMinutes() > 0) {
            diffTemps = dto.getTempsMinutes();
            participation.setTempsMinutes(participation.getTempsMinutes() + dto.getTempsMinutes());
        }
        
        if (dto.getDistanceMetres() != null && dto.getDistanceMetres() > 0) {
            diffDistance = dto.getDistanceMetres();
            participation.setDistanceMetres(participation.getDistanceMetres() + dto.getDistanceMetres());
        }
        
        if (dto.getRepetitions() != null && dto.getRepetitions() > 0) {
            diffReps = dto.getRepetitions();
            participation.setRepetitions(participation.getRepetitions() + dto.getRepetitions());
        }
        
        participation.setDerniereMiseAJour(LocalDateTime.now());
        
        // Vérifier si l'objectif est atteint
        boolean objectifAtteint = checkObjectifAtteint(participation, challenge);
        if (objectifAtteint && !participation.getTermine()) {
            participation.setTermine(true);
            user.setTotalDefisTermines(user.getTotalDefisTermines() + 1);
            
            // Notification
            String message = "Félicitations ! Vous avez terminé le défi : " + challenge.getNom();
            notificationService.createNotification(userId, "DEFI_TERMINE", message);
        }
        
        participation = participationRepository.save(participation);
        
        // Mettre à jour les statistiques de l'utilisateur
        userService.updateStatistics(userId, diffTemps, diffDistance, diffReps);
        
        return convertToDTO(participation);
    }
    
    @Transactional(readOnly = true)
    public List<ParticipationDTO> getUserParticipations(Long userId) {
        User user = userService.findById(userId);
        return participationRepository.findByUser(user).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ParticipationDTO> getChallengeParticipations(Long challengeId) {
        Challenge challenge = challengeService.findById(challengeId);
        return participationRepository.findByChallenge(challenge).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public ParticipationDTO getParticipation(Long userId, Long challengeId) {
        User user = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        Participation participation = participationRepository.findByUserAndChallenge(user, challenge)
            .orElseThrow(() -> new RuntimeException("Participation non trouvée"));
        
        return convertToDTO(participation);
    }
    
    private boolean checkObjectifAtteint(Participation participation, Challenge challenge) {
        ChallengeType type = challenge.getType();
        Integer objectif = challenge.getObjectif();
        
        switch (type) {
            case TEMPS:
                return participation.getTempsMinutes() >= objectif;
            case DISTANCE:
                return participation.getDistanceMetres() >= objectif;
            case REPETITION:
                return participation.getRepetitions() >= objectif;
            default:
                return false;
        }
    }
    
    private ParticipationDTO convertToDTO(Participation participation) {
        return new ParticipationDTO(
            participation.getId(),
            participation.getUser().getNomUtilisateur(),
            participation.getUser().getId(),
            participation.getChallenge().getNom(),
            participation.getChallenge().getId(),
            participation.getDateInscription(),
            participation.getTempsMinutes(),
            participation.getDistanceMetres(),
            participation.getRepetitions(),
            participation.getTermine(),
            participation.getDerniereMiseAJour()
        );
    }
}
