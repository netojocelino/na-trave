<template>
  <h1>
    <template v-if="imageSource !== undefined">
        <a :href="href">
            <img :alt="title" :title="title" :src="imageSource" />
        </a>
    </template>
    <template v-else>
        <a :href="href">{{ title }}</a>
    </template>
  </h1>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: false,
            default: '#'
        },
        title: {
            type: String,
            required: false,
        },
        imageSource: {
            type: String,
            required: false,
        }

    }
}
</script>

<style>

</style>
