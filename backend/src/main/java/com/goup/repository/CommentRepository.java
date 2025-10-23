package com.goup.repository;

import com.goup.entity.Challenge;
import com.goup.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    
    List<Comment> findByChallenge(Challenge challenge);
    
    List<Comment> findByChallengeOrderByDateCreationDesc(Challenge challenge);
}
