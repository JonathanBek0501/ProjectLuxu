<template>
    <div class="relative h-full px-4 sm:px-6">
        <div class="flex items-center justify-between gap-6 pb-4 lg:py-5">
            <h2 class="font-bold text-lg/6 sm:text-xl/none text-brand-gray-50">
                Hello <span class="text-brand-pink">#nickname#</span>, this is your User Panel
            </h2>
            <ButtonSecondary @button-clicked="toggleLogged" title="Log Out" custom-class="whitespace-nowrap py-2 px-3"/>
        </div>

        <!-- tab panel -->
        <div class="flex gap-2">
            <button @click="tab = 1" :class="tab === 1 ? 'border-brand-pink text-brand-gray-50' : 'border-transparent text-brand-gray-100'" class="text-sm font-bold border-b-3 px-3 pb-2 pt-0">
                Account
            </button>
            <button @click="tab = 2" :class="tab === 2 ? 'border-brand-pink text-brand-gray-50' : 'border-transparent text-brand-gray-100'" class="text-sm font-bold border-b-3 px-3 pb-2 pt-0">
                Redeem code
            </button>
            <button @click="tab = 3" :class="tab === 3 ? 'border-brand-pink text-brand-gray-50' : 'border-transparent text-brand-gray-100'" class="text-sm font-bold border-b-3 px-3 pb-2 pt-0">
                Support
            </button>
            <button @click="tab = 4" :class="tab === 4 ? 'border-brand-pink text-brand-gray-50' : 'border-transparent text-brand-gray-100'" class="hidden sm:block text-sm font-bold border-b-3 px-3 pb-2 pt-0">
                Download
            </button>
        </div>

        <div class="pt-5">
            <!-- Account -->
            <div v-if="tab === 1">
                <div v-if="subTab === 0" class="pb-10">
                    <div class="grid sm:grid-cols-[1fr_128px] items-center gap-x-6">
                        <div class="w-full bg-download-gradient flex items-center justify-between text-sm font-semibold rounded p-3">
                            <span class="text-brand-gray-200">
                                Google Drive
                            </span>
        
                            <span class="text-brand-gray-50">
                                SkeletonWarrior
                            </span>
                        </div>

                        <button @click="subTab = 1" type="button" class="hidden sm:block text-xs secondary rounded px-3 py-2">
                            Change username
                        </button>

                        <div class="w-full flex items-center justify-between text-sm font-semibold rounded p-3">
                            <span class="text-brand-gray-200">
                                Password
                            </span>

                            <span class="text-brand-gray-50">
                                d************21
                            </span>
                        </div>

                        <button @click="subTab = 2" type="button" class="hidden sm:block text-xs secondary rounded px-3 py-2">
                            Reset password
                        </button>

                        <div class="w-full bg-download-gradient flex items-center justify-between text-sm font-semibold rounded p-3">
                            <span class="text-brand-gray-200">
                                Real name
                            </span>

                            <span class="text-brand-gray-50">
                                Antony Skeleton
                            </span>
                        </div>

                        <button type="button" class="hidden sm:block invisible text-xs secondary rounded px-3 py-2">
                        </button>

                        <div class="w-full flex items-center justify-between text-sm font-semibold rounded p-3">
                            <span class="text-brand-gray-200">
                                Email address
                            </span>
        
                            <span class="text-brand-gray-50">
                                SWarrior@gmail.com
                            </span>
                        </div>

                        <button @click="subTab = 3" type="button" class="hidden sm:block text-xs secondary rounded px-3 py-2">
                            Change email
                        </button>

                        <div class="w-full bg-download-gradient flex items-center justify-between text-sm font-semibold rounded p-3">
                            <div class="flex items-center gap-1.5">
                                <img src="/image/coin.svg" alt="">
                                <span class="text-brand-gray-200">
                                    Coins
                                </span>
                            </div>
        
                            <span class="text-brand-gray-50">
                                40,205
                            </span>
                        </div>

                        <button type="button" class="hidden sm:block text-xs secondary rounded px-3 py-2">
                            Buy coins
                        </button>

                        <div class="w-full flex items-center justify-between text-sm font-semibold rounded p-3">
                            <div class="flex items-center gap-1.5">
                                <img src="/image/vote.svg" alt="">
                                <span class="text-brand-gray-200">
                                    Vote marks
                                </span>
                            </div>
        
                            <span class="text-brand-gray-50">
                                50
                            </span>
                        </div>

                        <button type="button" class="hidden sm:block invisible text-xs secondary rounded px-3 py-2">
                        </button>
                    </div>

                    <!-- Buttons -->
                    <div class="flex flex-col sm:flex-row gap-2 w-full mt-4">
                        <button @click="subTab = 1" type="button" class="block sm:hidden w-full text-xs secondary rounded px-3 py-2">
                            Change username
                        </button>
                        <button @click="subTab = 2" type="button" class="block sm:hidden w-full text-xs secondary rounded px-3 py-2">
                            Reset password
                        </button>
                        <button @click="subTab = 3" type="button" class="block sm:hidden w-full text-xs secondary rounded px-3 py-2">
                            Change email
                        </button>
                        <button type="button" class="block sm:hidden w-full text-xs secondary rounded px-3 py-2">
                            Buy coins
                        </button>

                        <button type="button" class="text-xs secondary rounded h-fit px-3 py-2">
                            Unstuck character
                        </button>
                        <button type="button" class="text-xs secondary rounded h-fit px-3 py-2">
                            Storekeeper password
                        </button>
                    </div>
                </div>

                <!-- SubTabs -->
                <div v-if="tab === 1 && subTab === 1">
                    <label for="deletionCode" class="sr-only"></label>
                    <input type="text" name="" id="deletionCode" class="tetriary w-full" placeholder="Character deletion code">

                    <div class="absolute bottom-0 left-0 lg:static w-full px-4 lg:px-0 grid sm:grid-cols-2 gap-2 pt-2">
                        <button @click="subTab = 0" type="button" class="secondary leading-5 rounded p-4 sm:p-3">Back to user panel</button>
                        <ButtonPrimary title="Confirm change" />
                    </div>
                </div>

                <div v-if="tab === 1 && subTab === 2" class="space-y-2">
                    <label for="oldPassword" class="sr-only"></label>
                    <input type="password" name="" id="oldPassword" class="tetriary w-full" placeholder="Enter old password">
                    <label for="newPassword" class="sr-only"></label>
                    <input type="password" name="" id="newPassword" class="tetriary w-full" placeholder="Enter new password">
                    <label for="repeatNewPassword" class="sr-only"></label>
                    <input type="password" name="" id="repeatNewPassword" class="tetriary w-full" placeholder="Repeat new password">

                    <div class="absolute bottom-0 left-0 lg:static w-full px-4 lg:px-0 grid sm:grid-cols-2 gap-2 pt-2">
                        <button @click="subTab = 0" type="button" class="secondary leading-5 rounded p-4 sm:p-3">Back to user panel</button>
                        <ButtonPrimary title="Confirm change" />
                    </div>
                </div>

                <div v-if="tab === 1 && subTab === 3" class="space-y-2">
                    <label for="newEmail" class="sr-only"></label>
                    <input type="email" name="" id="newEmail" class="tetriary w-full" placeholder="Enter new email">
                    <label for="repeatNewEmail" class="sr-only"></label>
                    <input type="email" name="" id="repeatNewEmail" class="tetriary w-full" placeholder="Repeat new email">

                    <div class="absolute bottom-0 left-0 lg:static w-full px-4 lg:px-0 grid sm:grid-cols-2 gap-2 pt-2">
                        <button @click="subTab = 0" type="button" class="secondary rounded py-2.5 px-3">Back to user panel</button>
                        <ButtonPrimary title="Confirm change" />
                    </div>
                </div>
            </div>

            <!-- Redeem code -->
            <div v-if="tab === 2" class="space-y-4">
                <p class="text-base">
                    <span class="text-brand-gray-50">
                        Enter a reward code below
                    </span>
                    and you can win R Coins, Dragon Marks or items. Redeem codes can be obtained from events organized by our team.
                    <br>
                    <br>
                    <span class="text-brand-gray-50">
                        A code is only valid once.
                    </span>
                </p>

                <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                    <label for="enterCode" class="sr-only"></label>
                    <input type="text" name="" id="enterCode" class="tetriary w-full text-base" placeholder="Enter code">

                    <button type="button" class="shrink-0 text-base secondary rounded w-full sm:w-32 px-3 py-4 sm:py-2">
                        Redeem
                    </button>
                </div>
            </div>

            <!-- Support -->
            <div v-if="tab === 3">
                <div v-if="!newTicked">
                    <table class="text-sm w-full">
                        <thead>
                            <tr class="font-bold text-brand-gray-100">
                                <td class="w-full px-3">
                                    Issue
                                </td>
                                <td class="">
                                    Date
                                </td>
                                <td class="">
                                    Status
                                </td>
                            </tr>
                        </thead>
    
                        <tbody class="font-semibold">
                            <tr class="bg-download-gradient">
                                <td class="text-brand-gray-100 rounded-l p-3">
                                    Name of the issue here the problem is described
                                </td>
    
                                <td class="text-brand-gray-50 pr-3">
                                    28.09.2023
                                </td>
    
                                <td class="text-brand-gray-50 pr-3">
                                    Active
                                </td>
                            </tr>
                            <tr>
                                <td class="text-brand-gray-100 rounded-l p-3">
                                    Name of the issue here the problem is described
                                </td>
    
                                <td class="text-brand-gray-50 pr-3">
                                    28.09.2023
                                </td>
    
                                <td class="text-brand-gray-50 pr-3">
                                    Active
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <ButtonPrimary @button-clicked="createNewTicked" custom-class="w-full sm:w-auto sm:text-xs p-4 sm:px-3 sm:pt-2 sm:pb-1.5 mt-4" title="New ticket" />
                </div>

                <form action="" v-if="newTicked">
                    <legend class="font-bold text-xl/none text-brand-gray-50 pb-4 sm:pb-8">
                        New ticket
                    </legend>

                    <div class="flex flex-col gap-2">
                        <div class="grid sm:grid-cols-2 gap-2">
                            <DropdownCategory />
                            <label for="text" class="sr-only"></label>
                            <input type="text" name="" id="text" class="tetriary w-full" placeholder="Enter the text">
                        </div>

                        <label for="subject" class="sr-only"></label>
                        <input type="text" name="" id="subject" class="tetriary w-full" placeholder="Subject">

                        <textarea name="" id="" cols="30" rows="10" class="resize-none tetriary w-full p-4" placeholder="Enter message"></textarea>
                    </div>

                    <div class="flex items-center gap-2.5 rounded sm:border-1.5 border-dashed border-brand-black-100 sm:px-6 sm:py-3 my-4">
                        <button type="button" class="sm:text-xs secondary rounded w-full sm:w-auto p-4 sm:px-3 sm:pt-2 sm:pb-1.5">
                            Upload
                        </button>

                        <span class="hidden sm:block text-sm text-brand-gray-100 font-bold">
                            Or drop file here
                        </span>
                    </div>

                    <div class="grid sm:grid-cols-2 gap-2 pt-2">
                        <button @click="newTicked = false" type="button" class="secondary leading-5 rounded p-4 sm:py-2.5 sm:px-3">Cancel</button>
                        <ButtonPrimary title="Submit" disabled />
                    </div>
                </form>
            </div>

            <!-- Download -->
            <div v-if="tab === 4">
                <Download />
            </div>
        </div>
    </div>
</template>

<script setup>
const tab = ref(1)
const subTab = ref(0)
const newTicked =ref(false)

const props = defineProps({
  logged: Boolean,
});

const emit = defineEmits();

const toggleLogged = () => {
  emit('toggleLogged');
};

const createNewTicked = () => {
  newTicked.value = !newTicked.value;
};
</script>