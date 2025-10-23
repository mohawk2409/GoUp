package com.goup.repository;

import com.goup.entity.Comment;
import com.goup.entity.LikeComment;
import com.goup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeCommentRepository extends JpaRepository<LikeComment, Long> {
    
    Optional<LikeComment> findByUserAndComment(User user, Comment comment);
    
    boolean existsByUserAndComment(User user, Comment comment);
    
    long countByComment(Comment comment);
    
    void deleteByUserAndComment(User user, Comment comment);
}
