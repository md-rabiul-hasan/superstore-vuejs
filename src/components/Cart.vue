<template>
      <div class="cart-list">
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">Cart</li>
            </ul>
            <br>
            <ul class="list-group">
              <li class="list-group-item" v-for="(item, index) in items" :key="index"  aria-current="true">
                  {{ item.title }} - $ {{ item.price }} <span @click="removeItem(index)" >remove</span>
              </li>
            </ul>
            <br>
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">Total - {{ total }}</li>
            </ul>
            <br>
            <ul v-if="items.length > 0" class="list-group">
              <li @click="checkout()" class="list-group-item active" aria-current="true">Checkout</li>
            </ul>
          </div>
</template>

<script>
export default {
    computed:{
        items(){
          return this.$store.getters.getCart
        },
        total(){
            var total = 0;
            this.items.forEach(item => {
                total +=  parseFloat(item.price)
            })
            return total.toFixed(2);
        }
    },
    methods:{
        removeItem(index){
            // this.$emit('removeCartItem', index);
            this.$store.commit('removeItem', index)
        },
        checkout(){
          if(confirm("Are you sure? you want payment this")){
            this.$store.commit('setCheckout')
          }
        }
    }
}
</script>

<style>
    
</style>