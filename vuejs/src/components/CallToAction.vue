<template>
  <h2 className="v-call-to-action-title">{{ title }}</h2>

  <div class="v-call-to-action-buttons">
    <a
        :href="{ primaryButtonLinkTo }"
        className="v-call-to-action-button"
    >
        {{ primaryButtonTitle }}
    </a>
    <a
        v-if="secondaryButtonTitle !== ''"
        className="v-call-to-action-button"
        :href="{ secondaryButtonLinkTo }"
    >
        {{ secondaryButtonTitle }}
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
