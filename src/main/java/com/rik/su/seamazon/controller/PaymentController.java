package com.rik.su.seamazon.controller;

import com.rik.su.seamazon.model.PaymentRequest;
import com.rik.su.seamazon.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Map<String, String>> processPayment(@RequestBody PaymentRequest paymentRequest) {
        boolean success = paymentService.processPayment(paymentRequest);
        Map<String, String> response = new HashMap<>();
        response.put("status", success ? "success" : "failure");
        return ResponseEntity.ok(response);
    }
}

