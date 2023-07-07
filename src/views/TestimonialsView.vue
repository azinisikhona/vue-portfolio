<template >
    <div v-if="testimonials" class="row p-4">
        <TestimonialsComp id="testi" v-for="testimonial of testimonials" :key="testimonial.id" :testimonial="testimonial"/>
    </div>
    <div v-else>Wait a minute...</div>
</template>
<script>
import TestimonialsComp from '../components/TestimonialsComp.vue';
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },

    mounted() {
        this.$store.dispatch("getTestimonials")
    },

    components: {
        TestimonialsComp
    }
}
</script>
<style >
    
</style>