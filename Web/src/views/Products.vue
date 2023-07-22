<template>
  <div class="product">
    <HeaderProduct/> 
    <div class="d-flex justify-content-between">
      <h1 class="ms-3 mt-2">Products</h1>
      <Search @search="search = $event"/>
    </div>
    <ItemCard :search="search"/>
  </div>
</template>
<script>
import HeaderProduct from '../components/HeaderProduct.vue'
import Search from '../components/Search.vue';
import ItemCard from '../components/ItemCard.vue';
  export default{
    name: "product",
    components: {
      HeaderProduct,
      Search,
      ItemCard
    },
    data(){
      return{
        search:'',
      };
    },
  };
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
div{
  font-family: 'Playfair Display', serif;
}
</style>
