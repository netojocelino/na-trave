<script setup lang="ts">
import Header from '../components/Header.vue'
import VInput from '../components/Input.vue'
import Icon from '../components/Icon.vue'
</script>

<template>
  <div>
    <Header
        imageSource="/assets/logo/logo-fundo-branco.svg"
        title="Na Trave"
        class="container flex justify-center max-w-5xl p-4 border-b border-red-300"
    />

    <main className="p-4">
        <nav className="flex space-x-4 items-center">
            <Icon
                @click.prevent="$router.push('/')"
                icon="back"
                className="h-6 cursor-pointer"
                />
            <h2 className="text-xl font-bold">Entre na sua conta</h2>
        </nav>

        <form className="space-y-6 space-x-2">

            <v-input
                label="Seu email"
                name="email"
                placeholder="Digite seu email"
                type="email"
             />

            <v-input
                label="Sua senha"
                name="password"
                placeholder="Digite sua senha"
                type="password"
             />


            <button
                className="w-full md:w-2/5 text-center text-white bg-red-500 text-xl px-6 py-3 rounded-xl"
                @click.prevent="() => 'Logando'"
            >Entrar</button>

            <button
                className="w-full md:w-2/5 text-center text-white bg-red-500 text-xl px-6 py-3 rounded-xl"
                @click.prevent="$router.push('/signup')"
            >Criar conta</button>

        </form>
    </main>
  </div>
</template>

<script lang="ts">
/**
 * @TODO fix header for desktop
 */
export default {
}
</script>

<style scoped></style>
