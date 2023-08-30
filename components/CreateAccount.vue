<template>
    <div class="px-4 sm:px-6 pb-5">
        <h2 class="font-bold text-xl/none text-brand-gray-50 pb-4 lg:py-8">Creating account</h2>

        <form class="space-y-2">
            <label for="userName" class="sr-only"></label>
            <input type="text" name="" id="userName" class="tetriary w-full" placeholder="Username">

            <label for="password" class="sr-only"></label>
            <input type="password" name="" id="password" class="tetriary w-full" placeholder="Password">

            <label for="passwordRepeat" class="sr-only"></label>
            <input type="password" name="" id="passwordRepeat" class="tetriary w-full" placeholder="Repeat Password">

            <label for="email" class="sr-only"></label>
            <input type="email" name="" id="email" class="tetriary w-full" placeholder="E-mail address">

            <label for="realName" class="sr-only"></label>
            <input type="text" name="" id="realName" class="tetriary w-full" placeholder="Real Name">

            <label for="deletionCode" class="sr-only"></label>
            <input type="text" name="" id="deletionCode" class="tetriary w-full" placeholder="Character deletion code">

            <div class="relative flex items-center gap-6 justify-between py-1">
                <p class="text-sm font-bold py">
                    By registering, you agree to the
                    <a href="" class="text-brand-pink">
                        Terms & Conditions
                    </a>
                    and
                    <a href="" class="text-brand-pink">
                        Game Rules
                    </a>
                    .
                </p>

                <div class="group cursor-pointer">
                    <svg width="24" height="24" class="text-[#44444C] hover:text-brand-gray-50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 9H11V7H13M13 17H11V11H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="currentColor"/>
                    </svg>

                    <div class="hidden group-hover:block absolute max-w-md bottom-full right-0 rounded bg-[#0A0A0F] backdrop-blur-sm p-3">
                        <p class="text-gray-50">
                            Furthermore, you hereby acknowledge to have used secure login details to protect your account from hackers/scammers. We are doing our best to protect all registered accounts, however, using leaked data may compromise all kinds of protection a system may offer
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-2 py-3">
                <input type="checkbox" id="checkbox" class="cursor-pointer appearance-none w-4 h-4 rounded border hover:border-brand-pink border-[#47474F] bg-brand-black-socials checked:bg-checked bg-center checked:border-none">
                <label for="checkbox" class="cursor-pointer text-sm font-semibold text-brand-gray-50">
                    I want to receive an email newsletter
                </label>
            </div>

            <div class="grid sm:grid-cols-2 gap-2 pt-2">
                <ButtonSecondary @button-clicked="createAcc" title="Back to Login" custom-class="p-4 lg:py-2.5 lg:px-3"/>
                <ButtonPrimary title="Confirm" />
            </div>
        </form>
    </div>
</template>

<script setup>
const emit = defineEmits();

const createAcc = () => {
  emit('createAcc');
};
</script>