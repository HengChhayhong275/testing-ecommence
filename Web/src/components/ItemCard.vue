<template>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div v-for="item in filteredItems" :key="item.id">
          <div class="card">
            <div class="card-img-zoom mx-auto my-2">
              <img :src="item.image" class="card-img-top" alt="...">
            </div>
            <!-- <div class="card-body">
              <h5 class="card-title text-center">{{ item.title }}</h5>
              <div class="price">
                <div>Price: </div>
                <div>{{ item.price }}</div>
              </div>
              <router-link class="row justify-content-center align-items-center" v-bind:to="'/products/'+item.id" id="view-detail">
              <button>View Detail</button>
            </router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { items } from '../data';
  export default {
    name:'itemcard',
    props: {
    search: String,
  },
  computed: {
    filteredItems() {
      if (!this.search) return this.items;
      return this.items.filter(item =>
        item.title.toLowerCase().includes(this.search.toLowerCase())
      );
  },
},
    data() {
      return {
        items,
      }
    }
  }
  </script>
  
  <style scoped>

  /* #view-detail{
    text-decoration: none;
  }
  #view-detail button:hover{
    background-color: #468B97;
  }
  #view-detail button{
    text-decoration: none;
    color: white;
    background-color: gray;
    border-radius: 10px;
  } */
  .container {
    margin-top: 30px;
  }
  .card {
    height: 400px;
    border: 1px solid black;
    background-color: #f2f2f2;
  }
  .card:hover {
    cursor: pointer;
  }
  
  .card-img-top {
    height: 100%;
  }
  
  .card-img-zoom {
    overflow: hidden;
    transition: transform 0.5s ease;
    width: 90%;
  }
  
  .card-img-zoom:hover img {
    transform: scale(1.1);
  }
  /* .price{
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
  } */
  </style>