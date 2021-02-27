<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Super Store</a>
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
export default {
    data(){
      return {
        keyword : ''
      }
    },
    methods:{
      search(){
        this.$emit('searchItem', this.keyword);
      }
    }
}
</script>

<style>
    
</style>