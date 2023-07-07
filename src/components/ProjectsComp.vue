<template>
  
    <div class="col-12 col-lg-3 col-sm-6 p-1" :to="{ title: 'project', params: { id: project.id } }">
        <div class="card" style="background-color: #404040; color: white;">
            <img :src="project.image" class="card-img-top" alt="pic">
            <div class="card-body">
                <h5>{{ project.name }}</h5>
                <a :href="project.netlify" class="btn btn-primary m-1">Netlify</a>
                <a :href="project.code" class="btn btn-primary m-1">Code</a>
            </div>
        </div>
    </div>
  
</template>
<script>
export default {
    props: ["project"],
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