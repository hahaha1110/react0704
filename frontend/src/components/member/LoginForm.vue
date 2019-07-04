<template>
<div>
  <Nav></Nav>
  <form>
    <div class="form-group">
      <label for="email">ID:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter email" v-model="customerId">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="text" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
    </div>
    <div class="checkbox">
      <label><input type="checkbox"> Remember me</label>
    </div>
    <button class="btn btn-default" @click="count">count</button>
    <button class="btn btn-default" @click="deleteById">deleteById</button>
    <button class="btn btn-default" @click="existsById">existsById</button>
    <button class="btn btn-default" @click="findAll">findAll</button>
    <button class="btn btn-default" @click="findById">findById</button>
    <button class="btn btn-default" @click="save">save</button>
    <button class="btn btn-default" @click="login">login</button>
  </form>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
import axios from 'axios'

export default {
  data(){
    return {//겟 엘리먼트 바이 아이디를 간소화
      context :'http://localhost:9000/customers',
      // customerId :  'hodddsfng',
      customerId :  '',
      customerName : '홍길',
      password : '', 
      ssn : '554353687', 
      phone : '132-4444-2222', 
      city : '홍길동', 
      address : '홍ssss길동dd', 
      postalcode : '11111', 
      photo : '홍길동'
    }
    
  },
  components: {
    Nav,
    Footer
  },
  methods:{

    count(){
         axios.get(`${this.context}/count`)
         .then(res=>{
             alert(`count() SUCESS : ${res.data}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    deleteById(){
         axios.delete(`${this.context}/1`)
         .then(res=>{
             alert(`SUCESS2:${res.data}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    existsById(){
         axios.get(`${this.context}/exists/1`)
         .then(res=>{
             alert(`existsById() SUCCESS:${res.data}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    findAll(){
         axios.get(`${this.context}`)
         .then(res=>{
             alert(`findAll:${res.data[0].customerName}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    findById(){
         axios.get(`${this.context}/1`)
         .then(res=>{
             alert(`findById()SUCCESS : ${res.data.customerName}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    save(){
        let data = {
          id : '40',
          customerId : this.customerId,
          customerName : this.customerName,
          customerName : this.customerName,
          password : this.password, 
          ssn : this.ssn, 
          phone : this.phone, 
          city : this.city, 
          address : this.address, 
          postalcode : this.postalcode, 
          photo : this.photo
        }
        let headers = {
          'Content-Type': 'application/json',
          'Authorization' : 'JWT fefege..'
        }
         axios.post(`${this.context}`, JSON.stringify(data),
                    {headers : headers})
         .then(res=>{
             alert(`SUCESS2:${res.data}`)
         })
         .catch(res=>{
             alert('ERROR')
         })
    },
    login(){
      let data = {
          customerId : this.customerId,
          password : this.password
        }
        let headers = {
          'Content-Type': 'application/json',
          'Authorization' : 'JWT fefege..'
        }//JWT는 시큐리티 줄때 토큰임 저장소 막 이런거인데 지금은 안하고 나중에 함
        // alert(data.customerId);
        // alert(document.getElementById("email").value);
    axios.post(`${this.context}/login`,JSON.stringify(data),{headers : headers}) //제이슨이니까 리퀘스트바디 리퀘스트 바디는 post매핑 get매핑은 패스베러블임
         .then(res=>{
           //시큐리티 관련
             alert(`login() SUCESS : ${res.data.customerName} 님 환영합니다.`)
            // alert('성공');
         })
         .catch(res=>{
             alert('ERROR')
         })
    }
  //   ,
  //   login(){
  //     let data = {
  //         customerId : document.getElementById("email").value,
  //         password : document.getElementById("pwd").value
  //       }
  //       // alert(data.customerId);
  //       // alert(document.getElementById("email").value);
  //   axios.post(`${this.context}/login`,JSON.stringify(data))
  //        .then(res=>{
  //            alert(`login() SUCESS : ${res.data}`)
  //        })
  //        .catch(res=>{
  //            alert('ERROR')
  //        })
    
  // }
      // get(){
      //    axios.get(`${this.context}/customers/count`)
      //    .then(res=>{
      //        alert(`SUCESS2:${res.data}`)
      //    })
      //    .catch(res=>{
      //        alert('ERROR')
      //    })
        
      // },
      // post(){
      //   var data = {
      //     id   : document.getElementById("email").value,
      //     pass : document.getElementById("pwd").value
      //   }
      //   axios.post(`${this.context}/customers/join`, data)
      //   .then(res=>{
      //     alert(`POST 연동성공: ${res.data.result}`)
      //   })
      //   .catch(res=>{
      //        alert('ERROR')
      //    })
      //   // alert(document.getElementById("email").value);
      //   // alert(`${this.id}`);
      // },
      // put(){
      //   axios.put('/customers/id')
      //   .then(d=>{
      //     alert(`PUT 연동성공: ${d.data.result}`)
      //   })
      // },
      // del(){
      //   axios.delete('/customers/id')
      //   .then(d=>{
      //     alert(`DEL 연동성공: ${d.data.result}`)
      //   })
      // }


  }
}
</script>

<style scoped>
</style>