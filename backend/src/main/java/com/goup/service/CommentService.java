package com.goup.service;

import com.goup.dto.CommentCreateDTO;
import com.goup.dto.CommentDTO;
import com.goup.entity.Challenge;
import com.goup.entity.Comment;
import com.goup.entity.User;
import com.goup.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {
    
    private final CommentRepository commentRepository;
    private final UserService userService;
    private final ChallengeService challengeService;
    private final NotificationService notificationService;
    
    @Transactional
    public CommentDTO createComment(Long userId, Long challengeId, CommentCreateDTO dto) {
        User auteur = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        Comment comment = new Comment();
        comment.setTexte(dto.getTexte());
        comment.setAuteur(auteur);
        comment.setChallenge(challenge);
        
        comment = commentRepository.save(comment);
        
        // Notification au créateur du défi
        if (!challenge.getCreateur().getId().equals(userId)) {
            String message = auteur.getNomUtilisateur() + " a commenté votre défi : " + challenge.getNom();
            notificationService.createNotification(challenge.getCreateur().getId(), "NOUVEAU_COMMENTAIRE", message);
        }
        
        return convertToDTO(comment);
    }
    
    @Transactional(readOnly = true)
    public List<CommentDTO> getChallengeComments(Long challengeId) {
        Challenge challenge = challengeService.findById(challengeId);
        return commentRepository.findByChallengeOrderByDateCreationDesc(challenge).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public void deleteComment(Long commentId, Long userId) {
        Comment comment = commentRepository.findById(commentId)
            .orElseThrow(() -> new RuntimeException("Commentaire non trouvé"));
        
        // Vérifier que l'utilisateur est l'auteur
        if (!comment.getAuteur().getId().equals(userId)) {
            throw new RuntimeException("Vous ne pouvez supprimer que vos propres commentaires");
        }
        
        commentRepository.delete(comment);
    }
    
    public Comment findById(Long id) {
        return commentRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Commentaire non trouvé"));
    }
    
    private CommentDTO convertToDTO(Comment comment) {
        return new CommentDTO(
            comment.getId(),
            comment.getTexte(),
            comment.getAuteur().getNomUtilisateur(),
            comment.getAuteur().getId(),
            comment.getDateCreation(),
            comment.getLikes().size()
        );
    }
}
