<template>
  <router-view v-slot="{ Component }">
    <transition
      name="content"
      mode="out-in"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>


<style>
</style>