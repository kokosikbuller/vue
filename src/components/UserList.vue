<template>
  <div class="user" :key="item.id" v-for="item in arr">
    <user-item :item="item"/>
  </div>
</template>

<script>
import UserItem from "./UserItem.vue";
export default {
  name: "UserList",
  components: { UserItem },
  props: {
    arr: {
      type: Array,
    },
  }
};
</script>

<style scoped>
  .user {
    width: 300px;
    border: 1px solid gray;
    margin-top: 10px;
  }

  .user__img {
    width: 150px;
    height: 150px;
  }
</style>>