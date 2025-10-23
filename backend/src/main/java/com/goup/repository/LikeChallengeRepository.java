package com.goup.repository;

import com.goup.entity.Challenge;
import com.goup.entity.LikeChallenge;
import com.goup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeChallengeRepository extends JpaRepository<LikeChallenge, Long> {
    
    Optional<LikeChallenge> findByUserAndChallenge(User user, Challenge challenge);
    
    boolean existsByUserAndChallenge(User user, Challenge challenge);
    
    long countByChallenge(Challenge challenge);
    
    void deleteByUserAndChallenge(User user, Challenge challenge);
}
