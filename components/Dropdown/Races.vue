<template>
    <div ref="dropdown" class="relative dropdown w-full">
      <div class="dropdown-trigger" @click="toggleDropdown">
        <button :class="isDropdownOpen ? 'text-white' : 'text-brand-gray-100'" type="button" class="tetriary flex items-center w-full gap-3 p-3">
            <span>{{ selectedRace.name }}</span>
            <svg :class="isDropdownOpen ? 'rotate-180' : ''" class="ml-auto transition-all ease-in-out" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.355 6L10 10.9447L4.645 6L3 7.52227L10 14L17 7.52227L15.355 6Z" fill="#666670"/>
            </svg>
        </button>
      </div>
      <div class="absolute z-10 left-0 top-full rounded-lg bg-[#121316] text-brand-gray-100 w-full divide-y-1.5 divide-brand-black-100 border border-brand-black-100 mt-1" v-if="isDropdownOpen">
        <div v-for="(race, index) in races" :key="index" @click="changeEmpire(race)" class="flex items-center gap-3 cursor-pointer p-3">
          {{ race.name }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isDropdownOpen: false,
        selectedRace: { id: 1, name: 'All Races' },
        races: [
          { id: 1, name: 'All Races' },
          { id: 2, name: 'Race 1' },
          { id: 3, name: 'Race 2' },
          { id: 4, name: 'Race 3' },
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
      changeEmpire(race) {
        this.selectedRace = race;
        this.isDropdownOpen = false;
        // Implement further logic for changing the language
      }
    }
  };
  </script>
  
  <style>
  /* Add your CSS styles here */
  </style>
  