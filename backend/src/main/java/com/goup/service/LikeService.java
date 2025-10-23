package com.goup.service;

import com.goup.entity.*;
import com.goup.repository.LikeChallengeRepository;
import com.goup.repository.LikeCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class LikeService {
    
    private final LikeChallengeRepository likeChallengeRepository;
    private final LikeCommentRepository likeCommentRepository;
    private final UserService userService;
    private final ChallengeService challengeService;
    private final CommentService commentService;
    private final NotificationService notificationService;
    
    @Transactional
    public void likeChallenge(Long userId, Long challengeId) {
        User user = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        // Vérifier si déjà liké
        if (likeChallengeRepository.existsByUserAndChallenge(user, challenge)) {
            throw new RuntimeException("Vous avez déjà liké ce défi");
        }
        
        LikeChallenge like = new LikeChallenge();
        like.setUser(user);
        like.setChallenge(challenge);
        
        likeChallengeRepository.save(like);
        
        // Notification au créateur
        if (!challenge.getCreateur().getId().equals(userId)) {
            String message = user.getNomUtilisateur() + " a liké votre défi : " + challenge.getNom();
            notificationService.createNotification(challenge.getCreateur().getId(), "NOUVEAU_LIKE", message);
        }
    }
    
    @Transactional
    public void unlikeChallenge(Long userId, Long challengeId) {
        User user = userService.findById(userId);
        Challenge challenge = challengeService.findById(challengeId);
        
        likeChallengeRepository.deleteByUserAndChallenge(user, challenge);
    }
    
    @Transactional
    public void likeComment(Long userId, Long commentId) {
        User user = userService.findById(userId);
        Comment comment = commentService.findById(commentId);
        
        // Vérifier si déjà liké
        if (likeCommentRepository.existsByUserAndComment(user, comment)) {
            throw new RuntimeException("Vous avez déjà liké ce commentaire");
        }
        
        LikeComment like = new LikeComment();
        like.setUser(user);
        like.setComment(comment);
        
        likeCommentRepository.save(like);
        
        // Notification à l'auteur du commentaire
        if (!comment.getAuteur().getId().equals(userId)) {
            String message = user.getNomUtilisateur() + " a liké votre commentaire";
            notificationService.createNotification(comment.getAuteur().getId(), "NOUVEAU_LIKE", message);
        }
    }
    
    @Transactional
    public void unlikeComment(Long userId, Long commentId) {
        User user = userService.findById(userId);
        Comment comment = commentService.findById(commentId);
        
        likeCommentRepository.deleteByUserAndComment(user, comment);
    }
    
    @Transactional(readOnly = true)
    public long getChallengeLikesCount(Long challengeId) {
        Challenge challenge = challengeService.findById(challengeId);
        return likeChallengeRepository.countByChallenge(challenge);
    }
    
    @Transactional(readOnly = true)
    public long getCommentLikesCount(Long commentId) {
        Comment comment = commentService.findById(commentId);
        return likeCommentRepository.countByComment(comment);
    }
}
