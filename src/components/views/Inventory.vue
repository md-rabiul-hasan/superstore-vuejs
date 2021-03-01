<template>
    <div class="row"  v-if="!loading">
        <div v-for="(item,index) in items" :key="index" class="col-md-4 mb-5">
            <div class="card" style="width: 18rem;">
                <router-link class="details_link" :to="{ path:'item/' + item.id }">
                    <img :src="item.photo" class="card-img-top img-style" >
                </router-link>
                
                <div class="card-body">
                <h5 class="card-title">{{item.title}}</h5>
                <p class="card-text">{{ item.price }}</p>
                <a @click="addToCart(item)" class="btn btn-primary">+add</a>
                </div>
            </div>
        </div>
    </div>
    <h6 v-else>Loading items ....</h6>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            items : [],
            loading : true
        }
    },
    mounted(){
        this.fetchItems()
    },
    methods : {
        addToCart(item){
            // this.$emit('newItemAdded', item);
            this.$store.commit('addToCart', item)
        },
        fetchItems(){
            var self = this
            axios.get('http://localhost:3000/items').then(response => {
                setTimeout(function(){
                    self.items = response.data,
                    self.loading = false
                }, 1000)
               
            })
        }
    }
}
</script>

<style scope>
    .img-style{
        width: 100%;
        height: 200px;
    }
    .details_link{
        cursor: pointer;
    }
</style>