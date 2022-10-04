<template>
<div className="md:flex-1 flex flex-col space-y-6">
  
  <h1 className="text-3xl text-center md:text-left font-bold">
    {{ title }}
  </h1>

  <slot name="default"></slot>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>

</style>
