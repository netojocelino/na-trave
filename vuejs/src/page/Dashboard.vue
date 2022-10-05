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
            <template #default>
                <Icon
                    icon="profile"
                    className="w-10 cursor-pointer"
                    @click.prevent="$router.push('/profile')" 
                />
            </template>

            <template #subheader>
                <div className="p-4 container max-w-3xl space-y-2">
                    <span>Olá {{username}}!</span>
                    <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
                </div>
            </template>
        </Header>
    </div>

    <section className="container max-w-3xl p-4 space-y-4">
        <nav className="flex space-x-4 p-4 justify-center items-center flex-1">
            <Icon icon="arrow-left" className="w-6 cursor-pointer" />
            <span className="font-bold">{{ date }}</span>
            <Icon icon="arrow-right" className="w-6 cursor-pointer" />
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
export default {
  data: () => ({
    username: 'Neto',
    date: '24 de Novembro',

    matchs: {
        '07:00': [
            {initial: 'sui', flag: '/assets/bandeiras/sui.png'},
            {initial: 'cam', flag: '/assets/bandeiras/cam.png'}
        ],
        '10:00': [
            {initial: 'uru', flag: '/assets/bandeiras/uru.png'},
            {initial: 'cor', flag: '/assets/bandeiras/cor.png'}
        ],
        '13:00': [
            {initial: 'por', flag: '/assets/bandeiras/por.png'},
            {initial: 'gan', flag: '/assets/bandeiras/gan.png'}
        ],
        '16:00': [
            {initial: 'bra', flag: '/assets/bandeiras/bra.png'},
            {initial: 'ser', flag: '/assets/bandeiras/ser.png'}
        ],
    }
  }),

}
</script>

<style scoped></style>
