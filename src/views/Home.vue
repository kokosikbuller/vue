<template>
  <div class="home">
    <div v-if="loading">
      <hello-world :arr="users"/>
      <pagination :totalPage="totalPage" :page="page" @setPage="push" />
    </div>
    <div v-else>Загрузак...</div>
  </div>
</template>

<script>
import HelloWorld from "@/components/UserList.vue";
import Pagination from "@/components/Pagination.vue";


export default {
  name: "Home",
  components: {
    HelloWorld,
    Pagination
  },
  data() {
    return {
      users: [],
      totalPage: 0,
      page: 0,
      loading: false,
    }
  },
  methods: {
    fetchPosts() {
      fetch(`https://dummyapi.io/data/v1/user?page=${this.page}`, {
        method: "GET",
        headers: {
          "app-id": "61dc300ff18a538a523e14bf",
        },
      })
        .then((data) => data.json())
        .then((res) => {
          this.users = res.data;
          this.totalPage = Math.ceil(res.total / res.limit);
        });

      this.loading = true;
    },
    push(item) {
      this.page = item - 1;
      this.fetchPosts();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    this.fetchPosts();
  }
};
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
