<script setup>
</script>

<template>
  <v-app-bar fixed>
    <v-toolbar color="secondary">
      <v-toolbar-title
        style="cursor: pointer"
        class="text-white"
        @click="$router.push({ name: 'userList' })"
      >
        Online Dating App
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn 
        icon="mdi-email"
        size="x-large"
        color="white"
        :to="{ name: 'messageList' }"
      >
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>

<style>
</style>