import { createStore } from 'vuex'

export default createStore({
  state: {
    skills: null,
    skill: null,
    education: null,
    educare: null,
    projects: null,
    project: null,
    testimonials: null,
    testimonial: null,
  },
  
  mutations: {
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setSkill: (state, skill) => {
      state.skill = skill;
    },
    setEducation: (state, education) => {
      state.education = education;
    },
    setEducare: (state, educare) => {
      state.educare = educare;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setProject: (state, project) => {
      state.project = project;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setTestimonial: (state, testimonial) => {
      state.testimonial = testimonial;
    }
  },

  actions: {
    getSkills: async (context) => {
      fetch("https://azinisikhona.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setSkills", data.skills));
    },
    getSkill: async (context, id) => {
      fetch("https://azinisikhona.github.io/db.json"  + id)
      .then((res) => res.json())
      .then((data) => context.commit("setSkill", data.skill));
    },
    getEducation: async (context) => {
      fetch("https://azinisikhona.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setEducation", data.education));
    },
    getEducare: async (context, id) => {
      fetch("https://azinisikhona.github.io/db.json" + id)
      .then((res) => res.json())
      .then((data) => context.commit("setEducare", data.educare));
    },
    getProjects: async (context) => {
      fetch("https://azinisikhona.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setProjects", data.projects));
    },
    getProject: async (context, id) => {
      fetch("https://azinisikhona.github.io/db.json" + id)
      .then((res) => res.json())
      .then((data) => context.commit("setProject", data.project));
    },
    getTestimonials: async (context) => {
      fetch("https://azinisikhona.github.io/db.json")
      .then((res) => res.json())
      .then((data) => context.commit("setTestimonials", data.testimonials));
    },
    getTestimonial: async (context, id) => {
      fetch("https://azinisikhona.github.io/db.json" + id)
      .then((res) => res.json())
      .then((data) => context.commit("setTestimonial", data.testimonial));
    }
  }, 
})
