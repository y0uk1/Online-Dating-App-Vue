<script setup>
import { storeToRefs } from 'pinia';
import { useStoreMessages } from '../stores/messages';
import { useStoreUsers } from '../stores/users';

const { messages } = storeToRefs(useStoreMessages());
const { getUserById } = storeToRefs(useStoreUsers());
</script>

<template>
  <v-list>
    <v-list-item
      v-for="(message, key) in messages"
      :key="key"
      :prepend-avatar="getUserById(key) ? getUserById(key).picture.large : ''"
      :title="message.slice(-1)[0].msg"
      :subtitle="getUserById(key).name.first + ' (' + message.slice(-1)[0].time + ')'"
      :to="{ name: 'chat', params: {id: key} }"
      class="py-5"
    >
    </v-list-item>
  </v-list>
</template>

<style>
</style>