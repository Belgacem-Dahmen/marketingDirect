<template>
  <Transition name="fadeSlide" mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style>
.fadeSlide-enter-active,
.fadeSlide-leave-active {
  transition: 0.5s;
}

.fadeSlide-enter-from {
  opacity: 0;
  transform: translateX(10px);
}
.fadeSlide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
