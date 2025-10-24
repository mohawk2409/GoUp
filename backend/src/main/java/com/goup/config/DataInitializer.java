package com.goup.config;

import com.goup.entity.Sport;
import com.goup.repository.SportRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DataInitializer implements CommandLineRunner {
    
    private final SportRepository sportRepository;
    
    @Override
    public void run(String... args) {
        // Initialiser des sports
        if (sportRepository.count() == 0) {
            // Course à pied
            sportRepository.save(new Sport(null, "Course à pied", "Cardio"));
            sportRepository.save(new Sport(null, "Sprint", "Cardio"));
            sportRepository.save(new Sport(null, "Marathon", "Cardio"));
            
            // Cyclisme
            sportRepository.save(new Sport(null, "Vélo", "Cardio"));
            sportRepository.save(new Sport(null, "VTT", "Cardio"));
            
            // Natation
            sportRepository.save(new Sport(null, "Natation", "Cardio"));
            
            // Musculation
            sportRepository.save(new Sport(null, "Pompes", "Musculation"));
            sportRepository.save(new Sport(null, "Tractions", "Musculation"));
            sportRepository.save(new Sport(null, "Squats", "Musculation"));
            sportRepository.save(new Sport(null, "Abdominaux", "Musculation"));
            
            // Sports d'équipe
            sportRepository.save(new Sport(null, "Football", "Sports d'équipe"));
            sportRepository.save(new Sport(null, "Basketball", "Sports d'équipe"));
            sportRepository.save(new Sport(null, "Volleyball", "Sports d'équipe"));
            
            // Autres
            sportRepository.save(new Sport(null, "Yoga", "Bien-être"));
            sportRepository.save(new Sport(null, "Pilates", "Bien-être"));
            sportRepository.save(new Sport(null, "Randonnée", "Plein air"));
            sportRepository.save(new Sport(null, "Escalade", "Plein air"));
            
            System.out.println("Sports initialisés avec succès");
        }
    }
}
