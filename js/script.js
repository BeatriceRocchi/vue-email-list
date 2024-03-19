const { createApp } = Vue;

createApp({
  data() {
    return {
      emailList: [],
      totEmail: 10,
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },

  methods: {
    getApi() {
      for (let i = 0; i < this.totEmail; i++) {
        axios.get(this.apiUrl).then((result) => {
          this.emailList[i] = result.data.response;
        });
      }
    },
  },

  mounted() {
    this.getApi();
  },
}).mount("#app");
