<template>
  
    <div class="col-12 col-lg-3 col-sm-6 p-1" :to="{ title: 'educare', params: { id: educare.id } }">
        <div class="card" style="background-color: #404040; color: white;">
            <img :src="educare.image" class="card-img-top" alt="pic">
            <div class="card-body">
                <h5>{{ educare.institution }}</h5>
                <p>{{ educare.years }}</p>
                <p>{{ educare.status }}</p>
            </div>
        </div>
    </div>
  
</template>
<script>
export default {
    props: ["educare"],
};
</script>
<style scoped>
    img {
        height: 15rem;
    }
    .card {
        height: 25rem;
    }
</style>