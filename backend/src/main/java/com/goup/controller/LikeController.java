package com.goup.controller;

import com.goup.service.LikeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/likes")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class LikeController {
    
    private final LikeService likeService;
    
    @PostMapping("/challenge/{challengeId}")
    public ResponseEntity<Void> likeChallenge(
            @PathVariable Long challengeId,
            @RequestParam Long userId) {
        try {
            likeService.likeChallenge(userId, challengeId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/challenge/{challengeId}")
    public ResponseEntity<Void> unlikeChallenge(
            @PathVariable Long challengeId,
            @RequestParam Long userId) {
        try {
            likeService.unlikeChallenge(userId, challengeId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @PostMapping("/comment/{commentId}")
    public ResponseEntity<Void> likeComment(
            @PathVariable Long commentId,
            @RequestParam Long userId) {
        try {
            likeService.likeComment(userId, commentId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @DeleteMapping("/comment/{commentId}")
    public ResponseEntity<Void> unlikeComment(
            @PathVariable Long commentId,
            @RequestParam Long userId) {
        try {
            likeService.unlikeComment(userId, commentId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/challenge/{challengeId}/count")
    public ResponseEntity<Long> getChallengeLikesCount(@PathVariable Long challengeId) {
        try {
            long count = likeService.getChallengeLikesCount(challengeId);
            return ResponseEntity.ok(count);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/comment/{commentId}/count")
    public ResponseEntity<Long> getCommentLikesCount(@PathVariable Long commentId) {
        try {
            long count = likeService.getCommentLikesCount(commentId);
            return ResponseEntity.ok(count);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
