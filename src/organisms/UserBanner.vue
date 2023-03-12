<script setup>
import { defineProps } from 'vue';

const props = defineProps(['user']);
</script>

<template>
  <v-app-bar>
    <v-banner
      :avatar="props.user.picture.large"
      :text="props.user.name.first"
      @click="$router.push({ name: 'userDetail', params: {id: props.user.login.uuid} })"
      class="text-h6 align-center"
    >
    </v-banner>
  </v-app-bar>
</template>

<style>
</style>