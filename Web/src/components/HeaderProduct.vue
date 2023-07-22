<template>
    <div id="header">
      <NavProduct :class="{'open' : showNav}"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <section class="header-promotion">
        <div class="first dev"><div class="dev">WELCOME TO 168 CLOTHES STORE</div></div>
        <div class="second dev"><div class="dev">NEW PROMOTION IS COMING SOON</div></div>
      </section>
      <secion class="nav-bar">
        <div class="toggle_btn"  @click="showNav = !showNav">
          <i class="fa-solid fa-bars"></i>
        </div>
          <h2>168 CLOTHES STORE</h2>
          <nav>
            <ul>
              <li><a><router-link to="/" class="a">HOME</router-link></a></li>
              <li><a><router-link to="/men" class="a">MEN</router-link></a></li>
              <li><a><router-link to="/women" class="a">WOMEN</router-link></a></li>
              <li><a><router-link to="/kid" class="a">KID</router-link></a></li>
              <li><a><router-link to="/accessories" class="a">ACCESSORIES</router-link></a></li>
            </ul>
          </nav>
          <p style="position: absolute; right: 4rem;"><i style="position: absolute; right: 7.7rem; margin-top: 0.2rem;"  class="fa-solid fa-location-dot"></i><a style="text-decoration: none; color: black; font-size: 1rem; margin: 0 3rem;" href="https://www.google.com/maps/place/%C3%86ON+Mall+Mean+Chey/@11.4849215,104.9155082,17z/data=!3m1!4b1!4m6!3m5!1s0x31095b3797530b61:0xd51a35853e6f22da!8m2!3d11.4849163!4d104.9180831!16s%2Fg%2F11t4dgl9vc?entry=ttu" target="_blank">Find Store</a></p>
          <button class="Cart"><i class="fa-solid fa-cart-shopping"></i> Cart</button>
      </secion>
    </div>
    
  </template>
  
  <script>
  import NavProduct from './NavProduct.vue'
  
  export default {
    name: "Header",
      components: {
        NavProduct
      }, 
      data: () =>{
        return{
          showNav: false
        }
      },
      
  }
  </script>
  
  <style scoped >
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
    *{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
  #header{
    font-family: 'Playfair Display', serif;
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
  .Cart{
    max-height: 40px;
    width: 80px;
    font-size: 1rem;
    background: #468B97;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
    padding: 0.3rem;
    position: absolute;
    right: 1rem;
    border-radius: 10px;
  }
  .Cart:hover{
    scale: 1.05;
    color: #8CC0DE;
  }

  /* navigation */
  nav{
    position: absolute;
    left: 33%;
  }
  li{
    position: relative;
  }
  li .a{
    color: black;
    text-decoration: none;
    margin: 0 1rem;
    font:  18px 'Open Sans', arial, sans-serif;
  }
  li .a:after {    
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #468B97;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  li .a:hover:after { 
    width: 100%; 
    left: 0; 
  }
  li .a:hover{
    color: #468B97;
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
  .nav-bar i{
    margin-right: 0.3rem;
  }
  .toggle_btn{
    margin-right: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: black;
    display: none;
  }
  .open{
    transform: translateX(0);
    width: fit-content;
  }


  @media screen and (max-width:1200px) {
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
    .nav-bar i{
    margin-right: 0.3rem;
  }
    .toggle_btn{
    margin-right: 0.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    color: black;
    display: block;
    }
    nav{
      display: none;
    }
    .open{
      transform: translateX(240px);
      width: fit-content;
    }
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
  .Cart{
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
  .Cart:hover{
    scale: 1.05;
    color: #8CC0DE;
  }
  .toggle_btn{
    cursor: pointer;
    font-size: 1rem;
    color: black;
  }
  .nav-bar h2{
    font-size: small;
  }
  }
  
  
  </style>
  