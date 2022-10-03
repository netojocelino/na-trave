<template>
  <div :class="`v-image v-image-${size ?? 'base'}`" >
    <img
        :src="source"
        :alt="title"
        :title="title"
    />
  </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'base',
            validator (value) {
                return [
                    'extrasmall',
                    'small',
                    'base',
                    'large',
                    'extralarge',
                ].includes(value)
            }
        },
        source: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false,
        }
    }
}
</script>

<style>
.v-image {

}

.v-image-extrasmall,
.v-image-extrasmall img{
    width: 4rem;
    height: 4rem;
}

.v-image-small,
.v-image-small img{
    width: 6rem;
    height: 6rem;
}

.v-image-base,
.v-image-base img{
    width: 8rem;
    height: 8rem;
}

.v-image-large,
.v-image-large img{
    width: 10rem;
    height: 10rem;
}

.v-image-extralarge,
.v-image-extralarge img{
    width: 12rem;
    height: 12rem;
}

</style>
