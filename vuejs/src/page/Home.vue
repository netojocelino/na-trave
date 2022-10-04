<script setup lang="ts">
import CallToAction from '../components/CallToAction.vue'
import Header from '../components/Header.vue'
</script>

<template>
<div className="h-screen bg-red-700 text-white flex">
    <Header
        imageSource="/assets/logo/logo-fundo-vinho.svg"
        title="Na Trave"
     />
    <div className="container p-6 flex-1 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

        <div className="md:flex-1 flex justify-center">
            <img
                src="/assets/imagem/img.png"
                alt="Na Trave na Copa do Mundo do Catar 2022"
                title="Na Trave na Copa do Mundo do Catar 2022"
                className="w-[50vw] md:w-[30vw] max-w-md"
            />
        </div>

        <CallToAction
            title="Dê o seu palpite na Copa do Mundo do Catar 2022!"
        >
            <template #default>
                <button className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">Criar minha conta</button>
                <button className="text-white border border-white text-xl px-8 py-4 rounded-xl">Criar minha conta</button>
            </template>
            
        </CallToAction>

        
    </div>
</div>


</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>
