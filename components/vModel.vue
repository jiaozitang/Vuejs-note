<template>
  <div>
    <input :value="val" @input="$emit('input',$event.target.value)"/>
    <Quanju></Quanju>
  </div>
</template>

<script>
    export default {
        name: "vModel",
      props: ["val"]
    }
</script>

<style scoped>

</style>
