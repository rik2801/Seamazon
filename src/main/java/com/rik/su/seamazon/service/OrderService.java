package com.rik.su.seamazon.service;

import com.rik.su.seamazon.model.*;
import com.rik.su.seamazon.repository.OrderRepository;
import com.rik.su.seamazon.repository.ProductRepository;
import com.rik.su.seamazon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Map;


@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    @Transactional
    public Order createOrder(Long userId, Date orderDate, Map<String, Integer> productQuantities) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Order order = new Order(user, orderDate, OrderStatus.PENDING);

        for (Map.Entry<String, Integer> entry : productQuantities.entrySet()) {
            Long productId = Long.parseLong(entry.getKey());
            Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

            if (product.getStock() < entry.getValue()) {
                throw new RuntimeException("Insufficient stock for product: " + product.getName());
            }

            // Update stock
            product.setStock(product.getStock() - entry.getValue());
            productRepository.save(product);

            // Create and add the order item
            OrderItem orderItem = new OrderItem();
            orderItem.setProduct(product);
            orderItem.setOrder(order);
            orderItem.setQuantity(entry.getValue());
            orderItem.setPrice(product.getPrice());  // Make sure price is set from Product

            order.addOrderItem(orderItem);
        }

        return orderRepository.save(order);
    }

    @Transactional(readOnly = true)
    public Order findOrderById(Long id) {
        return orderRepository.findById(id).orElse(null);
    }
    @Transactional
    public List<Order> findOrdersByUserId(Long userId) {
        return orderRepository.findByUserId(userId);
    }
    @Transactional
    public Order updateOrder(Long id, Order orderDetails) {
        Order existingOrder = orderRepository.findById(id).orElse(null);
        if (existingOrder == null) {
            return null;
        }
        existingOrder.setStatus(orderDetails.getStatus());
        existingOrder.setOrderItems(orderDetails.getOrderItems());
        return orderRepository.save(existingOrder);
    }

    @Transactional
    public boolean deleteOrder(Long id) {
        Order order = orderRepository.findById(id).orElse(null);
        if (order == null) {
            return false;
        }
        orderRepository.delete(order);
        return true;
    }
}
