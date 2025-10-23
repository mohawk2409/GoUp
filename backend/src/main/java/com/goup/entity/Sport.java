package com.goup.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sports")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sport {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String nom;
    
    @Column(nullable = false)
    private String categorie;
}
