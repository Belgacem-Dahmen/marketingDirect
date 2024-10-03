<template>
    <div class="modal-overlay" v-if="isOpen" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ modalName }}</h2>
          <button @click="closeModal" class="close-button">X</button>
        </div>
        <div class="modal-body">
          <!-- Slot to inject dynamic content -->
          <slot></slot>
        </div>
      </div>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
import FadeSlideTransition from "../transitions/FadeSlideTransition.vue";

// Props for the modal name and isOpen state
defineProps({
  modalName: {
    type: String,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
});

// Emits close event to parent component
const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  margin: auto;
  border-radius: 10px;
  width: 375px;
  max-width: 90%;
  padding: 20px;
  box-shadow: 1px 1px 5px gray;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.modal-body {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
