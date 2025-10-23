package com.goup.service;

import com.goup.entity.Sport;
import com.goup.repository.SportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SportService {
    
    private final SportRepository sportRepository;
    
    @Transactional(readOnly = true)
    public List<Sport> getAllSports() {
        return sportRepository.findAll();
    }
    
    @Transactional(readOnly = true)
    public Sport getSportById(Long id) {
        return sportRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Sport non trouvé"));
    }
    
    @Transactional(readOnly = true)
    public List<Sport> getSportsByCategorie(String categorie) {
        return sportRepository.findByCategorie(categorie);
    }
    
    @Transactional
    public Sport createSport(String nom, String categorie) {
        Sport sport = new Sport();
        sport.setNom(nom);
        sport.setCategorie(categorie);
        return sportRepository.save(sport);
    }
}
