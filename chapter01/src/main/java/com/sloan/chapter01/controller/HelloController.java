package com.sloan.chapter01.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Sloan Cheung
 * @create 5/19/2020 4:40 PM
 * @description
 */
@RestController
public class HelloController {
    @GetMapping("/hello")
    public String hello(){
        return "hello ! spring boot!";
    }
}