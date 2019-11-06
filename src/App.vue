<template>
  <div id="app">
    <h1>{{ TRANSLATIONS.test }}</h1>
  </div>
</template>

<script>
  export default {
    name: "App",
    computed: {
      TRANSLATIONS() {
        return {
          test: window.gettext('test-translate-vue'),
        }
      }
    },
  }
</script>

<style scoped>

</style>
