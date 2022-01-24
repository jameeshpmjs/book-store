<template>
  <div>404 Not found</div>
</template>

<script>
export default {
  name: "FileNotFound",
  created() {
    this.$store.set("loading", false)
  },
}
</script>
