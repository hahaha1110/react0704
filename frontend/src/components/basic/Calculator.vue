<template>
<div id="wrapper">
  <Nav></Nav>
    <h2>계산기</h2>
    <router-link to='/'>홈버튼</router-link>
  <div class="calculator">
    <div class="display">{{current || '0'}}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn operator">÷</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="times" class="btn operator">x</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="minus" class="btn operator">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn operator">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Footer from'@/components/common/Footer.vue'
export default {
  data() {
    return {
        previous : null,
        current : '',
        operator : null,
        operatopClicked : false
    }
  },
  methods: {
      dot(){

      },
      percent(){
        
      },
      sign(){

      },
      append(number){
          if(this.operatopClicked){//누른게 숫자인지 아닌지 체크
              this.current = ''; 
              this.operatopClicked = false;
          }
          this.current = `${this.current}${number}`;
      },

      clear(){
          this.current = '';
      },

      add(){
        this.operator = (a,b) => a + b;
        this.setPrevious();
      },

      minus(){
        this.operator = (a,b) => a - b;
        this.setPrevious();
      },

      times(){
        this.operator = (a,b) => a * b;
        this.setPrevious();
      },

      divide(){
        this.operator = (a,b) => a / b;
        this.setPrevious();
      },
      setPrevious(){
        this.previous = this.current;
        this.operatopClicked = true;
      },
      
      equal(){
          this.current = `${this.operator(
              parseFloat(this.previous),
              parseFloat(this.current)
          )}`;
          this.previous = null;
      }

  },components: {
    Nav,
    Footer
  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  width: 400px;
  font-size: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: white;
}
.zero {
  grid-column: 1 / 3;
}
.btn {
  background-color: #F2F2F2;
  border: 1px solid #999;
}
.operator {
  background-color: orange;
  color: white;
}
</style>