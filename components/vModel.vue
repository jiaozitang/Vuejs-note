<template>
    <input :value="val" @input="$emit('input',$event.target.value)"/>
</template>

<script>
    export default {
        name: "vModel",
      props: ["val"]
    }
</script>

<style scoped>

</style>
