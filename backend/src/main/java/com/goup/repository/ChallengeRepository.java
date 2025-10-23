package com.goup.repository;

import com.goup.entity.Challenge;
import com.goup.entity.User;
import com.goup.entity.Visibility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge, Long> {
    
    List<Challenge> findByCreateur(User createur);
    
    List<Challenge> findByVisibilite(Visibility visibilite);
    
    // Défis actifs (entre dateDebut et dateFin)
    @Query("SELECT c FROM Challenge c WHERE c.dateDebut <= :now AND c.dateFin >= :now")
    List<Challenge> findActivesChallenges(@Param("now") LocalDateTime now);
    
    // Défis publics ou créés par des amis
    @Query("SELECT c FROM Challenge c WHERE c.visibilite = 'PUBLIC' OR " +
           "(c.visibilite = 'FRIENDS_ONLY' AND c.createur IN :amis)")
    List<Challenge> findVisibleChallenges(@Param("amis") List<User> amis);
    
    // Compter les participants d'un défi
    @Query("SELECT COUNT(p) FROM Participation p WHERE p.challenge.id = :challengeId")
    Long countParticipants(@Param("challengeId") Long challengeId);
    
    // Compter les likes d'un défi
    @Query("SELECT COUNT(l) FROM LikeChallenge l WHERE l.challenge.id = :challengeId")
    Long countLikes(@Param("challengeId") Long challengeId);
    
    // Compter les commentaires d'un défi
    @Query("SELECT COUNT(c) FROM Comment c WHERE c.challenge.id = :challengeId")
    Long countComments(@Param("challengeId") Long challengeId);
}
