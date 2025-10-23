package com.goup.controller;

import com.goup.entity.Sport;
import com.goup.service.SportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sports")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SportController {
    
    private final SportService sportService;
    
    @GetMapping
    public ResponseEntity<List<Sport>> getAllSports() {
        List<Sport> sports = sportService.getAllSports();
        return ResponseEntity.ok(sports);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Sport> getSportById(@PathVariable Long id) {
        try {
            Sport sport = sportService.getSportById(id);
            return ResponseEntity.ok(sport);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/categorie/{categorie}")
    public ResponseEntity<List<Sport>> getSportsByCategorie(@PathVariable String categorie) {
        List<Sport> sports = sportService.getSportsByCategorie(categorie);
        return ResponseEntity.ok(sports);
    }
    
    @PostMapping
    public ResponseEntity<Sport> createSport(@RequestParam String nom, @RequestParam String categorie) {
        Sport sport = sportService.createSport(nom, categorie);
        return ResponseEntity.status(HttpStatus.CREATED).body(sport);
    }
}
