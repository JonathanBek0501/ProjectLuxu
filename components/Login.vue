<template>
    <div class="h-full lg:pt-7 px-4 lg:px-6">
        <h2 class="font-bold text-xl/none text-brand-gray-50">Log in</h2>
        <form action="#" class="flex flex-col h-full lg:h-auto mt-4 lg:mt-7">
          <!-- Email -->
          <input type="text" class="tetriary w-full" placeholder="Username or Email address">
          <input type="password" class="tetriary w-full mt-2" placeholder="Password">
          <!-- input-text -->
          <div>
          <div class="relative flex flex-col md:flex-row justify-between gap-2 mt-4 md:mt-2">
              <NuxtLink to="/" class="text-sm input-text hover:text-brand-pink">Forgot your password?</NuxtLink>
              <NuxtLink to="/" class="text-sm input-text hover:text-brand-pink">Forgot your account name?</NuxtLink>
          </div>
          </div>
          <div class="grid sm:grid-cols-2 gap-2 mt-auto lg:mt-4 mb-8 lg:mb-0">
            <ButtonSecondary @button-clicked="createAcc" title="Create Account"/>
            <ButtonPrimary @button-clicked="toggleLogged" title="Login" />
          </div>
        </form>
    </div>
</template>

<script setup>
const props = defineProps({
  logged: Boolean,
  newUser: Boolean,
});

const emit = defineEmits();

const toggleLogged = () => {
  emit('toggleLogged');
};
const createAcc = () => {
  emit('createAcc');
};
</script>