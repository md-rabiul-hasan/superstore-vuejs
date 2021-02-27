<template>
    <div class="row">
        <div v-for="(item,index) in items" :key="index" class="col-md-4 mb-5">
        <div class="card" style="width: 18rem;">
            <img :src="item.photo" class="card-img-top img-style" >
            <div class="card-body">
            <h5 class="card-title">{{item.title}}</h5>
            <p class="card-text">{{ item.price }}</p>
            <a @click="addToCart(item)" class="btn btn-primary">+add</a>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['items'],
    methods : {
        addToCart(item){
            this.$emit('newItemAdded', item);
        }
    }
}
</script>

<style scope>
    .img-style{
        width: 100%;
        height: 200px;
    }
</style>