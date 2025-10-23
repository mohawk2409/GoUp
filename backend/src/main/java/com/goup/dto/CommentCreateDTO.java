package com.goup.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class CommentCreateDTO {
    
    @NotBlank(message = "Le texte du commentaire est requis")
    private String texte;
}
