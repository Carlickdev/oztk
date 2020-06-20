<template>
<div class="d-flex flex-column sticky-footer-wrapper">
    <main class="flex-fill">
             <!-- Header -->
      <app-header></app-header>
          <!-- Центральная часть -->
      <message-component></message-component>
      <div class="container mt-3">
          <div class="row">
             <div class="col-md-12"> 
              <router-view></router-view>
           </div>
          </div>
      </div>
    </main>
<!-- Footer -->
    <footer class="navbar-default navbar-bottom navbar-dark bg-dark">

      <div class="container-fluid">

            <p class="text-center nav-bar mb-0">Product by <a href="#" target="_blank">

              A.D.Hodov
            </a></p>
      </div>

      <div class="socnet">
        <div class="sicon">
         <a href="http://vk.com/"> <img id="vk" src="https://avatanplus.com/files/resources/original/5c4d6a835123b1688e681104.png"></a>
          <a href="http://facebook.com"><img id="vk" src="http://cdn.onlinewebfonts.com/svg/img_81386.png"></a>
          <a href="http://instagram.com"><img id="vk" src="https://i.pinimg.com/originals/ed/28/a4/ed28a4b02f68700225afb1e594eb497f.png"></a>
        </div>
        <div class="contact">
        <div class="line">+7(999)587-91-17</div>
        <div class="line">г.Озерск</div>
        <div class="line">ул.Ленина д.57</div>
        
        </div>
      </div>
    </footer>
</div>

</template>

<script>
  import { mapActions } from 'vuex';
  import Header from './components/Header.vue';
  import MessageComponent from './components/common/MessageComponent.vue';
  export default {
    components: {
      appHeader: Header,
      MessageComponent
    },
    methods: {
      ...mapActions(['getShoppingCart', 'listenToProductList'])
    },
    created() {
      let uid = this.$store.getters.currentUser.uid;
      this.listenToProductList();
      this.getShoppingCart({uid, currentCart: this.$store.getters.cartItemList});
    }
  }
</script>

<style>
  #reset-store-panel {
    position: fixed; bottom: 0px; right: 0px;
  }

  .contact{
  margin-top:-50px;
  padding-right:20px;
  color:#218838;
  text-align:right;
  }
  #vk{
  widht:30px;
  height:30px;
  padding-right:10px;
  }
  body, .sticky-footer-wrapper {
     min-height:100vh;
  }

  .flex-fill {
     flex:1 1 auto;
  }
  footer {
    height: 80px;
    color: #666;
    padding: 10px 0 10px 0;
    font-size: 85%;
  }
  footer a {

    color: #999;
  }
  footer a:hover {
    color: #efefef;
  }
  .sicon{
    margin-left:10px;
    width:300px;
    height:30px;
  }
  @media (max-width: 576px) {
    footer {
      height: 50px;
    }
    #vk{
    display:none;
    }
    .contact{
    display:none;
    }
  }
</style>
