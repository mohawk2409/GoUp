package com.goup.controller;

import com.goup.dto.ChallengeCreateDTO;
import com.goup.dto.ChallengeDTO;
import com.goup.entity.Visibility;
import com.goup.service.ChallengeService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/challenges")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChallengeController {
    
    private final ChallengeService challengeService;
    
    @PostMapping
    public ResponseEntity<ChallengeDTO> createChallenge(
            @RequestParam Long userId,
            @Valid @RequestBody ChallengeCreateDTO dto) {
        try {
            ChallengeDTO challenge = challengeService.createChallenge(userId, dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(challenge);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ChallengeDTO> getChallengeById(@PathVariable Long id) {
        try {
            ChallengeDTO challenge = challengeService.getChallengeById(id);
            return ResponseEntity.ok(challenge);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping
    public ResponseEntity<List<ChallengeDTO>> getAllChallenges() {
        List<ChallengeDTO> challenges = challengeService.getAllChallenges();
        return ResponseEntity.ok(challenges);
    }
    
    @GetMapping("/active")
    public ResponseEntity<List<ChallengeDTO>> getActiveChallenges() {
        List<ChallengeDTO> challenges = challengeService.getActiveChallenges();
        return ResponseEntity.ok(challenges);
    }
    
    @GetMapping("/visible/{userId}")
    public ResponseEntity<List<ChallengeDTO>> getVisibleChallenges(@PathVariable Long userId) {
        try {
            List<ChallengeDTO> challenges = challengeService.getVisibleChallenges(userId);
            return ResponseEntity.ok(challenges);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ChallengeDTO>> getChallengesByCreateur(@PathVariable Long userId) {
        try {
            List<ChallengeDTO> challenges = challengeService.getChallengesByCreateur(userId);
            return ResponseEntity.ok(challenges);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{challengeId}/visibility")
    public ResponseEntity<Void> updateVisibility(
            @PathVariable Long challengeId,
            @RequestParam Visibility visibility) {
        try {
            challengeService.updateVisibility(challengeId, visibility);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
