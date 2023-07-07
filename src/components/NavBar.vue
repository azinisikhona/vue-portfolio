<template >
<nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/resume">Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <!-- <nav>
        <router-link class="a" to="/">Home</router-link>
        <router-link class="a" to="/about">About</router-link>
        <router-link class="a" to="/resume">Resume</router-link>
        <router-link class="a" to="/projects">Projects</router-link>
        <router-link class="a" to="/testimonials">Testimonials</router-link>
        <router-link class="a" to="/contact">Contact</router-link>
    </nav> -->
</template>
<script>
export default {
    
}
</script>
<style scoped>
    nav {
        background-color: #404040;
    }

    nav > div > div {
      display: flex;
      justify-content: end;
    }

    .nav-link {
      color: white;
    }

    @media screen and (max-width: 992px){
      nav > div > div {
      display: flex;
      justify-content: center;
    }
    }

</style>