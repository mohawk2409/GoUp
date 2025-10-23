package com.goup.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ParticipationDTO {
    private Long id;
    private String userNom;
    private Long userId;
    private String challengeNom;
    private Long challengeId;
    private LocalDateTime dateInscription;
    private Integer tempsMinutes;
    private Double distanceMetres;
    private Integer repetitions;
    private Boolean termine;
    private LocalDateTime derniereMiseAJour;
}
