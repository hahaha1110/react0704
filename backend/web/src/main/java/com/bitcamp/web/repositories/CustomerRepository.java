package com.bitcamp.web.repositories;

import java.util.List;

import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer,Long>{//DTO는 데이터값이고 Customer이 설정값이라서 이걸 담아와야함 헷갈 x
    //상속받았기 때문에 여기 아무것도 안썼는데 되는거임
    
    //내장된 숫자가 아니라 진짜 아이디로 찾는거
    //리턴타입은 엔티티로 고정
    //여러개일때는 엔티티타입의 콜렉션
    //대소문자 구분하므로 주의
    public Customer findByCustomerIdAndPassword(String customerId, String password);
}