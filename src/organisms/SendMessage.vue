<script setup>
import { defineProps, ref } from 'vue';
import { useStoreMessages } from '../stores/messages';

const { setMessage, returnRandomMessage } = useStoreMessages();
const props = defineProps(['id']);
const msg = ref("");

const send = () => {
  const date = new Date();
  if (!msg.value) {
    return;
  }
  setMessage({id: props.id, message: {from: 'I', msg: msg.value, time: date.toLocaleString()}});
  msg.value = '';
  returnRandomMessage(props.id, date.toLocaleString());
}
</script>

<template>
  <v-container class="m-auto">
    <v-row no-gutters>
      <v-col>
        <div class="d-flex flex-row align-start">
          <v-text-field v-model="msg" placeholder="Type Something" @keypress.enter="send"></v-text-field>
          <v-btn icon="mdi-send" class="ml-4" @click="send"></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>