package com.goup.controller;

import com.goup.dto.CommentCreateDTO;
import com.goup.dto.CommentDTO;
import com.goup.service.CommentService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CommentController {
    
    private final CommentService commentService;
    
    @PostMapping
    public ResponseEntity<CommentDTO> createComment(
            @RequestParam Long userId,
            @RequestParam Long challengeId,
            @Valid @RequestBody CommentCreateDTO dto) {
        try {
            CommentDTO comment = commentService.createComment(userId, challengeId, dto);
            return ResponseEntity.status(HttpStatus.CREATED).body(comment);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
    
    @GetMapping("/challenge/{challengeId}")
    public ResponseEntity<List<CommentDTO>> getChallengeComments(@PathVariable Long challengeId) {
        try {
            List<CommentDTO> comments = commentService.getChallengeComments(challengeId);
            return ResponseEntity.ok(comments);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(
            @PathVariable Long commentId,
            @RequestParam Long userId) {
        try {
            commentService.deleteComment(commentId, userId);
            return ResponseEntity.ok().build();
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().build();
        }
    }
}
