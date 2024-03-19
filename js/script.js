const { createApp } = Vue;

createApp({
  data() {
    return {
      emailListTemp: [],
      emailList: [],
      totEmail: 10,
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
    };
  },

  methods: {
    getApi() {
      for (let i = 0; i < this.totEmail; i++) {
        axios.get(this.apiUrl).then((result) => {
          this.emailListTemp[i] = result.data.response;
          this.isListCompleted();
        });
      }
    },

    isListCompleted() {
      if (this.emailListTemp.length === this.totEmail) {
        this.emailList = this.emailListTemp;
      }
    },
  },

  mounted() {
    this.getApi();
  },
}).mount("#app");
