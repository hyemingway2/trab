<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img src="./assets/logo.png" alt="TraB"></router-link>
      <div id="nav">
        <router-link to="/signin">로그인/회원가입</router-link> |
        <router-link to="/travel">국내/해외여행</router-link> |
        <router-link to="/designer">설계자 명단</router-link> |
        <router-link to="/sell">여행계획 판매하기</router-link>
      </div>
    </div>
    <div id="container">
      <router-view/>
    </div>
    <div id="footer">
      <p>사업자 등록 번호 : 12345-67890</p>
      <p>사업자 대표 : 송기훈</p>
      <p>주소 : 한남대학교 뭐시기뭐시기</p>
      <p>책임없음</p>
      <p>개인정보 뭐시기</p>
      <img src="./assets/logo.png" alt="에스크로" style="height: 64px; weight: 64px">
      <p>About us</p>
      <p>Contact us</p>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container {
  padding-right: 5%;
  padding-left: 5%;
  margin: 0 auto;
}
#header {
  padding: 20px;
  display: block;
  img {
    display: inline-block;
    height: 80px;
    width: 80px;
  }
  #nav {
    display: inline-block;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
#footer {
  bottom: 0;
}
</style>
