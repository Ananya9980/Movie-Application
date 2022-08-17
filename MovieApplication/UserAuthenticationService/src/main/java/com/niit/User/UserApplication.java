package com.niit.User;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.netflix.hystrix.EnableHystrix;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableHystrix
public class UserApplication {

	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}


//	@Bean
//	public FilterRegistrationBean jwtFilter(){
//		FilterRegistrationBean filterBean=new FilterRegistrationBean();
//		filterBean.setFilter(new JwtFilter());
//		filterBean.addUrlPatterns("/api/u1/*");
//		//filterBean.addUrlPatterns("/check");
//		return filterBean;
//	}

}
