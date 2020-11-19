<template>
  <div>
    <div class="grid-container">
      <article v-for="post in posts" :key="post.id">
        <img :src="post.image" alt="" />
        <h3>{{ post.description }}</h3>
        <router-link :to="{ name: 'Update', params: { post: post } }">
          <button>Update</button>
        </router-link>
        <button type="button" v-on:click="deletePost(post.id)">Delete</button>
      </article>
    </div>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    deletePost(id) {
      console.log(id);
      postRef.doc(id).delete();
    },
  },
  firestore: {
    posts: postRef,
  },
};
</script>

<style>
.grid-container {
  display: flex;
  flex-direction: column;
}

.grid-container img {
  width: 50%;
}
</style>