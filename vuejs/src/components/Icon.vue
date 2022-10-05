<template>
    <img
        :src="getIcon(icon)"
        alt="icon"
        v-if="getIcon(icon) !== false"
    />
    <span v-else>Ícone não encontrado</span>
</template>

<script lang="ts">
const IconsKey = ['back', 'arrow-left', 'arrow-right', 'profile']
type IconsTypeKey = 'back' | 'arrow-left' | 'arrow-right' | 'profile'

type IconsType = Record<IconsTypeKey, string>

function isIconKey (value: any): boolean {
    return IconsKey.includes(value)
}

const Icons: IconsType = {
    'back': '/assets/icones/back.svg',
    'arrow-left': '/assets/icones/arrow-left.svg',
    'arrow-right': '/assets/icones/arrow-right.svg',
    'profile': '/assets/icones/profile.svg',
}

export default {
    props: {
        icon: {
            type: String,
            required: true,
            validator(value: string) {
                return isIconKey(value)
            }
        }
    },

    methods: {
        getIcon(name: IconsTypeKey) {
            return Icons[name]
        }
    }
}
</script>

<style scoped></style>
