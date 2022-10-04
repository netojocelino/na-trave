<template>
    <header className="container flex justify-center max-w-5xl p-4">
        <img :alt="title" :title="title" :src="imageSource" :className="`${skinTheme(theme ?? 'main')}`" />
    </header>
</template>

<script lang="ts">
type ThemeOptions = 'main' | 'landing'

export default {
    props: {
        title: {
            type: String,
            required: false,
        },

        imageSource: {
            type: String,
            required: true,
        },

        theme: {
            type: String,
            required: false,
            default: 'main',
            validate(value: any) {
                if (typeof value !== 'string') {
                    return false
                }

                const options = ['main', 'landing']

                return options.includes(value)
                
            }
        }

    },

    data: () => ({
        themeOptions: {
            'main': 'w-32 md:w-40 ',
            'landing': 'max-w-xs',
        }
    }),

    methods: {
        skinTheme(theme: string = "main") {
            if (!(theme in this.themeOptions)) {
                return this.themeOptions['main']
            }
            
            const localTheme = this.themeOptions[(theme as ThemeOptions)]

            return localTheme
        }
    }
}
</script>

<style>

</style>
