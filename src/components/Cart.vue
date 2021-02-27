<template>
      <div class="cart-list">
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">Cart</li>
            </ul>
            <br>
            <ul class="list-group">
              <li class="list-group-item" v-for="(item, index) in items" :key="index"  aria-current="true">
                  {{ item.title }} - $ {{ item.price }}
              </li>
            </ul>
            <br>
            <ul class="list-group">
              <li class="list-group-item active" aria-current="true">Total - {{ total }}</li>
            </ul>
          </div>
</template>

<script>
export default {
    props : ['items'],
    computed:{
        total(){
            var total = 0;
            this.items.forEach(item => {
                total +=  parseFloat(item.price)
            })
            return total;
        }
    }
}
</script>

<style>
    
</style>