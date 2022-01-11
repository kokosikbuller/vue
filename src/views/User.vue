<template>
  <div v-if="loading">
    <h1>{{ user.firstName }} {{ user.lastName }}</h1>
    <img :src="user.picture" width="200" />
    <ul class="user__list">
      <li><strong>Email</strong> {{ user.email }}</li>
      <li><strong>Birth:</strong> {{ user.dateOfBirth }}</li>
      <li><strong>Phone:</strong> {{ user.phone }}</li>
      <li><strong>Country:</strong> {{ location.country}}</li>
      <li><strong>City:</strong> {{ location.city }}</li>
    </ul>
  </div>
  <div v-else>Загрузака...</div>
</template>

<script>
export default {
  data() {
    return {
      user: {},
      location: {},
      loading: false
    }
  },
  methods: {
    fetchUser() {
      try {
        const { id } = this.$route.params;
        fetch("https://dummyapi.io/data/v1/user/" + id, {
          method: "GET",
          headers: {
            "app-id": "61dc300ff18a538a523e14bf",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            this.user = data;
            this.location = data.location;
          });

        this.loading = true;
      } catch (e) {
        console.log("Error",e);
      }
    }
  },
  mounted() {
    this.fetchUser();
  }, 
}
</script>

<style>
.user__list {
  border: 2px solid grey;
  padding: 0;
}

 li {
  list-style: none;
  font-size: 20px;
  margin-top: 10px;
  border-bottom: 1px solid grey;
}
</style>