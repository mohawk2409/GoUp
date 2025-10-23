package com.goup.repository;

import com.goup.entity.Sport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SportRepository extends JpaRepository<Sport, Long> {
    
    Optional<Sport> findByNom(String nom);
    
    List<Sport> findByCategorie(String categorie);
}
