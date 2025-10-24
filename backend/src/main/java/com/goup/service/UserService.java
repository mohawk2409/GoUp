package com.goup.service;

import com.goup.dto.*;
import com.goup.entity.User;
import com.goup.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    
    private final UserRepository userRepository;
    
    @Transactional
    public UserDTO register(UserRegistrationDTO dto) {
        // Vérifier si l'email existe déjà
        if (userRepository.existsByEmail(dto.getEmail())) {
            throw new RuntimeException("Cet email est déjà utilisé");
        }
        
        // Vérifier si le nom d'utilisateur existe déjà
        if (userRepository.existsByNomUtilisateur(dto.getNomUtilisateur())) {
            throw new RuntimeException("Ce nom d'utilisateur est déjà utilisé");
        }
        
        // Créer l'utilisateur
        User user = new User();
        user.setNomUtilisateur(dto.getNomUtilisateur());
        user.setEmail(dto.getEmail());
        user.setMotDePasse(dto.getMotDePasse()); // Dans un vrai projet, hasher le mot de passe
        
        user = userRepository.save(user);
        
        return convertToDTO(user);
    }
    
    @Transactional(readOnly = true)
    public UserDTO login(UserLoginDTO dto) {
        // Chercher par email ou nom d'utilisateur
        User user = userRepository.findByEmail(dto.getIdentifiant())
            .or(() -> userRepository.findByNomUtilisateur(dto.getIdentifiant()))
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        // Vérifier le mot de passe
        if (!user.getMotDePasse().equals(dto.getMotDePasse())) {
            throw new RuntimeException("Mot de passe incorrect");
        }
        
        return convertToDTO(user);
    }
    
    @Transactional(readOnly = true)
    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        return convertToDTO(user);
    }
    
    @Transactional(readOnly = true)
    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public void addFriend(Long userId, Long friendId) {
        if (userId.equals(friendId)) {
            throw new RuntimeException("Un utilisateur ne peut pas s'ajouter lui-même comme ami");
        }
        
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User friend = userRepository.findById(friendId)
            .orElseThrow(() -> new RuntimeException("Ami non trouvé"));
        
        // Vérifier si déjà amis
        if (user.getAmis().contains(friend)) {
            throw new RuntimeException("Ces utilisateurs sont déjà amis");
        }
        
        // Ajouter l'ami dans les deux sens (relation bidirectionnelle)
        user.getAmis().add(friend);
        friend.getAmis().add(user);
        
        // Sauvegarder explicitement les deux entités
        userRepository.save(user);
        userRepository.save(friend);
        userRepository.flush(); // Forcer l'écriture immédiate en base
    }
    
    @Transactional
    public void removeFriend(Long userId, Long friendId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        User friend = userRepository.findById(friendId)
            .orElseThrow(() -> new RuntimeException("Ami non trouvé"));
        
        // Retirer l'ami dans les deux sens
        user.getAmis().remove(friend);
        friend.getAmis().remove(user);
        
        userRepository.save(user);
        userRepository.save(friend);
        userRepository.flush(); // Forcer l'écriture immédiate en base
    }
    
    @Transactional(readOnly = true)
    public List<UserDTO> getFriends(Long userId) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        return user.getAmis().stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    // Méthode utilitaire pour mise à jour des statistiques
    @Transactional
    public void updateStatistics(Long userId, Integer temps, Double distance, Integer seances) {
        User user = userRepository.findById(userId)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        
        if (temps != null) {
            user.setTempsTotalMinutes(user.getTempsTotalMinutes() + temps);
        }
        if (distance != null) {
            user.setDistanceTotale(user.getDistanceTotale() + distance);
        }
        if (seances != null) {
            user.setSeancesTotales(user.getSeancesTotales() + seances);
        }
        
        userRepository.save(user);
    }
    
    public User findById(Long id) {
        return userRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
    }
    
    private UserDTO convertToDTO(User user) {
        return new UserDTO(
            user.getId(),
            user.getNomUtilisateur(),
            user.getEmail(),
            user.getDateInscription(),
            user.getTotalDefisCreees(),
            user.getTotalDefisParticipes(),
            user.getTotalDefisTermines(),
            user.getDistanceTotale(),
            user.getTempsTotalMinutes(),
            user.getSeancesTotales()
        );
    }
}
