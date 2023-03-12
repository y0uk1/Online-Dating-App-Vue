<script setup>
import { storeToRefs } from 'pinia';
import { useStoreUsers } from '../stores/users';
import UserCard from '../organisms/UserCard.vue'

const { users } = storeToRefs(useStoreUsers());

</script>

<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(user, key) in users"
        :key="key"
        cols="12" sm="6" md="3" lg="2"
      >
        <UserCard
          :user="user"
        >
        </UserCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>