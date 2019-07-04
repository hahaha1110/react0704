package com.bitcamp.web.repositories;

// import static org.junit.Assert.assertThat;
import static org.hamcrest.MatcherAssert.assertThat; 
import static org.hamcrest.Matchers.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


/**
 * CustomerRepositoryTest
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class CustomerRepositoryTest {
    @Autowired CustomerRepository repo;

    @Test
    public void countTest() throws Exception{// 테스트 하다가 프로그램 뻗을 수도 있어서 익셉션
        Long count = repo.count(); //왜 되는지 알아야 함 70페이지 참고
        assertThat(Integer.parseInt(count+"") , equalTo(31)); //이게 그 유명한 junit
    }
    //인서트는 더미때문에 안되고 나머지는 다른방식으로 실습해서 테스트해보면 됨
    //TDD
}