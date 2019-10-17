<template>
  <div class="signup">
    <p>회원가입</p>
     <input type="text" placeholder="id"><br>
     <input type="password" placeholder="password"><br>
     <input type="password" placeholder="password"><br>
     <input type="text" placeholder="name"><br>
     <input type="text" placeholder="email"><br>
    
     <button class="btn btn-bubble">가입하기</button>
     <span>또는 로그인으로 돌아가기</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Signup extends Vue {}
</script>

<style scoped lang="scss">
  $bubbles: ();
  $move: ();
  @for $i from 0 through 10 {
    $size: (random(70) + 50) / 100 * 1em;
    
    $start-x: (random(120) - 10) * 1%;
    $start-y: (random(70) + 80) * 1%;
    
    $end-x: $start-x + (random(20) - 10);
    $end-y: (random(460) - 400) * 1%;

    $bubbles: append($bubbles, 
      radial-gradient(circle at center, transparent 30%, #eef 60%, #eef 65%, transparent 70%) ($start-x $start-y) / ($size $size), comma);
    
    $move: append($move, $end-x $end-y, comma);
  }

 .btn-bubble {
  color: white;
  
  background-color: #77b11c;
  background-repeat: no-repeat;
  
  &:hover,
  &:focus {
    animation: bubbles 1s forwards ease-out;
    background: $bubbles;
    background-color: #77b11c;
    background-repeat: no-repeat;
  }
}

@keyframes bubbles {
  100% {
    background-position: $move;
    box-shadow: inset 0 -6.5em 0 #0072c4;
  }
}
  
  .signUp{
    margin-top:40px;
  }
  input{
    margin: 10px 0;
    width:30%;
    padding: 15px;
  }
.btn {
  display: inline-block;
  text-decoration: none;
  padding: 1em 2em;
}
  p{
   margin-top:40px;
   font-size:20px;
  }
  span{
    display: block;
    margin-top: 20px;
    font-size: 15px;
  }
  </style>