<template>
  <div id="app">

      <!-- <router-link :to="{ path: '/'}">Home</router-link>
      <router-link :to="{ path: '/test/1'}">Test 1</router-link>
      <router-link :to="{ path: '/test/2'}">Test 2</router-link>
      <router-link :to="{ path: '/test/3'}">Test 3</router-link> -->

     

    <navbar @searchItem="search" ></navbar>   

    <br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
           <router-view></router-view>
            <!-- <inventory @newItemAdded="addCartItem" :items="items"></inventory> -->
        </div>
        <div class="col-md-3">
          <cart @removeCartItem="removeItemFromCart" :items="cart"></cart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from './components/Inventory.vue'
import data from './data.js'

export default {
  components : {
    Navbar,
    Cart,
    Inventory
  },
 data(){
   return {
     items : [],
     cart : [],
   }
 },
 mounted(){
   this.items = data
 },
 methods:{
   addCartItem(item){
     this.cart.push(item);
   },
   removeItemFromCart(index){
     this.cart.splice(index,1);
   },
   search(keyword){
     this.items = data.filter(item=>{
       return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
     })
   }
 }
}
</script>

