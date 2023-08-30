<template>
    <div :class="{'border-b border-brand-black-100 px-6 pb-6': heading}">
        <slot name="heading"/>

        <div class="space-y-4">
            <div>
                <div class="flex items-center gap-6">
                    <div class="w-full bg-download-gradient flex items-center justify-between text-sm font-semibold rounded p-3">
                        <div class="flex items-center gap-1.5">
                            <img src="/image/google-drive.svg" alt="">
                            <span class="text-brand-gray-200">
                                Google Drive
                            </span>
                        </div>
    
                        <span class="text-brand-gray-50">
                            3.99 GB
                        </span>
                    </div>

                    <ButtonPrimary custom-class="shrink-0 text-xs w-32 px-3 py-2" title="Download" />
                </div>
                <div class="flex items-center gap-6">
                    <div class="w-full flex items-center justify-between text-sm font-semibold rounded p-3">
                        <div class="flex items-center gap-1.5">
                            <img src="/image/mega.svg" alt="">
                            <span class="text-brand-gray-200">
                                Mega
                            </span>
                        </div>
    
                        <span class="text-brand-gray-50">
                            3.99 GB
                        </span>
                    </div>
    
                    <ButtonPrimary custom-class="shrink-0 text-xs w-32 px-3 py-2" title="Download" />
                </div>
                <div class="flex items-center gap-6">
                    <div class="w-full bg-download-gradient flex items-center justify-between text-sm font-semibold rounded p-3">
                        <div class="flex items-center gap-1.5">
                            <img src="/image/mediafire.svg" alt="">
                            <span class="text-brand-gray-200">
                                Mediafire
                            </span>
                        </div>
    
                        <span class="text-brand-gray-50">
                            3.99 GB
                        </span>
                    </div>
    
                    <ButtonPrimary custom-class="shrink-0 text-xs w-32 px-3 py-2" title="Download" />
                </div>
            </div>

            <p class="text-sm font-bold">
                <span class="text-brand-pink">
                    WinRar
                </span>

                is recommended while installing the game
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    heading: {
        default: false,
        type: Boolean
    }
})
</script>