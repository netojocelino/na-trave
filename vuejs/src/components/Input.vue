<template>
  <fieldset className="flex flex-col">
        <label :for="name" className="text-sm font-bold text-gray-500 mb-2">{{ label }}</label>
        <input
            :class="`p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700`"
            :type="type"
            :id="name"
            :placeholder="placeholder"
        />
    </fieldset>
</template>

<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        },
        
        placeholder: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped></style>
