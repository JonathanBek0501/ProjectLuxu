<template>
    <button @click="handleButtonClick" type="button" :class="`${customClass} text-brand-gray-200 rounded hover:text-brand-gray-50 bg-100 hover:bg-200 active:bg-black-ho active:text-brand-gray-200 disabled:opacity-20 disabled:pointer-events-none transition-all ease-linear`">
        {{ title }}
    </button>
</template>

<script setup>
defineProps({
    title: String,
    customClass: {
        default: 'font-bold text-base/5 p-4 sm:py-3 sm:px-6',
        type: String
    }
})

const emit = defineEmits();

const handleButtonClick = () => {
  emit('button-clicked');
};
</script>