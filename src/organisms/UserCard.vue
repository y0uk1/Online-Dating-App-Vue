<script setup>
import { defineProps } from 'vue';

const props = defineProps(['user']);
</script>

<template>
  <v-card
    class="ma-2"
    max-width="344"
  >
    <v-img
      :src="props.user.picture.large"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      {{ props.user.name.first }}
    </v-card-title>

    <v-card-subtitle>
      Age: {{ props.user.dob.age }}
    </v-card-subtitle>

    <v-card-actions class="justify-space-around">
      <v-btn
        variant="outlined"
        color="success"
        :to="{ name: 'userDetail', params: {id: props.user.login.uuid} }"
      >
        Profile
      </v-btn>
      <v-btn
        variant="outlined"
        color="success"
        :to="{ name: 'chat', params: {id: props.user.login.uuid} }"
      >
        Message
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style>
</style>