<template>
    <header className="container flex justify-center max-w-5xl p-4">
        <img :alt="title" :title="title" :src="imageSource" className="max-w-xs" />
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: false,
        },
        imageSource: {
            type: String,
            required: true,
        }

    }
}
</script>

<style>

</style>
