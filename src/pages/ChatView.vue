<script setup>
import { useStoreMessages } from '../stores/messages';
import { useStoreUsers } from '../stores/users';
import SendMessage from '../organisms/SendMessage.vue';
import UserBanner from '../organisms/UserBanner.vue';
import MessageList from '../organisms/MessageList.vue'

const { getMessagesById } = useStoreMessages();
const { getUserById } = useStoreUsers();
</script>

<template>
  <UserBanner
    :user="getUserById($route.params.id)"
  >
  </UserBanner>
  
  <MessageList
    :user="getUserById($route.params.id)"
    :messages="getMessagesById($route.params.id)"
  >
  </MessageList>

  <v-footer app>
    <SendMessage
      :id="$route.params.id"
    >
    </SendMessage>
  </v-footer>
</template>

<style>
</style>