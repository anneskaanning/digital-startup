<template>
  <div class="create">
    <h2>CREATE FRUIT LIST</h2>
    <p>Type your favorite fruits</p>
    <form>
      <input
        type="text"
        v-model="post.description"
        placeholder="Type fruit here..."
        required
      />
      <input
        type="text"
        v-model="post.image"
        placeholder="Insert image link..."
        required
      />
      <button type="button" v-on:click="createPost">CREATE LIST</button>
    </form>
    <iframe
      src="https://giphy.com/embed/DRJ5BALSz2iLS"
      width="250"
      height="250"
      frameBorder="0"
      class="giphy-embed"
      allowFullScreen
    ></iframe>
  </div>
</template>

<script>
import { postRef } from "../firebase-db";
export default {
  name: "Create",
  data() {
    return {
      post: {
        description: "",
        image: null,
      },
    };
  },
  methods: {
    triggerChooseImg() {
      this.$refs.fileInput.click();
    },
    previewImage() {
      const imageFile = this.$refs.fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (event) => {
        this.post.image = event.target.result;
      };
      fileReader.readAsDataURL(imageFile);
    },
    createPost() {
      postRef.add(this.post);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.create input {
  width: 70%;
  padding: 15px;
  border: solid grey 1px;
  border-radius: 20px;
  margin: 10px;
}

.create button {
  width: 40%;
  margin: 20px;
}

p {
  font-style: italic;
}
</style>
