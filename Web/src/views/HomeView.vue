<template>
  <div id="home">
    <div class="navigation">
        <ul>
          <li><a  href="">HOME</a></li>
          <li><a  href="">PRODUCTS</a></li>
          <li><a  href="">MEN</a></li>
          <li><a  href="">WOMEN</a></li>
          <li><a  href="">KID</a></li>
          <li><a  href="">ACCESSORIES</a></li>
          <li><a  href="">ABOUTUS</a></li>
        </ul>
    </div>
    <br>
    <div class="search">
      
    </div>
  </div>
</template>
<script>
  export default {
     
  }
</script>

<style scoped>

.navigation li  a{
  text-decoration: none;
  color: black;
  font-size: 1rem;
  padding: 0.4rem 4.46em;
  display: inline-block;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: inset 0 0 0 0 #918c8c;
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

}
.navigation li a:hover{
  box-shadow: inset 400px 0 0 0 #918c8c;
  color: orange;
}
.navigation{
  display: flex;
  height: 2rem;
  position: absolute;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  border: 1px solid #d9d9d9;
  background-color: #cdccc3;
}

</style>