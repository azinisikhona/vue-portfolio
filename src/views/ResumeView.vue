<template >

    <div v-if="education" class="row p-4">
        <h2 style="text-align: center;">Education</h2>
        <Education id="edu" v-for="educare of education" :key="educare.id" :educare="educare"/>
    </div>

    <div v-if="skills" class="row p-4">
        <h2 style="text-align: center;">Skills</h2>
       <skillsComp id="lang" v-for="skill of skills" :key="skill.id" :skill="skill"/>
    </div>
    <div v-else>Processing....</div>
    <div>
        <a href="https://drive.google.com/file/d/1_C6yvWRzP7nGFXXcKHAKBP6YDX85YxCV/view?usp=sharing" class="btn btn-primary m-1">
        <h2>View CV</h2>
        </a>
    </div>
</template>
<script>
import skillsComp from '../components/skillsComp.vue';
import Education from '../components/Education.vue';
export default {
    computed: {
        education() {
            return this.$store.state.education
        },
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch("getEducation")
        this.$store.dispatch("getSkills")
    },
    components: {
        skillsComp, Education
    }
}
</script>
<style >
    
</style>