<template>
  <v-container text-xs-center>
    <v-layout row>
      <div>This is 2nd page</div>
      <div>
      <v-btn @click="goBack" color="info">Back</v-btn>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "second-screen",
  methods: {
      goBack() {
          this.$router.go(-1)
      }
  }
};
</script>

