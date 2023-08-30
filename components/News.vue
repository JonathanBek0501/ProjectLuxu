<template>
    <div>
        <div class="grid grid-cols-2 sm:flex sm:justify-end flex-wrap items-center font-bold text-sm text-brand-gray-100 gap-y-6 gap-x-4 sm:gap-2 py-4 px-4 lg:pr-0 lg:pl-6">
            <h2 class="col-span-2 order-2 sm:order-none w-full sm:w-auto font-bold text-xl/none text-brand-gray-50 mr-auto">News</h2>
            <!-- language -->
            <DropdownLanguage class="hidden lg:block" />
            <!-- 32,000 Played today -->
            <div class="flex items-center bg-brand-black-50 rounded gap-2 px-2.5 py-3 sm:p-3">
                <svg class="shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5C11 5.79565 10.6839 6.55871 10.1213 7.12132C9.55871 7.68393 8.79565 8 8 8C7.20435 8 6.44129 7.68393 5.87868 7.12132C5.31607 6.55871 5 5.79565 5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2ZM8 9.5C11.315 9.5 14 10.8425 14 12.5V14H2V12.5C2 10.8425 4.685 9.5 8 9.5Z" fill="url(#paint0_linear_183_5481)"/>
                    <defs>
                        <linearGradient id="paint0_linear_183_5481" x1="8" y1="2" x2="8" y2="14" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#EF3054"/>
                            <stop offset="1" stop-color="#EF3054" stop-opacity="0.64"/>
                        </linearGradient>
                    </defs>
                </svg>
                <span class="whitespace-nowrap">32,000 Played today</span>
            </div>
            <!-- 6,000 Online now -->
            <div class="flex items-center bg-brand-black-50 rounded gap-2 px-2.5 py-3 sm:p-3">
                <svg class="animate-pulse" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="4" cy="4" r="4" fill="#0EE98D"/>
                </svg>
                <span>6,000 Online now</span>
            </div>
            <!-- Download Client -->
            <ButtonPrimary @button-clicked="showDownloadClient" class="hidden lg:block" title="Download Client" />
        </div>

        <NewsAccordion />
    </div>
</template>

<script setup>
    const emit = defineEmits();

    const showDownloadClient = () => {
    emit('showDownloadClient');
    };
</script>