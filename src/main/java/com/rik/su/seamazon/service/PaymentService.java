package com.rik.su.seamazon.service;

import com.rik.su.seamazon.model.Payment;
import com.rik.su.seamazon.model.PaymentRequest;
import com.rik.su.seamazon.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    public boolean processPayment(PaymentRequest paymentRequest) {
        // Simulate payment processing logic
        boolean paymentSuccess = true; // Simplified for this example

        Payment payment = new Payment();
        payment.setUserId(paymentRequest.getUserId());
        payment.setPaymentStatus(paymentSuccess ? "success" : "failure");
        payment.setProductIds(paymentRequest.getProductIds());

        paymentRepository.save(payment);
        return paymentSuccess;
    }
}
