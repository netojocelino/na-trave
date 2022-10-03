<template>
  <h2 className="text-white text-5xl text-center">{{ title }}</h2>

  <div class="sm:w-4/5 justify-center self-center items-center">
    <a
        :href="primaryButtonLinkTo"
    >
        <div className="sm:w-3/5 p-4 bg-white border-solid border-2 border-red-1">
            {{ primaryButtonTitle }}
        </div>
    </a>
    <a
        v-if="secondaryButtonTitle !== ''"
        :href="secondaryButtonLinkTo"
    >
        <div
            className="sm:w-3/5 p-4 bg-red-1 border-solid border-2 border-white"
        >
            {{ secondaryButtonTitle }}
        </div>
    </a>


  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },

        primaryButtonTitle: {
            type: String,
            required: true,
        },

        primaryButtonLinkTo: {
            type: String,
            required: true,
        },


        
        secondaryButtonTitle: {
            type: String,
            required: false,
        },

        secondaryButtonLinkTo: {
            type: String,
            required: false,
        },


    }
}
</script>

<style>

</style>
