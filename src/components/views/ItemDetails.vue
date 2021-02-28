<template>
    <div class="row" v-if="item_found">
        <div class="col-md-6">
            <img :src="item.photo" alt="">
        </div>
        <div class="col-md-6">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
            <h6>$ {{ item.price }}</h6>
        </div>
    </div>
    <h5 v-else>Loading ..... </h5>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            item : null,
            item_found : false
        }
    },
    mounted(){
        this.itemDetails()
    },
    methods:{
        itemDetails(){
            var self = this
            axios.get('http://localhost:3000/item/' + this.$route.params.id).then(response => {
                setTimeout(function(){
                    self.item_found = true
                    self.item = response.data
                }, 1000)                
            })
        }
    }
}
</script>


<style>
    
</style>