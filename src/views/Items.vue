<template>
  <div class="items">
    <h1>Fruits</h1>
    <post-list></post-list>
  </div>
</template>

<script>
// @ is an alias to /src
import PostList from "@/components/PostList.vue";

export default {
  name: "Items",
  components: {
    PostList,
  },
};
</script>
