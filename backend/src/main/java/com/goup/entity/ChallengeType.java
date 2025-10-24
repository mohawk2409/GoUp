package com.goup.entity;

public enum ChallengeType {
    TEMPS,        
    DISTANCE,
    REPETITION,
    FREQUENCE;


    public String getUnite() {
        return switch (this) {
            case TEMPS -> "minutes";
            case DISTANCE -> "km";
            case REPETITION -> "répétitions";
            case FREQUENCE -> "séances";
        };
    }
    
    public String getDescription() {
        return switch (this) {
            case TEMPS -> "Durée totale de l'activité";
            case DISTANCE -> "Distance totale à parcourir";
            case REPETITION -> "Nombre de répétitions à effectuer";
            case FREQUENCE -> "Nombre de séances à réaliser";
        };
    }
}
