<script setup>
import { defineProps } from 'vue';

const props = defineProps(['user', 'messages']);
</script>

<template>
  <v-container>
    <v-row class="fill-height pb-14" align-end>
      <v-col>
        <div v-for="(item, index) in props.messages" :key="index"
          :class="['d-flex flex-row align-center my-2', item.from === 'I' ? 'justify-end': null]">
          <div class="d-flex flex-column">
            <div>
              <span v-if="item.from === 'I'" class="blue--text mr-3">{{ item.msg }}</span>
              <v-avatar size="36">
                <v-img
                  :src="item.from === 'You' ? props.user.picture.large : 'https://cdn.vuetifyjs.com/images/john.jpg'"
                ></v-img>
              </v-avatar>
              <span v-if="item.from !== 'I'" class="blue--text ml-3">{{ item.msg }}</span>
            </div>
            <p class="text-end">{{ item.time }}</p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>