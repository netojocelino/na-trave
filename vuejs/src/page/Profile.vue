<script setup lang="ts">
import Header from '@/components/Header.vue'
import Icon from '@/components/Icon.vue'
import MatchCard from '@/components/MatchCard.vue'
</script>

<template>
<div>
    <div className="bg-red-500 text-white p-2">
        <Header
            title="Na Trave"
            imageSource="/assets/logo/logo-fundo-vinho.svg"
            classHeader="container max-w-3xl flex justify-between p-2"
        >
            <template #subheader>
                <div className="p-4 container max-w-3xl space-y-2">
                    <Icon
                        icon="back"
                        className="w-10 text-white"
                        @click.prevent="$rotuer.push('/dashboard')"
                    />
                    <h3 className="text-2xl font-bold">{{ username }}</h3>
                </div>
            </template>
        </Header>
    </div>

    <section className="container max-w-3xl p-4 space-y-4">
        <h2 className="text-red-500 text-xl font-bold">Seus palpites</h2>

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

        <template
            v-for="(item, key, index) in matchs"   
            :key="index"
            className="space-y-4"
        >
            <MatchCard
                :startsAt="key"
                :teams="item"
            />
        </template>
            
    </section>
</div>
</template>

<script lang="ts">

function dateToString(date: Date) {
    let monthDay = `${date.getDate()}`
    if ((+monthDay) < 10) {
        monthDay = `0${monthDay}`
    }
    const monthName = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ][date.getMonth()]
    
    return `${monthDay} de ${monthName}`
}


export default {
  created () {
    this.date = new Date()

  },
  data: () => ({
    username: 'Neto',
    date: (new Date()),
    dateStringify: dateToString(new Date()),

    matchs: {
        '16:00': [
            {initial: 'bra', flag: '/assets/bandeiras/bra.png', goals: 1 },
            {initial: 'ser', flag: '/assets/bandeiras/ser.png', goals: 2 }
        ],
    }
  }),

  methods: {
    nextDay () {
        this.date.setDate(
            this.date.getDate() + 1
        )
        this.dateStringify = dateToString(this.date)
        
    },

    previousDay () {
        this.date.setDate(
            this.date.getDate() - 1
        )
        this.dateStringify = dateToString(this.date)
    },
  }

}
</script>

<style scoped></style>
