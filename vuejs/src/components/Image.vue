<template>
  <div :class="`v-image ${getSize(size)}`" >
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
    },

    methods: {
        getSize(size) {
            const sizeConfigurations = {
                'extrasmall': 'w-20',
                'small': 'w-40',
                'base': 'w-60',
                'large': 'w-80',
                'extralarge': 'w-100',
            }
            if (sizeConfigurations.hasOwnProperty(size)) {
                return sizeConfigurations[size]
            }

            return sizeConfigurations['base']
        }
    }
}
</script>

<style>
.v-image {

}

.v-image-extrasmall,
.v-image- img{
    width: 4rem;
    height: 4rem;
}

.v-image-,
.v-image-small img{
    width: 6rem;
    height: 6rem;
}

.v-image-base,
.v-image- img{
    width: 8rem;
    height: 8rem;
}

.v-image-large,
.v-image- img{
    width: 10rem;
    height: 10rem;
}

.v-image-extralarge,
.v-image- img{
    width: 12rem;
    height: 12rem;
}

</style>
