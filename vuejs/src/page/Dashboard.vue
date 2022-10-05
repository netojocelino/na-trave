<script setup lang="ts">
import Header from '@/components/Header.vue'
import Icon from '@/components/Icon.vue'
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

            <div className="rounded-xl border border-gray-300 p-4 text-center">
                <span className="text-sm md:text-base text-gray-700 font-bold">13:00</span>

                <div className="flex space-x-5 justify-center items-center">
                    <span className="uppercase">CAT</span>
                    <img src="/assets/bandeiras/cat.png" alt="Bandeira de CAT">


                    <input
                        min="0"
                        max="20"
                        className="self-stretch bg-red-300/[0.15] text-red-700 text-xl w-[55px] p-2"
                        type="number"
                    />
                    <span className="text-red-500 font-bold">&times;</span>
                    <input
                        min="0"
                        max="20"
                        className="self-stretch bg-red-300/[0.15] text-red-700 text-xl w-[55px] p-2"
                        type="number"
                    />

                    <span className="uppercase">EQU</span>
                    <img src="/assets/bandeiras/equ.png" alt="Bandeira de EQU">
                </div>
            </div>
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

<style scoped>
input[type=number],
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: textfield;
  margin: 0;
}
</style>
