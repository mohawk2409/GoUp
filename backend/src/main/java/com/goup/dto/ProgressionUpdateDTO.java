package com.goup.dto;

import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

@Data
public class ProgressionUpdateDTO {
    
    @PositiveOrZero(message = "Le temps doit être positif ou nul")
    private Integer tempsMinutes;
    
    @PositiveOrZero(message = "La distance doit être positive ou nulle")
    private Double distanceMetres;
    
    @PositiveOrZero(message = "Les répétitions doivent être positives ou nulles")
    private Integer repetitions;
}
