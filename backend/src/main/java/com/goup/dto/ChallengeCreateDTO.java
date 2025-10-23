package com.goup.dto;

import com.goup.entity.ChallengeType;
import com.goup.entity.Visibility;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChallengeCreateDTO {
    
    @NotBlank(message = "Le nom du défi est requis")
    private String nom;
    
    private String description;
    
    @NotNull(message = "Le sport est requis")
    private Long sportId;
    
    @NotNull(message = "Le type de défi est requis")
    private ChallengeType type;
    
    @NotNull(message = "L'objectif est requis")
    @Positive(message = "L'objectif doit être positif")
    private Integer objectif;
    
    @NotNull(message = "La date de début est requise")
    private LocalDateTime dateDebut;
    
    @NotNull(message = "La date de fin est requise")
    @Future(message = "La date de fin doit être dans le futur")
    private LocalDateTime dateFin;
    
    @NotNull(message = "La visibilité est requise")
    private Visibility visibilite;
}
