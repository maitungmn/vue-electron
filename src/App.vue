<template>
  <v-app>
      <v-content>
        <v-container class="mt-4">
          <transition name="fade">
            <router-view />
          </transition>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
</style>
