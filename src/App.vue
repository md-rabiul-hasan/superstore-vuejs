<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Super Store</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <br><br>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
            <div class="row">
              <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                  <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                  <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                  <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="col-md-3">
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Cart</li>
          </ul>
          <br>
           <ul class="list-group">
            <li class="list-group-item " aria-current="true">Cart</li>
            <li class="list-group-item " aria-current="true">Cart</li>
            <li class="list-group-item " aria-current="true">Cart</li>
            <li class="list-group-item " aria-current="true">Cart</li>
          </ul>
          <br>
           <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Total</li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
