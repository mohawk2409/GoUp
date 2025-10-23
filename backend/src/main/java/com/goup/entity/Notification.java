package com.goup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "notifications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String type; // Ex: "NOUVEAU_COMMENTAIRE", "NOUVEAU_LIKE", "INVITATION_AMI", etc.
    
    @Column(nullable = false, length = 500)
    private String contenu;
    
    @ManyToOne
    @JoinColumn(name = "destinataire_id", nullable = false)
    private User destinataire;
    
    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private LocalDateTime dateCreation;
    
    @Column(nullable = false)
    private Boolean lu = false;
}
