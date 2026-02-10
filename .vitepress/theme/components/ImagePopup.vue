<template>
  <div>
    <!-- Thumbnail -->
    <img
      :src="src"
      :alt="alt"
      class="thumbnail"
      @click="open = true"
    />

    <!-- Fullscreen Overlay -->
    <div
      v-if="open"
      class="overlay"
      @click.self="open = false"
    >
      <div class="image-wrapper">
        <button class="close-btn" @click="open = false">✕</button>

        <img :src="src" :alt="alt" class="popup-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImagePopup",
  props: {
    src: String,
    alt: String
  },
  data() {
    return { open: false }
  }
}
</script>

<style scoped>
.thumbnail {
  cursor: zoom-in;
  max-width: 100%;
  border-radius: 8px;
}

/* FULLSCREEN OVERLAY */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  animation: fadeIn .25s ease;
}

.image-wrapper {
  position: relative;
  animation: zoomIn .25s ease;
}

.popup-image {
  max-width: 85vw;
  max-height: 85vh;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.close-btn {
  position: absolute;
  top: -35px;
  right: -40px;
  background: white;
  color: black;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .close-btn {
    display: none;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes zoomIn {
  from { transform: scale(0.7); opacity: 0; }
  to   { transform: scale(1);   opacity: 1; }
}

</style>