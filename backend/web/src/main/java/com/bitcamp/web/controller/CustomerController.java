package com.bitcamp.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.bitcamp.web.common.lambda.IFunction;
import com.bitcamp.web.common.lambda.ISupplier;
// import com.bitcamp.web.common.util.ModelMapper;
import com.bitcamp.web.common.util.Printer;
import com.bitcamp.web.domain.CustomerDTO;
import com.bitcamp.web.entities.Customer;
import com.bitcamp.web.repositories.CustomerRepository;
import com.bitcamp.web.service.CustomerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.BeanUtils;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @Autowired Printer p;
    @Autowired ModelMapper modelMapper;
    @Autowired CustomerRepository repo;

    @Bean
    public ModelMapper ModelMapper(){
        return new ModelMapper();
    }

   @GetMapping("/count")
    public long	count(){
        System.out.println("==============count() 진입===============");
        return customerService.count();
    }

    // @DeleteMapping("/{id}")
    // public void	delete(CustomerDTO dto){//파라메터는 뷰에서 받아서 타입이 제이슨
    //     customerService.delete(null);
    // }
    // @DeleteMapping("/{id}")
    // public void	deleteAll(){//deleteAll은 테이블 두개 날림 (트랜잭션 걸려서 어려워서 나중에함)
    //     customerService.deleteAll();
    // }
    // @DeleteMapping("/{id}")
    // public void	deleteAll(Iterable<CustomerDTO> dtos){
    //     customerService.deleteAll(null);
    // }
    @DeleteMapping("/{id}")
    public HashMap<String,String>	deleteById(@PathVariable String id){
        System.out.println("===========================================deleteById()");
        System.out.println("넘어온 id "+id);
        HashMap<String,String> map = new HashMap<>();
        customerService.deleteById(Long.parseLong(id));
        map.put("result","SUCESS");
        return map;
    }
    @GetMapping("/exists/{id}")
    public boolean	existsById(@PathVariable String id){
        // Long I = Long.parse(id);
        System.out.println("===existsById=== : " + id );
        Long l = Long.parseLong(id);
        return customerService.existsById(l);
    }
    @GetMapping("")
    public Iterable<CustomerDTO>	findAll(){
        System.out.println("findAll 들어옴");
        Iterable<Customer> entities = customerService.findAll();
        List<CustomerDTO> list = new ArrayList<>();
        for (Customer s : entities) {
            CustomerDTO cust = modelMapper.map(s, CustomerDTO.class);
            list.add(cust);
        }
        return list;
    }
    // @GetMapping("/{id}")
    // public Iterable<CustomerDTO>	findAllById(Iterable<Long> ids){
    //     Iterable<Customer> entity = customerService.findAllById(ids);
    //     return null;
    // }
    @GetMapping("/{id}")
    public CustomerDTO	findById(@PathVariable String id){
        System.out.println("findById 안으로 들어온" + id);
        
        //엔티티를 디티오로 바꿔야 함
        Customer entity = customerService
                            .findById(Long.parseLong(id))
                            .orElseThrow(EntityNotFoundException::new) ;
        CustomerDTO c = modelMapper.map(entity,CustomerDTO.class);
        System.out.println(c);
        return c;
    }
    
    @PostMapping("")
    public HashMap<String,String>	save(@RequestBody CustomerDTO dto){
        System.out.println("save()===================");
        System.out.println("화원가입"+dto.toString());
        HashMap<String,String> map = new HashMap<>();
        // Customer entity = BeanUtils.copyProperties(dto, new Customer()); //밑에 소스가 좀 오류가 있다고 함
        //DTO를 엔티티로 바꿔야함
        Customer entity = new Customer();
        entity.setAddress(dto.getAddress());
        entity.setCity(dto.getCity());
        entity.setCustomerId(dto.getCustomerId());
        entity.setCustomerName(dto.getCustomerName());
        entity.setPassword(dto.getPassword());
        entity.setPhone(dto.getPhone());
        entity.setPhoto(dto.getPhoto());
        entity.setPostalcode(dto.getPostalcode());
        entity.setSsn(dto.getSsn());
        // entity = modelMapper.map(dto, Customer.class);//안돼서 엔티티에 세터를 넣고 함 ..보안이 깨지지만..
        // Customer entity = modelMapper.map(dto, Customer.class);
        System.out.println("엔티티로 바뀐 정보       "+entity.toString());
        
        customerService.save(entity);
        map.put("result","SUCESS");
        return map;
        // return null;
    }
    // @PostMapping
    // public Iterable<CustomerDTO>	saveAll(Iterable<CustomerDTO> dtos){
    //     Iterable<Customer> entity =customerService.saveAll(null);
    //     return null;
    // }

    // @GetMapping("/login")
    // public HashMap<String,String>	login(@RequestBody CustomerDTO customerDTO){//패스워드는 pathvarible로 하면 안됨
    //     System.out.println("==================================login() 들어옴");
    //     System.out.println("들어온 값"+customerDTO.toString());
    //     HashMap<String,String> map = new HashMap<>();
    //     map.put("result","SUCESS");
    //     return map;
    // }

    @PostMapping("/login")
    public CustomerDTO login(@RequestBody CustomerDTO dto){//보안때매 String으로 받으면 안됨
        System.out.println("------------------------------------------login()");
        //syso로 찍어버리면 상태를 주게 됨 찍지말기..
        System.out.println(dto.getCustomerId().toString());
        System.out.println(dto.getPassword().toString());
        //리턴에서 dto.get~~하면 찍어볼 수 없으므로 이렇게
        //서비스에 있는거 전부 람다처리 가능
        ISupplier fx = ()->{//오토와이어드 걸면 안됨 메소드 밖에서 상태를 keep하면 안된다
            return repo.findByCustomerIdAndPassword(dto.getCustomerId(), dto.getPassword());   
        };
        //함수형 프로그래밍의 특징 - 재활용 하지않겠다
        
        // return (CustomerDTO)fx.apply(dto); //이렇게 하면 강제 형변환이 일어나서 안됨
        return modelMapper.map(fx.get(),CustomerDTO.class); //요걸 하면 서비스를 다 날려버려도 됨 //어디 할당하지말고 이렇게 바로 리턴 
        //이렇게 코딩하는걸 end to end라고 한다 끝까지 다 배달해버리는것
        // return null;
    }
}