import { defineStore } from 'pinia';

export const useStoreMessages = defineStore('messages', {
  state: () => ({
    messages: {}
  }),
  getters: {
    getMessagesById(state) {
      return (id) => state.messages[id];
    }
  },
  actions: {
    setMessage(payload) {
      if (!(payload.id in this.messages)) {
        this.messages[payload.id] = [];
      }
      this.messages[payload.id].push(payload.message);
    },
    returnRandomMessage(id, time) {
      const url = 'https://random-word-api.herokuapp.com/word';
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.setMessage({id: id, message: {from: 'You', msg: data[0], time: time}});
        })
    }
  }
})