package com.goup.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String nomUtilisateur;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String motDePasse;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateInscription;
    
    // Statistiques calculées 
    private Integer totalDefisCreees = 0;
    private Integer totalDefisParticipes = 0;
    private Integer totalDefisTermines = 0;
    private Double distanceTotale = 0.0;
    private Integer tempsTotalMinutes = 0;
    private Integer repetitionsTotales = 0;
    
    // Relations
    @OneToMany(mappedBy = "createur")
    private Set<Challenge> defisCreees = new HashSet<>();
    
    @OneToMany(mappedBy = "user")
    private Set<Participation> participations = new HashSet<>();
    
    @OneToMany(mappedBy = "auteur")
    private Set<Comment> commentaires = new HashSet<>();
    
    @OneToMany(mappedBy = "destinataire")
    private Set<Notification> notifications = new HashSet<>();
    
    // Amis (relation bidirectionnelle)
    @ManyToMany
    @JoinTable(
        name = "friendships",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "friend_id")
    )
    private Set<User> amis = new HashSet<>();
}
