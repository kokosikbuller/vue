<template>
  <ul>
    <li
      class="home_total"
      :class="{
        active: this.page === item - 1,
      }"
      @click="$emit('setPage', item)"
      :key="item"
      v-for="item in totalPage"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
		},
    totalPage: {
      type: Number,
		}
	}
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-direction: inherit;
  }

  .home_total {
    margin-left: 5px;
    cursor: pointer;
    padding: 10px;
    border: 1px solid grey;
  }

  .active {
    border: 1px solid rgb(250, 192, 0);
  }
</style>