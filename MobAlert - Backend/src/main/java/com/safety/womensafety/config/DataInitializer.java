package com.safety.womensafety.config;

import com.safety.womensafety.model.Admin;
import com.safety.womensafety.repository.AdminRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final AdminRepository adminRepository;

    @Override
    public void run(String... args) {
        String sampleEmail = "admin@mobalert.com";
        if (adminRepository.findByEmail(sampleEmail).isEmpty()) {
            Admin admin = new Admin();
            admin.setName("MobAlert Operations Lead");
            admin.setEmail(sampleEmail);
            admin.setPassword("password123");
            adminRepository.save(admin);
            log.info(">>> Seeded default sample admin account: {} / password123", sampleEmail);
        }
    }
}
