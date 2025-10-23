package com.goup.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentDTO {
    private Long id;
    private String texte;
    private String auteurNom;
    private Long auteurId;
    private LocalDateTime dateCreation;
    private Integer nombreLikes;
}
