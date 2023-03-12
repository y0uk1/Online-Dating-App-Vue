import { defineStore } from 'pinia';

export const useStoreUsers = defineStore('users', {
  state: () => ({
    users: {}
  }),
  getters: {
    getUserById(state) {
      return (id) => state.users[id]
    }
  },
  actions: {
    setUsers(users) {
      for (const userIndex in users) {
        this.users[users[userIndex].login.uuid] = users[userIndex]
      }
      console.log(this.users)
    },
    fetchUsers(payload) {  
      const url = 'https://randomuser.me/api/';
      const query = new URLSearchParams(payload);

      fetch(`${url}?${query}`)
        .then(response => response.json())
        .then(data => {
          this.setUsers(data.results)
        })
    },
  }
});