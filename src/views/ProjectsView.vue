<template >
    <div v-if="projects" class="row p-4">
        <h2 style="text-align: center;">Projects</h2>
        <ProjectsComp id="andaz" v-for="project of projects" :key="project.id" :project="project"/>
    </div>
    <div v-else>Loading...</div>
</template>
<script>
import ProjectsComp from '../components/ProjectsComp.vue';
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },

    mounted() {
        this.$store.dispatch("getProjects")
    },
    
    components: {
        ProjectsComp
    }
}
</script>
<style >
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    background-color: antiquewhite;
}

</style>