<template>
    <div class="men">
      <HeaderProduct/> 
      <div class="d-flex justify-content-between">
        <h3 class="ms-3 mt-2">Men</h3>
        <Search/>
      </div>
      
    </div>
  </template>
  <script>
  import HeaderProduct from '../components/HeaderProduct.vue'
  import Search from '../components/Search.vue';
    export default{
      name: "men",
      components: {
        HeaderProduct,
        Search
      }
    }
  </script>
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
  div{
    font-family: 'Playfair Display', serif;
  }
  </style>
  