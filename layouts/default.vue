<template>
  <html :dir="locale === 'ar' ? 'rtl' : 'ltr'">
    <div class="layout bg-white font-bodyFont">
      <AppNav />
      <SecOne />
      <SecTwo />
      <SecThree />

      <slot></slot>
      <AppFooter />
    </div>
  </html>
</template>

<script setup>
const { locale } = useI18n();
// Import the global CSS to apply custom styles
import "~/assets/css/global.css"; // Adjust the path if necessary
</script>

<style scoped>
/* * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
} */
</style>
