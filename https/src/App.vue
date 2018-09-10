<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
            </div>

            <div class="col-lg-8">
                <div>username: <input v-model="user.id"/></div>
                <div>password: <input v-model="user.password"/></div>
                <button @click="submit">Submit</button>

                <button @click="fetch">Fetch</button>
                <div v-for="user in users">
                    {{ user.id }} -- {{ user.password }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        password: ""
      },
      users: []
    };
  },
  methods: {
    submit() {
      this.$http.post("", this.user).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    },
    fetch() {
      this.$http
        .get("", this.user)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const array = [];
          for (let key in data) {
            array.push(data[key]);
          }
          this.users = array;
        }),
        error => {
          console.log(error);
        };
    }
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alt.json" }
    };
    this.resource = this.$resource("data.json");
  }
};
</script>

<style>
</style>
