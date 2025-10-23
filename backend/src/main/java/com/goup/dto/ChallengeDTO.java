package com.goup.dto;

import com.goup.entity.ChallengeType;
import com.goup.entity.Visibility;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChallengeDTO {
    private Long id;
    private String nom;
    private String description;
    private String sportNom;
    private String sportCategorie;
    private ChallengeType type;
    private Integer objectif;
    private LocalDateTime dateDebut;
    private LocalDateTime dateFin;
    private String createurNom;
    private Long createurId;
    private Visibility visibilite;
    private LocalDateTime dateCreation;
    private Integer nombreParticipants;
    private Integer nombreLikes;
    private Integer nombreCommentaires;
}
