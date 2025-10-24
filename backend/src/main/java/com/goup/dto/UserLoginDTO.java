package com.goup.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UserLoginDTO {
    
    @NotBlank(message = "L'identifiant est requis (email ou nom d'utilisateur)")
    private String identifiant; //mail ou nom d'utilisateur
    
    @NotBlank(message = "Le mot de passe est requis")
    private String motDePasse;
}
