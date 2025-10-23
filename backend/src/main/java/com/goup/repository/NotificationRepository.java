package com.goup.repository;

import com.goup.entity.Notification;
import com.goup.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {
    
    List<Notification> findByDestinataire(User destinataire);
    
    List<Notification> findByDestinataireOrderByDateCreationDesc(User destinataire);
    
    List<Notification> findByDestinataireAndLu(User destinataire, Boolean lu);
}
