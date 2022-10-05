<script setup lang="ts">
import DateNavigation from '@/components/DateNavigation.vue'
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

        <DateNavigation
            :startsData="new Date()"
        />

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



export default {
  created () {
    this.date = new Date()


  },
  data: () => ({
    username: 'Neto',
    date: (new Date()),
    dateStringify: '',

    matchs: {
        '16:00': [
            {initial: 'bra', flag: '/assets/bandeiras/bra.png', goals: 1 },
            {initial: 'ser', flag: '/assets/bandeiras/ser.png', goals: 2 }
        ],
    }
  }),

}
</script>

<style scoped></style>
