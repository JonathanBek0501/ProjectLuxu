<template>
    <div class="w-full overflow-hidden">
        <div class="relative h-50 rounded-2xl overflow-hidden">
            <!-- image -->
            <div class="absolute inset-0">
                <img class="hidden sm:block w-full h-full object-cover" src="/image/game.png" alt="">
                <img class="block sm:hidden w-full h-full object-cover" src="/image/game-mobile.png" alt="">
            </div>
            <div class="h-full relative flex flex-col justify-between items-end">
                <div class="flex flex-col justify-end items-end gap-2 pt-4">
                    <div class="flex items-center">
                        <div class="result">
                            <h4 class="result-item px-2">{{ level }}</h4>
                        </div>
                        <div class="game-text">
                            <h5 class="game-text-item px-6">Level</h5>
                        </div>
                    </div>
                    <div v-if="player" class="flex items-center">
                        <div class="result">
                            <h5 class="result-item font-bold italic px-2">{{ playerClass }}</h5>
                        </div>
                        <div class="game-text">
                            <h5 class="game-text-item px-6">Class</h5>
                        </div>
                    </div>
                    <div v-if="!player" class="flex items-center">
                        <div class="result">
                            <h5 class="result-item font-bold italic px-2">{{ points }}</h5>
                        </div>
                        <div class="game-text">
                            <h5 class="game-text-item px-6">Points</h5>
                        </div>
                    </div>
                    <div v-if="!player" class="flex items-center">
                        <div class="result">
                            <h5 class="result-item font-bold italic px-2">{{ win + '/' + lose }}</h5>
                        </div>
                        <div class="game-text">
                            <h5 class="game-text-item px-6">W/L</h5>
                        </div>
                    </div>
                </div>
                <div class="bg-gradient-to-r from-black/10 via-black/80 to-black/80 max-w-[23rem] w-1/2 md:w-full flex justify-between items-center py-1 px-6">
                    <h5 class="shrink-0 best-player">
                        best{{ player ? 'player' : 'guild' }}
                    </h5>
                    <h5 class="hidden sm:block w-full text-right game-text-item text-base leading-6">
                        {{ player ? bestPlayer : bestGuild }}
                    </h5>
                </div>
            </div>
        </div>

        <div class="mt-11 space-y-3">
            <div class="text-center space-y-2">
                <h2 class="font-bold text-xl/none text-brand-gray-50">
                    {{ player ? 'Player' : 'Guild' }} Leaderboard
                </h2>
                <p>
                    Scroll to see more
                </p>
            </div>
            <!-- selects -->
            <div :class="player ? '' : 'invisible'" class="grid grid-cols-2 gap-3">
                <DropdownRaces />
                <DropdownEmpires />
            </div>
            <!-- Table -->
            <div class="relative overflow-x-auto custom-scrollbar-table">
                <table class="w-full whitespace-nowrap min-w-[528px]">
                    <thead>
                        <tr>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5 pl-4">#</th>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5">Empire</th>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5 text-start pl-4">Nickname</th>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5 px-8">Level</th>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5">Guild</th>
                            <th class="font-bold text-xs/tight text-brand-gray-200 pt-4 pb-2.5 pr-4">Playing time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- 1 -->
                        <tr :class="index % 2 !== 0 ? '' : 'bg-brand-black-50'" v-for="(player, index) in players" :key="index" class="font-bold text-sm text-brand-gray-50">
                            <td class="text-center rounded-l-lg py-4 pl-4">
                                {{ player.ranking }}.
                            </td>
                            <td class="text-end py-4">
                                <img class="ml-5" :src="`/image/${player.empire}`" alt="">
                            </td>
                            <td class="py-4 pl-4">
                                {{ player.nickName }}
                            </td>
                            <td class="font-bold text-sm text-center input-text py-4">
                                {{ player.level }}
                            </td>
                            <td class="text-center py-4">
                                {{ player.guild }}
                            </td>
                            <td class="text-center rounded-r-lg py-4 pr-4">
                                {{ player.playingTime }} hrs
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form action="#" class="flex justify-between space-x-2">
                <input type="text" class="tetriary w-full" placeholder="Enter player name or ranking">
                <ButtonSecondary title="Search"/>
            </form>
        </div>
    </div>
</template>

<script setup>
const players = ref([
    {
        ranking: 1,
        empire: 'Kingdom.svg',
        nickName: 'Playernickname',
        level: 94,
        guild: 'BestPVPers',
        playingTime: 74,
    },
    {
        ranking: 2,
        empire: 'Kingdom.svg',
        nickName: 'Playernickname',
        level: 94,
        guild: 'BestPVPers',
        playingTime: 74,
    },
    {
        ranking: 3,
        empire: 'Kingdom.svg',
        nickName: 'Playernickname',
        level: 94,
        guild: 'BestPVPers',
        playingTime: 74,
    },
    {
        ranking: 4,
        empire: 'Kingdom.svg',
        nickName: 'Playernickname',
        level: 94,
        guild: 'BestPVPers',
        playingTime: 74,
    },
])

defineProps({
    player: {
        default: true,
        type: Boolean,
    },
    level: Number,
    playerClass: String,
    points: String,
    win: Number,
    lose: Number,
    bestPlayer: String,
    bestGuild: String,
})
</script>