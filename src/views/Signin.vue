<template>
  <div class="login">
    <h3>Login</h3>
    <input type="text" placeholder="id"><br>
    <input type="password" placeholder="password"><br>
    <button>로그인</button>
  </div>
</template>


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
  
  background-color: #4f98f8


;
  background-repeat: no-repeat;
  
  &:hover,
  &:focus {
    animation: bubbles 1s forwards ease-out;
    background: $bubbles;
    background-color: #5f91fc71
;
    background-repeat: no-repeat;
  }
}

@keyframes bubbles {
  100% {
    background-position: $move;
    box-shadow: inset 0 -6.5em 0 #4e85e4;
  }
}
.login{
  margin-top: 40px;
}
input{
  margin: 10px 0;
  width:30%;
  padding:15px;

}

button{
  margin-top:20px;
  width:10%;
  cursor:pointer;
}
p{
  margin-top: 20px;
  width:10%;
  cursor:pointer;
}
p{
  margin-top:40px;
  font-size:15;
}
p a{
  text-decoration: underlin;
  cursor:pointer;
}
</style>

