package com.niit.gatewayserver;

import com.niit.gatewayserver.filter.JwtFilter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration			//Tags the class as a source of bean definitions for the application context.
@EnableEurekaClient      //@EnableEurekaCient will initilize the service discovery using eureka server,
// its like explicitly specifying to use EUREKA
public class GatewayserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(GatewayserverApplication.class, args);
	}

//	required 2 beans : routing nd cross cutting
	@Bean
	public RouteLocator myroutes(RouteLocatorBuilder builder) 			//http:localhost:9000
	{
		return builder.routes()
				.route(p->p.path("/api/u2/**").uri("lb://user-authentication-service"))  //WHENEVER THERE IS A REQUEST WITH API/U2 it sud go to userauth
				.route(p->p.path("/api/u1/**").uri("lb://movie-service"))  			//MovieService
				.build();
	}


	@Bean
	public FilterRegistrationBean jwtFilter(){
		FilterRegistrationBean filterBean=new FilterRegistrationBean();
		filterBean.setFilter(new JwtFilter());
		filterBean.addUrlPatterns("/api/u1/user/*");

		return filterBean;
	}

}
