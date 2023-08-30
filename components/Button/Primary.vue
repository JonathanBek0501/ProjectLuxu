<template>
    <button @click="handleButtonClick" type="button" :class="`${customClass} text-white rounded bg-pink disabled:opacity-20 disabled:pointer-events-none hover:bg-pink-ho active:bg-pink-dark transition-all ease-linear`">
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