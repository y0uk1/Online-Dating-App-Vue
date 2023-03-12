<script setup>
import { defineProps } from 'vue';

const props = defineProps(['user']);
</script>

<template>
  <v-card width="800" class="mx-auto">
    <v-img
      height="400"
      :src="props.user.picture.large"
      cover
      class="text-white"
    ></v-img>
    <v-card-item>
      <v-table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ props.user.name.first }}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{{ props.user.gender }}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{{ props.user.dob.age }}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{{ props.user.location.country }}</td>
          </tr>
          <tr>
            <td>State</td>
            <td>{{ props.user.location.state}}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{{ props.user.location.city }}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{{ props.user.email }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-card-item>
  </v-card>
</template>