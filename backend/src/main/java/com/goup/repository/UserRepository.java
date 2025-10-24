package com.goup.repository;

import com.goup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
    Optional<User> findByEmail(String email);
    
    Optional<User> findByNomUtilisateur(String nomUtilisateur);
    
    boolean existsByEmail(String email);
    
    boolean existsByNomUtilisateur(String nomUtilisateur);
}