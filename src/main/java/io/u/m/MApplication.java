package io.u.m;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("io.u")
@EntityScan("io.u")
public class MApplication {

	public static void main(String[] args) {
		SpringApplication.run(MApplication.class, args);
	}

}
