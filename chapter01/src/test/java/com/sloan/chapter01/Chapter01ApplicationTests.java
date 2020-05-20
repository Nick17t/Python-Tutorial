package com.sloan.chapter01;

import com.sloan.chapter01.controller.HelloController;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class Chapter01ApplicationTests {
    @Autowired
    private HelloController helloController;
    @Test
    public void contextLoads() {
        String hello = helloController.hello();
        System.out.println(hello);
    }

}
