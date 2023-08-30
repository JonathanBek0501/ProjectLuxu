<template>
    <div v-if="notificationOpen" class="hidden lg:flex items-center justify-between bg-brand-pink/10 rounded-lg p-3 mx-6">
        <span class="text-sm text-brand-pink font-medium">
            Error message
        </span>

        <div class="flex items-center gap-4">
            <button @click="closeNotification" class="text-sm text-brand-pink font-bold">
                Cancel
            </button>

            <ButtonPrimary @button-clicked="closeNotification" custom-class="w-full sm:w-auto sm:text-sm p-4 sm:px-3 sm:pt-2 sm:pb-1.5" title="Confirm" />

            <button @click="closeNotification" class="text-sm text-brand-pink font-bold">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_207_930)">
                        <path d="M16.3332 5.34163L15.1582 4.16663L10.4998 8.82496L5.8415 4.16663L4.6665 5.34163L9.32484 9.99996L4.6665 14.6583L5.8415 15.8333L10.4998 11.175L15.1582 15.8333L16.3332 14.6583L11.6748 9.99996L16.3332 5.34163Z" fill="#EF3054"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_207_930">
                            <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
const notificationOpen = ref(true)

const closeNotification = () => {
    notificationOpen.value = !notificationOpen.value
}
</script>