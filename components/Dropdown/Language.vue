<template>
    <div ref="dropdown" class="lg:relative dropdown lg:max-w-[168px] w-full">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <button :class="isDropdownOpen ? 'text-white' : 'text-brand-gray-100'" type="button" class="tetriary flex items-center w-full gap-3 p-3">
            <img :src="selectedLanguage.flag" :alt="`${selectedLanguage.name} Flag`">
            <span v-if="!small">{{ selectedLanguage.name }}</span>
            <svg v-if="!small" :class="isDropdownOpen ? 'lg:rotate-180' : ''" class="ml-auto transition-all ease-in-out" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.355 6L10 10.9447L4.645 6L3 7.52227L10 14L17 7.52227L15.355 6Z" fill="#666670"/>
            </svg>
        </button>
      </div>
      <div v-if="isDropdownOpen" @click="toggleDropdown" class="fixed lg:static w-full lg:w-auto h-full lg:h-auto left-0 bottom-0 bg-black/40 lg:bg-transparent z-10">
        <div @click.stop class="max-w-[358px] lg:max-w-none w-full absolute z-10 left-4 lg:left-0 top-full -translate-y-full lg:translate-y-0">
          <div class="rounded-lg bg-[#121316] w-full divide-y-1.5 divide-brand-black-100 border border-brand-black-100 lg:mt-1">
            <div v-for="(language, index) in languages" :key="index" @click="changeLanguage(language)" class="text-brand-gray-100 flex items-center justify-center gap-3 cursor-pointer p-4 lg:p-3">
              <img :src="language.flag" :alt="`${language.name} Flag`">
              {{ language.name }}
            </div>
          </div>
  
          <button @click="toggleDropdown" class="block lg:hidden text-brand-gray-100 bg-[#121316] w-full rounded-lg py-2.5 px-3 mt-2 mb-4">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
        selectedLanguage: { code: 'en', name: 'English', flag: '/image/flags/US.svg' },
        languages: [
          { code: 'en', name: 'English', flag: '/image/flags/US.svg' },
          { code: 'de', name: 'Deutsch', flag: '/image/flags/GER.svg' },
          { code: 'tr', name: 'Türkçe', flag: '/image/flags/TR.svg' },
          { code: 'pl', name: 'Polski', flag: '/image/flags/PL.svg' },
          { code: 'ro', name: 'Română', flag: '/image/flags/RO.svg' },
          { code: 'gr', name: 'Ελληνικά', flag: '/image/flags/GR.svg' },
          // Add more language objects here
        ]
      };
    },
    methods: {
        toggleDropdown() {
      if (this.isDropdownOpen) {
        this.closeDropdown();
      } else {
        this.openDropdown();
      }
    },
    openDropdown() {
      this.isDropdownOpen = true;
      // Attach a click event listener to the document
      document.addEventListener("click", this.closeDropdownOnClickOutside);
    },
    closeDropdown() {
      this.isDropdownOpen = false;
      // Remove the click event listener from the document
      document.removeEventListener("click", this.closeDropdownOnClickOutside);
    },
    closeDropdownOnClickOutside(event) {
      // Check if the clicked element is outside the dropdown
      const dropdown = this.$refs.dropdown;
      if (!dropdown.contains(event.target)) {
        this.closeDropdown();
      }
    },
      changeLanguage(language) {
        this.selectedLanguage = language;
        this.isDropdownOpen = false;
        // Implement further logic for changing the language
      }
    },
    props: {
      small: {
        default: false,
        type: Boolean
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  