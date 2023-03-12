<script setup>
import { storeToRefs } from 'pinia'
import { useStoreUsers } from '../stores/users';
import UserTable from '../organisms/UserTable.vue'

const { getUserById } = storeToRefs(useStoreUsers());
</script>

<template>
  <v-container fluid>
    <div class="d-flex justify-center align-center">
      <UserTable
        :user="getUserById($route.params.id)"
      >
      </UserTable>
    </div>

    <div class="d-flex justify-center align-center mt-5">
      <v-btn
        variant="outlined"
        color="success"
        class="mr-5"
        :to="{ name: 'userList' }"
      >
        Home
      </v-btn>
    
      <v-btn
        variant="outlined"
        color="success"
        class="ml-5"
        :to="{ name: 'chat', params: {id: $route.params.id} }"
      >
        Message
      </v-btn>
    </div>
  </v-container>
  
</template>

<style>
</style>