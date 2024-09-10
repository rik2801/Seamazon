package com.rik.su.seamazon.repository;

import com.rik.su.seamazon.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}

