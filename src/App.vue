<template>
  <div id="app">

    <navbar></navbar>
    

    <br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
            <inventory></inventory>
        </div>
        <div class="col-md-3">
          <cart></cart>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Cart from './components/Cart.vue'
import Inventory from './components/Inventory.vue'
export default {
  components : {
    Navbar,
    Cart,
    Inventory
  }
}
</script>

