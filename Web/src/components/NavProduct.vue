
<template>
    <div>
      <div class="nav">
          <ul>
            <li><a href="">HOME</a></li>
            <li><a href="">MEN</a></li>
            <li><a href="">WOMEN</a></li>
            <li><a href="">KID</a></li>
            <li><a href="">ACCESSORIES</a></li>
          </ul>
      </div>
    </div>
  </template>
  <script>
    export default {
       
    }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
  .nav{
    font-family: 'Playfair Display', serif;
  }
  .nav li  a{
    text-decoration: none;
    color: black;
    font-size: 0.5rem;
    padding: 0.4rem 1em;
    font-size: large ;
    display: inline-block;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #918c8c;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
  
  }
  .nav li a:hover{
    box-shadow: inset 400px 0 0 0 #918c8c;
    color: orange;
    
  }
  .nav{
    position: absolute;
    top: 5rem;
    left: -15rem;
  }
  ul{
    display: grid;
    background-color: #d9d9d9;
    padding-left: 0;
  }
  .nav li{
    padding: 0.8rem;
    border: 1px solid white;

  }
  .nav li:hover{
    background-color: #918c8c;
  }

  
  </style>
  