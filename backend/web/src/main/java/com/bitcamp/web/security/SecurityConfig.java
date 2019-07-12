package com.bitcamp.web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import lombok.extern.java.Log;

/**
 * SecurityConfig
 */
@Log
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
    @Override
    protected void configure(HttpSecurity http) throws Exception{
        log.info("security Config........");
        //빌더패턴
        http
            .authorizeRequests()
                .antMatchers("/customer/**").permitAll() //모든화면 다 볼 수 있는 것
                .antMatchers("/employee/**").hasRole("MANAGER"); //관리자만 볼수있는 것
        http.formLogin();
    }

    @Autowired
    public void configGlobal(AuthenticationManagerBuilder auth) throws Exception{
        log.info("build Auth global.......");
        auth.inMemoryAuthentication()
            .withUser("manager")
            .password("1")
            .roles("MANAGER");
    }
}