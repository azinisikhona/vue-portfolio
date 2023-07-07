<template>
  
    <div class="col-12 col-lg-3 col-sm-6 p-1" :to="{ title: 'skill', params: { id: skill.id } }">
        <div class="card" style="background-color: #404040; color: white;">
            <img :src="skill.image" class="card-img-top" alt="pic">
            <div class="card-body">
                <h5>{{ skill.name }}</h5>
                <div class="progress mt-5" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" style="width: 25%">{{ skill.rate }}</div>
                </div>
            </div>
        </div>
    </div>
  
</template>
<script>
export default {
    props: ["skill"],
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
