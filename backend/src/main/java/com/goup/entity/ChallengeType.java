package com.goup.entity;

public enum ChallengeType {
    TEMPS,        
    DISTANCE,
    FREQUENCE;


    public String getUnite() {
        return switch (this) {
            case TEMPS -> "minutes";
            case DISTANCE -> "km";
            case FREQUENCE -> "séances";
        };
    }
    
    public String getDescription() {
        return switch (this) {
            case TEMPS -> "Durée totale de l'activité";
            case DISTANCE -> "Distance totale à parcourir";
            case FREQUENCE -> "Nombre de séances à réaliser";
        };
    }
}
