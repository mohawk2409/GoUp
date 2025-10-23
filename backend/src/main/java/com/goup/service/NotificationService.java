package com.goup.service;

import com.goup.dto.NotificationDTO;
import com.goup.entity.Notification;
import com.goup.entity.User;
import com.goup.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NotificationService {
    
    private final NotificationRepository notificationRepository;
    private final UserService userService;
    
    @Transactional
    public NotificationDTO createNotification(Long userId, String type, String contenu) {
        User destinataire = userService.findById(userId);
        
        Notification notification = new Notification();
        notification.setType(type);
        notification.setContenu(contenu);
        notification.setDestinataire(destinataire);
        
        notification = notificationRepository.save(notification);
        
        return convertToDTO(notification);
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDTO> getUserNotifications(Long userId) {
        User user = userService.findById(userId);
        return notificationRepository.findByDestinataireOrderByDateCreationDesc(user).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<NotificationDTO> getUnreadNotifications(Long userId) {
        User user = userService.findById(userId);
        return notificationRepository.findByDestinataireAndLu(user, false).stream()
            .map(this::convertToDTO)
            .collect(Collectors.toList());
    }
    
    @Transactional
    public void markAsRead(Long notificationId) {
        Notification notification = notificationRepository.findById(notificationId)
            .orElseThrow(() -> new RuntimeException("Notification non trouvée"));
        
        notification.setLu(true);
        notificationRepository.save(notification);
    }
    
    @Transactional
    public void markAllAsRead(Long userId) {
        User user = userService.findById(userId);
        List<Notification> notifications = notificationRepository.findByDestinataireAndLu(user, false);
        
        notifications.forEach(n -> n.setLu(true));
        notificationRepository.saveAll(notifications);
    }
    
    private NotificationDTO convertToDTO(Notification notification) {
        return new NotificationDTO(
            notification.getId(),
            notification.getType(),
            notification.getContenu(),
            notification.getDateCreation(),
            notification.getLu()
        );
    }
}
