<script setup lang="ts">
import Icon from '@/components/Icon.vue'

import { addDays, subDays, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
</script>

<template>
<nav className="flex space-x-4 p-4 justify-center items-center flex-1">
    <Icon
        @click.prevent="previousDay"
        icon="arrow-left"
        className="w-6 cursor-pointer"
    />
    <span className="font-bold">{{ dateStringify }}</span>
    <Icon
        @click.prevent="nextDay"
        icon="arrow-right"
        className="w-6 cursor-pointer"
    />
</nav>
  
</template>

<script lang="ts">
function dateToString(date: Date) {
    return format(date, "d 'de' MMMM", {
        locale: ptBR
    })
}

export default {

    created() {
        this.date = this.$props.startsData as Date
        this.dateStringify = dateToString(this.date)
    },

    data: () => ({
        date: new Date(),
        dateStringify: '',
    }),

    props: {
        startsData: {
            type: Object,
            required: true,
        }
    },

    methods: {
            nextDay () {
                this.date = addDays(this.date, 1)
                this.dateStringify = dateToString(this.date)
                
            },

            previousDay () {
                this.date = subDays( this.date, 1)
                this.dateStringify = dateToString(this.date)
            },
    }

}
</script>

<style scoped></style>
