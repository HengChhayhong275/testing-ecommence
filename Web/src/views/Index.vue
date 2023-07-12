
<template>
  <div>
    <div class="nav">
        <ul>
          <li><a href="">HOME</a></li>
          <li><a href="">PRODUCTS</a></li>
          <li><a href="">MEN</a></li>
          <li><a href="">WOMEN</a></li>
          <li><a href="">KID</a></li>
          <li><a href="">ACCESSORIES</a></li>
          <li><a href="">ABOUTUS</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
  export default {
     
  }
</script>

<style scoped>

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
  background-color: beige;
}
.nav li{
  margin: 0.5rem;
  padding: 0.5rem;
}
.nav li:hover{
  background-color: #918c8c;
}
.open{
  transform: translateX(240px);
}


</style>