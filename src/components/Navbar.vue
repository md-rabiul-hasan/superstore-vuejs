<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link :to="{ path:'/' }"> <a class="navbar-brand">Super Store</a></router-link>
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex" @submit.prevent="search">
            <input class="form-control me-2" type="search" v-model="keyword" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return {
        keyword : ''
      }
    },
    methods:{
      search(){
        var self = this
        axios.get('http://localhost:3000/search/'+ this.keyword).then(response =>{
          this.$store.commit('setInventory', response.data)
        });
      }
    }
}
</script>

<style>
    
</style>