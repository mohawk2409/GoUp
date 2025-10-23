package com.goup.controller;

import com.goup.dto.ParticipationDTO;
import com.goup.dto.ProgressionUpdateDTO;
import com.goup.service.ParticipationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/participations")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ParticipationController {
    
    private final ParticipationService participationService;
    
    @PostMapping
    public ResponseEntity<ParticipationDTO> participateInChallenge(
            @RequestParam Long userId,
            @RequestParam Long challengeId) {
        try {
            ParticipationDTO participation = participationService.participateInChallenge(userId, challengeId);
            return ResponseEntity.status(HttpStatus.CREATED).body(participation);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PutMapping
    public ResponseEntity<ParticipationDTO> updateProgression(
            @RequestParam Long userId,
            @RequestParam Long challengeId,
            @Valid @RequestBody ProgressionUpdateDTO dto) {
        try {
            ParticipationDTO participation = participationService.updateProgression(userId, challengeId, dto);
            return ResponseEntity.ok(participation);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ParticipationDTO>> getUserParticipations(@PathVariable Long userId) {
        try {
            List<ParticipationDTO> participations = participationService.getUserParticipations(userId);
            return ResponseEntity.ok(participations);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/challenge/{challengeId}")
    public ResponseEntity<List<ParticipationDTO>> getChallengeParticipations(@PathVariable Long challengeId) {
        try {
            List<ParticipationDTO> participations = participationService.getChallengeParticipations(challengeId);
            return ResponseEntity.ok(participations);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping
    public ResponseEntity<ParticipationDTO> getParticipation(
            @RequestParam Long userId,
            @RequestParam Long challengeId) {
        try {
            ParticipationDTO participation = participationService.getParticipation(userId, challengeId);
            return ResponseEntity.ok(participation);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
