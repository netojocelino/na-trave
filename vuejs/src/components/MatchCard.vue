<template>
    <div className="rounded-xl border border-gray-300 p-4 text-center">
        <span className="text-sm md:text-base text-gray-700 font-bold">13:00</span>

        <div className="flex space-x-5 justify-center items-center">

            <span className="uppercase">{{ teams[0].initial }}</span>
            <img :src="teams[0].flag" :alt="`Bandeira de ${teams[0].initial}`">


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

            <span className="uppercase">{{teams[1].initial}}</span>
            <img :src="teams[1].flag" :alt="`Bandeira de ${teams[1].initial}`">
        </div>
    </div>  
</template>

<script lang="ts">

type Teams = {
    initial: String
    flag: String
}[]

function TypeGuardTeams(teams: any): teams is Teams {
    if (!Array.isArray(teams)) {
        return false
    }
    if (teams.length !== 2 ) {
        return false
    }
    if (typeof teams[0].initial !== 'string' || typeof teams[1].initial !== 'string') {
        return false
    }
    if (typeof teams[0].flag !== 'string' || typeof teams[1].flag !== 'string') {
        return false
    }


    return true
}

export default {
    props: {
        startsAt: {
            type: String,
            required: true,
        },
        teams: {
            type: Array,
            required: true,
            validator(value) {
                if (!TypeGuardTeams(value)) {
                    return false
                }

                return true

            }
        },
    },
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
