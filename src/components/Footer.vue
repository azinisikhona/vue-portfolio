<template >
    <footer class="text-center text-lg-start" style="background-color: #404040;">
      <div class="container d-flex justify-content-center py-3">
        <button type="button" class="btn btn-lg btn-floating mx-2 mt-2" id="btn">
          <a href="http://www.facebook.com/?lang=en" target="_blank">
            <img
              src="https://i.postimg.cc/TPp8JTKb/facebook.png"
              alt="facebook"
              width="40px"
            />
          </a>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2 mt-2" id="btn">
          <a href="http://github.com/?lang=en" target="_blank">
            <img
              src="https://i.postimg.cc/vHtdQqR4/github.png"
              alt="github"
              width="40px"
            />
          </a>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2 mt-2" id="btn">
          <a href="http://www.instagram.com/?lang=en" target="_blank">
            <img
              src="https://i.postimg.cc/HLKqSFMh/instagram.png"
              alt="instagram"
              width="40px"
            />
          </a>
        </button>
        <button type="button" class="btn btn-lg btn-floating mx-2 mt-2" id="btn">
          <a href="http://twitter.com/?lang=en" target="_blank">
            <img
              src="https://i.postimg.cc/6qRtLt1c/twitter.png"
              alt="twitter"
              width="40px"
            />
          </a>
        </button>
      </div>
  
    
      <div class="text-center text-white p-3">
        &copy;Azinisikhona 2023
      </div>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#btn {
  display: inline-block;
  margin: 0 0.5rem;

  animation: bounce;
  animation-duration: 2s;
  animation-iteration-count: infinite;

}
</style>