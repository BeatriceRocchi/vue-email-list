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
    //Funzione di chiamata
    getApi() {
      for (let i = 0; i < this.totEmail; i++) {
        axios
          .get(this.apiUrl)
          .then((result) => {
            this.emailListTemp[i] = result.data.response;
            this.isListCompleted();
          })
          .catch((error) => {
            console.log("Errore di chiamata", error);
          });
      }
    },

    //Funzione di controllo sulla lunghezza della lista di email
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
