<script setup>
import { useStoreUsers } from '/src/stores/users';
import HeaderView from '/src/organisms/HeaderView.vue';
const { fetchUsers } = useStoreUsers();

fetchUsers({'results': 24});
</script>

<template>
  <v-app>
    <v-main>
      <HeaderView></HeaderView>
      <router-view/>
    </v-main>
  </v-app>
</template>