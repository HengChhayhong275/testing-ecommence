<template>
  <div id="app">
    <Index :class="{'open' : showNav}"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <section class="header-promotion">
      <div class="first dev"><div class="dev">WELCOME TO 168 CLOTHES STORE</div></div>
      <div class="second dev"><div class="dev">NEW PROMOTION IS COMING SOON</div></div>
    </section>
    <secion class="nav-bar">
      <div class="toggle_btn" v-if="mobileView" @click="showNav = !showNav">
        <i class="fa-solid fa-bars"></i>
      </div>
        <h1>168 CLOTHES STORE</h1>
        <li style="position: absolute; right: 4rem;"><i style="position: absolute; right: 7.5rem;"  class="fa-solid fa-location-dot"></i><a style="text-decoration: none; color: black; font-size: 1rem; margin: 0 3rem;" href="">Find Store</a></li>
        <button class="signIn">Sign in</button>
    </secion>
    <HomeView v-if="!mobileView"/>
  </div>

  
</template>

<script>
import HomeView from './views/HomeView.vue'
import Index from './views/Index.vue'

export default {
  name: "App",
    components: {
      HomeView,
      Index
    }, 
    data: () =>{
      return{
        mobileView: true,
        showNav: false
      }
    },
    methods: {
      hadleView(){
        this.mobileView = window.innerWidth < 1000;
      }
    },
    created(){
      this.hadleView();
    }
}
</script>

<style >
  *{
  margin: 0;
  padding: 0;
  outline: 0;
  border: 0;
  box-sizing: border-box;
}

/* Promotion header */

.header-promotion {
  width: 100%;
  height: 30px;
  background-color: black;
  color: white;
  overflow:hidden;
  text-align: center;
}
.header-promotion > .dev > .dev {
  padding: 5px 5px;
  height:2.81rem;
  margin-bottom: 2.81rem;
  display:inline-block;
}
.header-promotion .dev:first-child {
  animation: text-animation 10s infinite;
}
@keyframes text-animation {
  0% {margin-top: 0;}
  10% {margin-top: 0;}
  20% {margin-top: -5rem;}
  30% {margin-top: -5rem;}
  40% {margin-top: 0rem;}
  60% {margin-top: 0rem;}
  70% {margin-top: -5rem;}
  80% {margin-top: -5rem;}
  90% {margin-top: 0;}
  100% {margin-top: 0;}
}
.nav-bar, ul{
  display: flex;
  list-style-type: none;
}
.nav-bar{
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 1rem;
  background-color: #d9d9d9;
}
.signIn{
  max-height: 40px;
  width: 80px;
  font-size: 1rem;
  background: #468B97;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.5rem;
  position: absolute;
  right: 1rem;
  border-radius: 10px;
}
.signIn:hover{
  scale: 1.05;
  color: #8CC0DE;
}
.toggle_btn{
  margin-right: 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
}


@media screen and (max-width:900px){
  .nav-bar, ul{
  display: flex;
  list-style-type: none;
}
.nav-bar{
  width: 100%;
  height: 3rem;
  align-items: center;
  padding: 1rem;
  background-color: #d9d9d9;
}
.signIn{
  max-height: 30px;
  width: 80px;
  font-size: 0.5rem;
  background: #468B97;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  padding: 0.2rem;
  position: absolute;
  right: 0.5rem;
  border-radius: 10px;
}
.signIn:hover{
  scale: 1.05;
  color: #8CC0DE;
}
.toggle_btn{
  cursor: pointer;
  font-size: 1rem;
  color: black;
}
.nav-bar h1{
  font-size: small;
}


}

</style>
