package com.goup.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private Long id;
    private String nomUtilisateur;
    private String email;
    private LocalDateTime dateInscription;
    private Integer totalDefisCreees;
    private Integer totalDefisParticipes;
    private Integer totalDefisTermines;
    private Double distanceTotale;
    private Integer tempsTotalMinutes;
    private Integer seancesTotales;
}
