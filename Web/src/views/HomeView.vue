<template>
  
  <div id="home">
    <Header class="heads"/>
    <div class="home">

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!--Search Part-->
    <section class="search-part">
      <h2 class="first-h2" style="font-weight: 900;">MAKE YOUR LIFE HAPPY WITH US</h2>
      <p class="first-p" style="padding-top: 15px;">Shopping is always a good idea. let's grab something you like.</p>
        <div class="input-icons">
          <i class="fa fa-search icon"></i>
          <input class="search-icon" type="text" placeholder="Search" name="search">
        </div>
    </section>
    <br>

    <!--Advertise-->

    <section class="commercial">
      <div class="box1">
        <img class="women" src="../assets/images/women.jpg" alt="women">
      </div>
      <div class="box2">
        <h3 class="promo">Promotion Of The Month</h3>
        <p class="bestsell">Best Sell In Shop</p>
        <button class="shoping-button"><router-link to="/product" class="text-dark text-decoration-none">Shop Now</router-link></button>
      </div>
      <div class="box3">
        <img class="men" src="../assets/images/Men-cloth.jpeg" alt="men">
      </div>
    </section>
    <br><br>

    <!--Benefit-->

    <section class="benefit">

      <div class="delivery">
        <img class="img-deli" src="../assets/images/delivery-icon.png" alt="delivery-icon" style="margin-top: 10px;">
        <p class="deli-text" style="font-family: 'Oswald', sans-serif;">Free Delivery</p>
        <p class="deli-text1" style="font-size: 12px;">buy up to 50$</p>
      </div>

      <div class="coupon">
        <img class="img-dis" src="../assets/images/dis.png" alt="discount" style="margin-top: 15px;">
        <p class="deli-text2" style="font-family: 'Oswald', sans-serif;">Discount Coupon</p>
        <p class="deli-text-2" style="font-size: 12px;">up to 70%</p>
      </div>

      <div class="membership">
        <img class="img-member" src="../assets/images/member.png" alt="membership" style="margin-top: 14px;">
        <p class="deli-text3" style="font-family: 'Oswald', sans-serif;">Membership</p>
        <p class="deli-text-3" style="font-size: 12px;">always get 10% off</p>
      </div>

    </section>
    <br><br>

    <!--men collection-->
    <div id="men"></div>
    <div class="collection" style="border: 1px solid #d9d9d9;">

      <div class="title-text" style="text-align: center; justify-content: center;">
        <p style="font-size: 25px; margin-top: 65px; font-weight: 800;">NEW ARRIVAL</p>
        <p style="font-size: 20px; margin-top: 30px;">MEN COLLECTION</p>
        <p style="font-size: 15px; margin-top: 15px;">Check out our men clothes</p>
        <button class="shoping-button" style="margin-top: 25px; padding: 10px 30px 10px 30px; border-radius: 10px; ">SHOP NOW</button>
      </div>

      <div class="new-arrive1" style="text-align: center; justify-content: center;">
        <img class="arrival-image" src="../assets/images/men-cloth1.jpeg" alt="men shirt" style="width: 230px; height: 230px; margin: 10px 10px 0 29px; border-radius: 10px;">
        <p style="margin: 0.3rem 0;">SHIRT</p>
        <p style="margin: 0.3rem 0;">10,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive2" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/Hoodie.webp" alt="men hoodie" style="width: 230px; height: 230px; margin: 10px 10px 0 29px; border-radius: 10px;">
        <p style="margin: 0.3rem 0;">HOODIE</p>
        <p style="margin: 0.3rem 0;">20,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive3" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/Short.jpeg" alt="men short" style="width: 230px; height: 230px; margin: 10px 10px 0 29px; border-radius: 10px;">
        <p style="margin: 0.3rem 0;">SHORT</p>
        <p style="margin: 0.3rem 0;">5,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive4" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/men-jeans.webp" alt="men jeans" style="width: 230px; height: 230px; margin: 10px 10px 0 29px; border-radius: 10px;">
        <p style="margin: 0.3rem 0;">JEANS</p>
        <p style="margin: 0.3rem 0;">15,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
    </div>
    <br><br>

    <!--men thing you may like-->

    <section class="thingYouMayLike">
      <h2 style="text-align: center;">THING YOU MAY LIKE</h2>
      <br>
      <div class="category1" style="text-align: center; justify-content: center;">
        <div class="thing1">
          <img class="thing-img" src="../assets/images/addidas-shoes.webp" alt="Shoes" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem 0;">MEN SHOES</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="thing2" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/wallet.jpeg" alt="Wallet" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem 0;">WALLET</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="thing3" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/watch.jpg" alt="Watch" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem 0;">WATCH</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
      </div>
    </section>
    <br><br>

    <!--men trending-->
    
    <div class="trending">
      <h2 style="text-align: center;">TRENDING</h2>
      <br>
    </div>
    <div class="treding-cate" style="text-align: center;">
      <div class="treding1">
        <img src="../assets/images/men-treding1.png" alt="men shirt" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending2" style="text-align: center; justify-content: center;">
        <img src="../assets/images/men-treding2.jpeg" alt="men hoodie" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending3" style="text-align: center; justify-content: center;">
        <img src="../assets/images/men-treding3.jpeg" alt="men jeans" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending4" style="text-align: center; justify-content: center;">
        <img src="../assets/images/men-trending4.png" alt="men trouser" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
    </div>

    <br><br><br>

    <!--women collection-->
    <div id="women"></div>
    <div class="collection" style="border: 1px solid #d9d9d9;">
      <div class="title-text" style="text-align: center; justify-content: center;">
        <p style="font-size: 25px; margin-top: 65px; font-weight: 800;">NEW ARRIVAL</p>
        <p style="font-size: 20px; margin-top: 30px;">WOMEN COLLECTION</p>
        <p style="font-size: 15px; margin-top: 15px;">Check out our men clothes</p>
        <button class="shoping-button" style="margin-top: 25px; padding: 10px 30px 10px 30px; border-radius: 10px; ">SHOP NOW</button>
      </div>
      <div class="new-arrive1" style="text-align: center; justify-content: center;">
        <img class="arrival-image" src="../assets/images/women-shirt.jpeg" alt="women shirt" style="width: 230px; height: 230px; margin: 10px 0; border-radius: 10px;">
        <p style="margin: 0.3rem;">SHIRT</p>
        <p style="margin: 0.3rem;">10,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive2" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/women-trouser.webp" alt="women trouser" style="width: 230px; height: 230px; margin: 10px 0; border-radius: 10px;">
        <p style="margin: 0.3rem;">TROUSER</p>
        <p style="margin: 0.3rem;">15,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive3" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/women-jacket.webp" alt="women jacket" style="width: 230px; height: 230px; margin: 10px 0; border-radius: 10px;">
        <p style="margin: 0.3rem;">JACKET</p>
        <p style="margin: 0.3rem;">25,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive4" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/women-dress.jpeg" alt="dress" style="width: 230px; height: 230px; margin: 10px 0; border-radius: 10px;">
        <p style="margin: 0.3rem;">DRESS</p>
        <p style="margin: 0.3rem;">20,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
    </div>
    <br><br>
    <!--women thing you may like-->
    <div class="thingYouMayLike">
      <h2 style="text-align: center;">THING YOU MAY LIKE</h2>
      <br>
      <div class="category1">
        <div class="thing1" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/women-shoes.avif" alt="women shoes" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">WOMEN SHOES</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="thing2" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/women-purse.jpeg" alt="purse" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">PURSE</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="thing3" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/women-watch.jpeg" alt="women watch" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">WATCH</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
      </div>
    </div>
    <br><br>
    <!--women trending-->
    <div class="trending">
      <h2 style="text-align: center;">TRENDING</h2>
      <br>
    </div>
    <div class="treding-cate">
      <div class="treding1" style="text-align: center; justify-content: center;">
      <img src="../assets/images/women-treding1.jpeg" alt="women jacket" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
      <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending2" style="text-align: center; justify-content: center;">
        <img src="../assets/images/women-trending2.jpeg" alt="women hoodie" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending3" style="text-align: center; justify-content: center;">
        <img src="../assets/images/women-trending3.jpeg" alt="women dress" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending4" style="text-align: center; justify-content: center;">
        <img src="../assets/images/women-trending4.webp" alt="women jacket" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
    </div>

    <br><br>

    <!--KID COLLECTION-->
    <div id="kid"></div>
    <div class="collection" style="border: 1px solid #d9d9d9;">
      <div class="title-text" style="text-align: center; justify-content: center;">
        <p style="font-size: 25px; margin-top: 65px; font-weight: 800;">NEW ARRIVAL</p>
        <p style="font-size: 20px; margin-top: 30px;">KID COLLECTION</p>
        <p style="font-size: 15px; margin-top: 15px;">Check out our men clothes</p>
        <button class="shoping-button" style="margin-top: 25px; padding: 10px 30px 10px 30px; border-radius: 10px; ">SHOP NOW</button>
      </div>
      <div class="new-arrive1" style="text-align: center; justify-content: center;">
        <img class="arrival-image" src="../assets/images/kid-shirt.webp" alt="kid shirt" style="width: 230px; height: 230px; margin: 10px; border-radius: 10px;">
        <p style="margin: 0.3rem;">SHIRT</p>
        <p style="margin: 0.3rem;">10,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive2" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/kid-hoodie.jpeg" alt="kid hoodie" style="width: 230px; height: 230px; margin: 10px; border-radius: 10px;">
        <p style="margin: 0.3rem;">HOODIE</p>
        <p style="margin: 0.3rem;">15,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive3" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/kid-sport.webp" alt="kid sport shirt" style="width: 230px; height: 230px; margin: 10px; border-radius: 10px;">
        <p style="margin: 0.3rem;">SPORT</p>
        <p style="margin: 0.3rem;">15,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="new-arrive4" style="text-align: center; justify-content: center;">
        <img class="arrival-image"  src="../assets/images/kid-jacket.webp" alt="kid jacket" style="width: 230px; height: 230px; margin: 10px; border-radius: 10px;">
        <p style="margin: 0.3rem;">JACKET</p>
        <p style="margin: 0.3rem;">20,00$</p>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
    </div>
    <br><br>
    <!--kid thing you may like-->
    <div class="thingYouMayLike">
      <h2 style="text-align: center;">THING YOU MAY LIKE</h2>
      <br>
      <div class="category1">
        <div class="thing1" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/kid-glasses.jpeg" alt="kid-glasses" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">GLASSES</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="thing2" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/kid-hat.jpeg" alt="kid-hat" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">HAT</p>
          <a href="#" style="font-size: small;;">VIEW MORE</a>
        </div>
        <div class="thing3" style="text-align: center; justify-content: center;">
          <img class="thing-img" src="../assets/images/kid-watch.jpeg" alt="Wakid-watch" style="width: 260px; height: 260px; margin: 10px 0; border-radius: 10px;">
          <p style="margin: 0.3rem;">WATCH</p>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
      </div>
    </div>
    <br><br>
    <!--kid trending-->
    <div class="trending">
      <h2 style="text-align: center;">TRENDING</h2>
      <br>
    </div>
      <div class="treding-cate">
        <div class="treding1" style="text-align: center; justify-content: center;">
          <img src="../assets/images/kid-trending1.jpeg" alt="kid shirt" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="trending2" style="text-align: center; justify-content: center;">
          <img src="../assets/images/kid-trending2.webp" alt="kid hoodie" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="trending3" style="text-align: center; justify-content: center;">
          <img src="../assets/images/kid-trending3.jpeg" alt="kid jacket" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
        <div class="trending4" style="text-align: center; justify-content: center;">
          <img src="../assets/images/kid-trending4.jpeg" alt="kid dress" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
          <a href="#" style="font-size: small;">VIEW MORE</a>
        </div>
      </div>

    <br><br><br><br>

    <!--Accessories-->
    <div id="accessories"></div>
    <div class="trending">
        <h2 style="text-align: center;">ACCESSORIES</h2>
        <br>
      </div>
      <div class="treding-cate" >
      <div class="treding1" style="text-align: center; justify-content: center;">
        <img src="../assets/images/bag.jpeg" alt="bag" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending2" style="text-align: center; justify-content: center;">
        <img src="../assets/images/hat.jpeg" alt="hat" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending3" style="text-align: center; justify-content: center;">
        <img src="../assets/images/small-bag.jpeg" alt="small bag" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>
      <div class="trending4" style="text-align: center; justify-content: center;">
        <img src="../assets/images/sunglasses.jpeg" alt="sunglasses" style="width: 250px; height: 250px; margin: 30px 10px 0 25px; border-radius: 10px;"><br><br>
        <a href="#" style="font-size: small;">VIEW MORE</a>
      </div>     
    </div>
    <br><br><br>
    <!--About Us-->
    <section id="AboutUs">
      <div class="about-container">
        <div class="about-box" style="text-align: center; justify-content: center;">
          <h3 class="upper-text">follow us on</h3>
          <a href="#"><i class="fa fa-facebook"></i> FACEBOOK</a>
          <a href="#"><i class="fa fa-instagram"></i> INSTAGRAM</a>
        </div>
        <div class="abouts-box">
          <h3 class="upper-text">BANK WE ACCEPTED</h3>
          <img class="leading-img" src="../assets/images/aba.png" alt="ABA BANK">
          <img src="../assets//images/canadian.jpeg" alt="CANADIAN BANK">
          <img src="../assets/images/wing.png" alt="WING BANK">
          <img src="../assets/images/aceleda.png" alt="ACELEDA BANK">
          <img src="../assets/images/ftb.png" alt="FTB BANK">
          <h3 class="upper-text">PAYMENT METHOD WE</h3>
          <img class="leading-images" src="../assets/images/visa.png" alt="VISA">
          <img src="../assets/images/mastercard.png" alt="MASTERCARD">
          <img src="../assets/images/paypal.png" alt="PAYPAL">
        </div>
      </div>
    </section>



    </div>

  </div>

</template>


<script>
import Header from '../components/Header.vue';
  export default {
     components:{
      Header
     }
  }
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
/* Search  */
.home{
  font-family: 'Playfair Display', serif;
}
.heads{
  position: sticky;
  top: 0;
}
.search-part{
        padding-top: 10px;
        width: 100%;
        height: 180px;
        margin-top: 50px;
        display: block;
        justify-content: center;
        text-align: center;
        background-color: #f2f2f2;
    }
  .input-icons i {
      position: absolute;
  }
    
  .input-icons {
      width: 100%;
      margin-bottom: 10px;
  }
    
  .icon {
      padding: 16px 0 15px 10px;
      min-width: 40px;
      
  }
  .search-icon {
      text-align: center;
      width: 40%;
      height: 50px;
      font-family: 'Inria Sans', sans-serif;
      font-size: 20px;
      font-weight: 900;
      border-radius: 10px;
      background-color: #dad8d8;
      border: 1px solid black;
  } 
  /* advertise */
  .commercial{
    width: 100%;
      height: 317px;
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: linear-gradient(
          to right,
          #82A8B4 0%,
          #82A8B4 50%,
          #d9d9d9 50%,
          #d9d9d9 100%
      );
  }
  .bestsell{
    text-align: center;
    margin-top: 20px;
    font-weight: 900;
    font-size: larger;
  }
  .box2 button{
    margin: 20px auto;
    border: 0;
    width: 100px;
    background-color: #c1bdbd;
    justify-content: center;
    text-align: center;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    font-weight: 900;
  }
  .promo{
    padding-top: 100px;
    text-align: center;
    font-weight: 900;
    font-size: larger;
  }
  .men, .women{
    display: block;
    height: 317px;
    width: 217px;
    
  }
  .box1, .box2, .box3 {
    width: 217px;
    height: 317px;
  }
  .box1{
    margin-left: 50px;
  }
  .box3{
    margin-right: 50px;
  }
  button:hover{
    background-color: #757474;
    scale: 1.05;
  }
  /*benefit*/
  .benefit{
    margin-top: 50px;
    width: 100%;
    display: flex;
    height: 150px;
    background-color: #f2f2f2;
  
  }
  .delivery, .coupon ,.membership{
    width: 33.33%;
    height:150px;
  }
  .img-deli{
    display: block;
    margin: auto;
  }
  .img-dis{
    display: block;
    margin: auto;
  }
  .img-member{
    display: block;
    margin: auto;
    width: 64px;
    height: 64px;
  }
  .deli-text{
    margin-left: 41%;
    margin-top: 5px;
  }
  .deli-text1{margin-left: 43%;}
  .deli-text2{margin-left: 38%;}
  .deli-text-2{margin-left: 45%;}
  .deli-text3{margin-left: 41%;}
  .deli-text-3{margin-left: 40%;}
    /*men colllection*/
  .collection{
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-around;
    background-color: #f6f6f6;
    margin-top: 5rem;
  }
  .title-text, .new-arrive1, .new-arrive2, .new-arrive3, .new-arrive4{width: 20%;}
  .shoping-button{background-color: #d9d9d9; border: none;}
  .shoping-button:hover{background-color: #757474;}
  .arrival-image{box-shadow: 5px 10px 18px #757474;}
  /* thing you may like*/
  .category1{
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-between;
    background-color: #d9d9d9;
  }
  .thing-img{border: 1px solid #d9d9d9;
    box-shadow: 5px 10px 18px #757474;}
  .thing1, .thing2, .thing3{
    width: 33.33%;
  }
  /* trending*/
  .treding-cate{
    width: 100%;
    height: 340px;
    display: flex;
    justify-content: space-around;
    background-color: #d9d9d9;
  }
  #men a{color: black;}
  #men a:hover{color: orange;}
  .thingYouMayLike a{color: black;}
  .thingYouMayLike a:hover{color: orange;}
  .treding-cate a{color: black;}
  .treding-cate a:hover{color: orange;}
  .new-arrive1 a{color: black;}
  .new-arrive2 a{color: black;}
  .new-arrive3 a{color: black;}
  .new-arrive4 a{color: black;}
  .new-arrive1 a:hover{color: orange;}
  .new-arrive2 a:hover{color: orange;}
  .new-arrive3 a:hover{color: orange;}
  .new-arrive4 a:hover{color: orange;}
  /*about us*/
  .about-container{
    width: 100%;
    height: 340px;
    display: flex;
    background-color: #757474;
  }
  .about-box, .abouts-box{
    width: 50%;
    height: 100%;
  }
  .about-container a,h3{
    display: block;
    text-align: center;
  }
  .about-container a{
    margin: 2em;
    text-decoration: none;
    color: black;
  }
  .about-container h3{
    margin: 2rem 4rem 2rem 4rem;
  }
  .about-container .fa:hover{
    opacity: 0.7;
  }
  .about-container .fa-facebook{
    background-color: #3b5998;
    color: white;
  }
  .about-container .fa-instagram{
    background-color: #e4405f;
    color: white;
  }
  .about-container .fa{
    padding: 5px;
    font-size: 20px;
    width: 2rem;
    border: none;
    border-radius: 10px;
    text-align: center;
    margin: 5px auto;
  }
  .about-container img{
    max-width: 10%;
    height: 10%;
    margin-right: 5%;
  }
  .about-container .leading-img{
    padding-left: 28%;
  }
  .about-container .leading-images{
    padding-left: 35%;
  }
  .about-container .abouts-box{
    border-left: 1px solid black;
    height: 340px;
    left: 50%;
  }
  
@media screen and (max-width:1000px) {
  
}
</style>