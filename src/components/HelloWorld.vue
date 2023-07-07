<template>
  <div class="plz-work">
    <!-- <img src="https://i.postimg.cc/HxcF47bG/home.jpg" alt=""> -->
   <h1>
    <span class="word1">Azinisikhona</span> <span class="word2">Siyalana</span><br>
    <h2>Aspiring web developer</h2>
  </h1> 
  </div>
  
  
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.plz-work {
  height: 100vh;
  background-image: url(https://i.postimg.cc/HxcF47bG/home.jpg);
  /* background-repeat: no-repeat; */
  background-size: cover;
}

h1 {
  position: sticky;
  top: 20%;
  left: 20%;
}

h2 {
  /* position: absolute;
  top: 25%;
  left: 20%; */
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounceInDown; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s;/* don't forget to set a duration! */

}

.word1{
 display: inline-block;
  margin: 0 0.5rem;

  animation: backInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

.word2{
 display: inline-block;
  margin: 0 0.5rem;

  animation: backInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

img {
  width: 100%;
  height: 100%;
}
</style>