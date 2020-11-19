<template>
  <div class="update">
    <h2>UPDATE FRUIT</h2>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type a description here"
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="insert image link"
        required
      />
      <button class="choose-image" type="button" v-on:click="triggerChooseImg">
        Choose Image
      </button>
      <button type="button" v-on:click="updatePost">Update post</button>
      <img :src="post.image" class="image-preview" />
    </form>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Update",
  props: {
    post: Object,
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    updatePost() {
      console.log(this.post);

      postRef.doc(this.post.id).set({
        description: this.post.description,
        image: this.post.image,
      });
      this.$router.push("/");
    },
  },
};
</script>

<style>
img {
  width: 40%;
}

button {
  width: 35%;
}
</style>