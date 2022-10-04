<script setup lang="ts">
import CallToAction from '../components/CallToAction.vue'
import Header from '../components/Header.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
<div className="h-screen bg-red-700 text-white flex p-6 flex-col items-center space-y-6">
    <Header
        imageSource="/assets/logo/logo-fundo-vinho.svg"
        title="Na Trave"
     />
    <div className="container max-w-5xl flex-1 p-4 flex flex-col items-center md:flex-row space-y-6 md:space-y-0 md:space-x-6">

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
                <RouterLink to="/signup" className="text-red-700 bg-white text-xl px-8 py-4 rounded-xl">Criar minha conta</RouterLink>
                <RouterLink to="/signin" className="text-white border border-white text-xl px-8 py-4 rounded-xl">Fazer login</RouterLink>
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
