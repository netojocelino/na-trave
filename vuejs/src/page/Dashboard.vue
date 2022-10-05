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
                <Icon icon="profile" className="w-10" />
            </template>

            <template #subheader>
                <div className="p-4 container max-w-3xl space-y-2">
                    <span>Olá {{username}}!</span>
                    <h3 className="text-2xl font-bold">Qual é o seu palpite?</h3>
                </div>
            </template>
        </Header>
    </div>

    <section className="container max-w-3xl p-4">
        <!-- <nav className="flex justify-center items-center flex-1 mb-10">
            <Icon icon="arrow-left" className="w-10" />
            {{ date }}
            <Icon icon="arrow-right" className="w-10" />
        </nav> -->

        <MatchCard
            startsAt="13:00"
            :teams="[{initial: 'cat', flag: '/assets/bandeiras/cat.png'},{initial: 'equ', flag: '/assets/bandeiras/equ.png'}]"
        />
            
    </section>
</div>
</template>

<script lang="ts">
export default {
  data: () => ({
    username: 'Neto',
    date: '20 de Novembro',
  }),

}
</script>

<style scoped></style>
