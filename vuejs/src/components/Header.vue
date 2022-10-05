<template>
    <header :className="`${concatClasses(classHeader, justify)}`">
        <img
            :alt="title"
            :title="title"
            :src="imageSource"
            :className="`${skinTheme(theme ?? 'main')}`"
            @click.prevent="$router.push('/')"
        />
        <slot name="default"></slot>
    </header>
    <slot name="subheader"></slot>
</template>

<script lang="ts">
type ThemeOptions = 'main' | 'landing'

export default {
    props: {
        justify: {
            type: String,
            required: false,
        },

        classHeader: {
            type: String,
            required: false,
        },

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
            validator(value: any) {
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
        },
    }),

    methods: {
        skinTheme(theme: string = "main") {
            if (!(theme in this.themeOptions)) {
                return this.themeOptions['main']
            }
            
            const localTheme = this.themeOptions[(theme as ThemeOptions)]

            return localTheme
        },

        concatClasses(newClasses: string = '') {
            const entryClasses = "container flex max-w-5xl p-4"
            const obj: Record<string, boolean> = {}

            entryClasses
                .split(' ')
                .map((key) => obj[key] = true)

            newClasses
                .split(' ')
                .map((key: string) => obj[key] = true)

            if (!('justify-between' in obj)) {
                obj['justify-center'] = true
            }

            return Object.keys(obj).join(' ')
        }
    }
}
</script>

<style>

</style>
