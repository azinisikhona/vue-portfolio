<template >
    <div class="container rounded-4">
      <div class="row d-flex justify-content-center">
        <div class="container-fluid m-2">
          <img class="loading lazy"
            src="https://i.postimg.cc/mk0gV9GH/C12-C1-Azinisikhona-Siyalana-2.jpg"
            alt="Thats also me" style="width: 547px; height: 819px;"
          />
        </div>
        <div class="col-5 m-2" style="width: 100%;">
          <h2 style="font-size: larger"><b>About Me</b></h2>
          <h3 style="font-size: larger"><b>Personal Details</b></h3>
          <p style="font-size: larger">Full name: Azinisikhona Siyalana</p>
          <p style="font-size: larger">Date of birth: 2002/05/21</p>
          <p style="font-size: larger">Gender: Male</p>
          <p style="font-size: larger">Location: A1642, Samora Machel, Cape Town</p>
          <p style="font-size: larger">Email Address: azizsiyalana10@gmail.com</p>
          <p style="font-size: larger">Willing to relocate: Yes</p>
  
          <h3 class="pt-5" style="font-size: larger"><b>Bio</b></h3>
          <p style="font-size: larger">
            I was born and raised In King William's Town and relocated to Cape
            Town when I was 12yrs. I attend Zisukhanyo Secondary School in Samora
            Machel. I never touched a computer until I was 13yrs and only for that
            year. I got interested in coding in a career expo where I learnt that
            there are self driving cars in making and the people that can make
            that possible are known as coders. Telling machines what to do and
            teaching them to recognize people and objects sounds really exciting.
          </p>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    @media screen and (max-width: 570px) {
      img {
        width: 100% !important;
        height: 100% !important;
        margin: 0;
      }
    }

    img {
       display: inline-block;
       margin: 0 0.5rem;

       animation: jackInTheBox;
       animation-duration: 2s; 
    }
</style>