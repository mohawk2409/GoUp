package com.goup.service;

import com.goup.dto.ChallengeCreateDTO;
import com.goup.dto.ChallengeDTO;
import com.goup.entity.*;
import com.goup.repository.ChallengeRepository;
import com.goup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ChallengeService {
    
    private final ChallengeRepository challengeRepository;
    private final UserRepository userRepository;
    private final SportService sportService;
    
    @Transactional
    public ChallengeDTO createChallenge(Long userId, ChallengeCreateDTO dto) {
        User createur = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        Sport sport = sportService.getSportById(dto.getSportId());
        
        Challenge challenge = new Challenge();
        challenge.setNom(dto.getNom());
        challenge.setDescription(dto.getDescription());
        challenge.setSport(sport);
        challenge.setType(dto.getType());
        challenge.setObjectif(dto.getObjectif());
        challenge.setDateDebut(dto.getDateDebut());
        challenge.setDateFin(dto.getDateFin());
        challenge.setCreateur(createur);
        challenge.setVisibilite(dto.getVisibilite());
        
        challenge = challengeRepository.save(challenge);
        
        // Mettre à jour les statistiques du créateur
        createur.setTotalDefisCreees(createur.getTotalDefisCreees() + 1);
        userRepository.save(createur);
        
        return convertToDTO(challenge);
    }
    
    @Transactional(readOnly = true)
    public ChallengeDTO getChallengeById(Long id) {
        Challenge challenge = challengeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Défi non trouvé"));
        return convertToDTO(challenge);
    }
    
    @Transactional(readOnly = true)
    public List<ChallengeDTO> getAllChallenges() {
        return challengeRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ChallengeDTO> getActiveChallenges() {
        return challengeRepository.findActivesChallenges(LocalDateTime.now()).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ChallengeDTO> getVisibleChallenges(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        List<User> amis = new ArrayList<>(user.getAmis());
        amis.add(user); // Inclure l'utilisateur lui-même
        
        return challengeRepository.findVisibleChallenges(amis).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<ChallengeDTO> getChallengesByCreateur(Long userId) {
        User createur = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        return challengeRepository.findByCreateur(createur).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public void updateVisibility(Long challengeId, Visibility visibility) {
        Challenge challenge = challengeRepository.findById(challengeId)
            .orElseThrow(() -> new RuntimeException("Défi non trouvé"));
        
        challenge.setVisibilite(visibility);
        challengeRepository.save(challenge);
    }
    
    public Challenge findById(Long id) {
        return challengeRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Défi non trouvé"));
    }
    
    private ChallengeDTO convertToDTO(Challenge challenge) {
        ChallengeDTO dto = new ChallengeDTO();
        dto.setId(challenge.getId());
        dto.setNom(challenge.getNom());
        dto.setDescription(challenge.getDescription());
        dto.setSportNom(challenge.getSport().getNom());
        dto.setSportCategorie(challenge.getSport().getCategorie());
        dto.setType(challenge.getType());
        dto.setObjectif(challenge.getObjectif());
        dto.setDateDebut(challenge.getDateDebut());
        dto.setDateFin(challenge.getDateFin());
        dto.setCreateurNom(challenge.getCreateur().getNomUtilisateur());
        dto.setCreateurId(challenge.getCreateur().getId());
        dto.setVisibilite(challenge.getVisibilite());
        dto.setDateCreation(challenge.getDateCreation());
        
        // Utiliser les requêtes COUNT pour éviter les problèmes de lazy loading
        dto.setNombreParticipants(challengeRepository.countParticipants(challenge.getId()).intValue());
        dto.setNombreLikes(challengeRepository.countLikes(challenge.getId()).intValue());
        dto.setNombreCommentaires(challengeRepository.countComments(challenge.getId()).intValue());
        
        return dto;
    }
}
