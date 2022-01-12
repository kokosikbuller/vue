<template>
  <div @click="setId">
    <h2>{{ item.firstName }} {{ item.lastName }}</h2>
    <img class="user__img" :src="item.picture" />
  </div>
</template>

<script>
export default {
  name: "UserItem",
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    setId() {
      this.$router.push({ name: "User", params: { id: this.item.id }});
    },
  }
}
</script>

<style scoped>
.user__img {
  width: 150px;
  height: 150px;
}
</style>