package com.goup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "challenges")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Challenge {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String nom;
    
    private String description;
    
    @ManyToOne
    @JoinColumn(name = "sport_id", nullable = false)
    private Sport sport;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ChallengeType type;
    
    @Column(nullable = false)
    private Integer objectif;
    
    @Column(nullable = false)
    private LocalDateTime dateDebut;
    
    @Column(nullable = false)
    private LocalDateTime dateFin;
    
    @ManyToOne
    @JoinColumn(name = "createur_id", nullable = false)
    private User createur;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Visibility visibilite = Visibility.PUBLIC;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;
    
    // Relations entre les challenges et les autres entités
    @OneToMany(mappedBy = "challenge", cascade = CascadeType.ALL)
    private Set<Participation> participants = new HashSet<>();
    
    @OneToMany(mappedBy = "challenge", cascade = CascadeType.ALL)
    private Set<Comment> commentaires = new HashSet<>();
    
    @OneToMany(mappedBy = "challenge", cascade = CascadeType.ALL)
    private Set<LikeChallenge> likes = new HashSet<>();
}
