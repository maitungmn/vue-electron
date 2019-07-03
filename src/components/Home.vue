<template>
  <v-container text-xs-center>
    <v-layout row>
      <div>This is Home123</div>
      <div>
        <v-btn @click="goNextPage" color="success">Next Page</v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home",
  methods: {
    goNextPage() {
      this.$router.push("/second-screen");
    }
  }
};
</script>

