package com.rik.su.seamazon;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@Configuration
@EnableJpaRepositories(basePackages = "com.rik.su.seamazon.repository")
@EntityScan("com.rik.su.seamazon.model")
public class SeamazonApplication {

	public static void main(String[] args) {
		SpringApplication.run(SeamazonApplication.class, args);
	}

}
