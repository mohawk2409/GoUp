package com.goup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "participations")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Participation {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "challenge_id", nullable = false)
    private Challenge challenge;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateInscription;
    
    // Progression de l'utilisateur
    private Integer tempsMinutes = 0;      // Temps effectué en minutes
    private Double distanceMetres = 0.0;   // Distance effectuée en mètres
    private Integer repetitions = 0;       // Répétitions effectuées
    
    private Boolean termine = false;       // Défi terminé ?
    
    @Column(updatable = true)
    private LocalDateTime derniereMiseAJour;
}
