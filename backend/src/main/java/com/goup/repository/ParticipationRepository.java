package com.goup.repository;

import com.goup.entity.Challenge;
import com.goup.entity.Participation;
import com.goup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
    
    List<Participation> findByUser(User user);
    
    List<Participation> findByChallenge(Challenge challenge);
    
    Optional<Participation> findByUserAndChallenge(User user, Challenge challenge);
    
    boolean existsByUserAndChallenge(User user, Challenge challenge);
    
    List<Participation> findByUserAndTermine(User user, Boolean termine);
}
