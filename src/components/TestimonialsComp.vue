<template >
<div class="col-12 col-lg-3 col-sm-6 p-1" :to="{ title: 'testimonial', params: { id: testimonial.id } }">
    <div class="card" style="height: 925px; background-color: #404040; color: white;">
        <img :src="testimonial.image" class="card-img-top" alt="...">
        <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text">{{ testimonial.testimony }}<b>{{ testimonial.name }}</b></p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props: ["testimonial"],
};
</script>
<style >
    
</style>