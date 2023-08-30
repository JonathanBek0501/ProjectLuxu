<template>
    <div class="lg:border-y-1.5 lg:border-r-1.5 border-brand-black-100 rounded-r-lg space-y-1.5 p-4 lg:p-6">
        <div v-for="(item, index) in items" :key="index" :class="{'hidden': shouldHideItem(item)}" class="bg-brand-black-50 rounded overflow-hidden">
            <div @click="toggleAccordion(item)" class="cursor-pointer flex items-center gap-4">
                <button
                type="button"
                :class="item.expanded || item.expandedFull ? 'text-white bg-pink' : ''"
                class="text-brand-gray-200 hover:text-white bg-100 hover:bg-pink w-13 aspect-square flex shrink-0 items-center justify-center"
                >
                <IconNewspaper />
                </button>
                <h3> Patchnotes 3.6.5 <span v-if="item.expanded">[Maintenance 10.08.2023]</span> </h3>
                <p class="whitespace-nowrap ml-auto pr-4">
                2023-08-09 <span class="hidden lg:inline-block">10:18:58</span>
                </p>
            </div>
            <div
                :class="{
                'max-h-36': item.expanded,
                'max-h-[434px] overflow-y-auto transition-none': item.expandedFull,
                'max-h-0': !item.expanded
                }"
                class="relative overflow-hidden custom-scrollbar-table transition-all ease-in-out lg:pl-9"
            >
                <!-- Content of the accordion -->
                <div class="flex items-end justify-between lg:pl-9 px-4 lg:pr-0 py-5">
                    <div class="space-y-6">
                        <div>
                            <p>
                                Fixes & Changes
                            </p>
                            <ul class="font-medium text-brand-gray-100 list-disc list-inside text-sm">
                                <li>
                                    Removed Reborn system bonuses from all players because now the system is removed.
                                </li>
                                <li>
                                    Removed Nephrite from Water Energy quests.
                                </li>
                                <li>
                                    Added a disconnect after activating Gold Glove, so the bonus will activate on all characters from your account.
                                </li>
                                <li>
                                    Added Riding Manual at Stable boy in exchange of 50x Ancient coins.
                                </li>
                                <li>
                                    Added NPC Koe-Pung in Oasis map.
                                </li>
                                <li>
                                    Chaos can now be attacked from all positions.
                                </li>
                                <li>
                                    Gold Gloves won't work for the following monsters, to prevent AFK botters: Baby Poison Spider, Deadly Poison Spider, Claw Poison Spider, Small Poison Spider, Claw Poison Spider, Desert Outlaw, Scorpion Archer.
                                </li>
                                <li>
                                    Fixed the price of Evil Gem from Biologist Shop. It was 650 Ancient Coins instead of 150.
                                </li>
                                <li>
                                    Fixed teleportation from Dungeon Window(F6 key) at Nephrite's Sanctuary.
                                </li>
                                <li>
                                    Fixed an issue when opening chests, if you had a stack close to reaching 2000 count, it will put the items in the stack and it will not show the correct count in Logs.
                                </li>
                                <li>
                                    Fixed an issue at the Boss Scroll(Legendary) on Fame. Nautilus & Cursed Ghost Pirate are still spawning.
                                </li>
                                <li>
                                    Fixed Riding Manual. You can now use it from Level 5.
                                </li>
                                <li>
                                    Fixed a bug at Customized Chest, it didn't display in the description the bonuses added with reinforcements on costumes & hairstyles.
                                </li>
                                <li>
                                    Fixed the Reset Biolog Bonus mission. You could choose bonuses only for the first mission, the one from Level 104.
                                </li>
                            </ul>
                        </div>
                        <div class="flex justify-center">
                            <img src="/image/news-photo.png" alt="">
                        </div>
                        <div>
                            <p>
                                Fixes & Changes
                            </p>
                            <ul class="font-medium text-brand-gray-100 list-disc list-inside text-sm">
                                <li>
                                    Removed Reborn system bonuses from all players because now the system is removed.
                                </li>
                                <li>
                                    Removed Nephrite from Water Energy quests.
                                </li>
                                <li>
                                    Added a disconnect after activating Gold Glove, so the bonus will activate on all characters from your account.
                                </li>
                                <li>
                                    Added Riding Manual at Stable boy in exchange of 50x Ancient coins.
                                </li>
                                <li>
                                    Added NPC Koe-Pung in Oasis map.
                                </li>
                                <li>
                                    Chaos can now be attacked from all positions.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button
                        v-if="!item.expandedFull"
                        type="button"
                        class="absolute right-0 bottom-0 secondary font-bold rounded py-2 px-3 m-4"
                        @click="toggleFullAccordion(item)"
                        >
                        Read more
                    </button>
                </div>
            </div>
        </div>

        <!-- pagenation -->
        <div v-if="!items.some(item => item.expandedFull)" class="hidden lg:flex items-center space-x-1 pt-1.5">
            <button type="button" class="primary h-9 rounded px-3.5">1</button>
            <button type="button" class="secondary h-9 rounded px-3.5">2</button>
            <button type="button" class="secondary h-9 rounded px-3.5">3</button>
            <button type="button" class="secondary h-9 rounded px-3.5">4</button>
            <button type="button" class="secondary h-9 rounded px-3.5">5</button>
        </div>

        <div v-else class="pt-1.5">
            <button @click="goBack" type="button" class="secondary font-bold rounded py-2 px-3">
                Go back
            </button>
        </div>
    </div>
</template>

<script setup>
const items = ref([
  { expanded: true, expandedFull: false },
  { expanded: false, expandedFull: false },
  { expanded: false, expandedFull: false },
  { expanded: false, expandedFull: false },
  { expanded: false, expandedFull: false },
  { expanded: false, expandedFull: false }
]);


const toggleAccordion = (targetItem) => {
  if (targetItem.expanded && targetItem.expandedFull) {
    // If both expanded and expandedFull are true, do nothing
    return;
  }

  // Collapse all other items except the target item
  items.value.forEach(item => {
    if (item !== targetItem) {
      item.expanded = false;
      item.expandedFull = false;
    }
  });

  // Toggle the expansion state of the target item
  targetItem.expanded = !targetItem.expanded;

  if (!targetItem.expanded) {
    targetItem.expandedFull = false;
  }
};

const toggleFullAccordion = (item) => {
  item.expandedFull = !item.expandedFull;
};

const shouldHideItem = (item) => {
  const isTarget = item.expanded && item.expandedFull;

  return !isTarget && items.value.some(i => i.expanded && i.expandedFull);
};

const goBack = () => {
  const activeItem = items.value.find(item => item.expandedFull);
  if (activeItem) {
    // Store the current scroll position before resetting the state
    const contentElement = document.querySelector('.overflow-y-auto');
    const scrollTop = contentElement.scrollTo(0,0);

    // Reset the expandedFull state
    activeItem.expandedFull = false;

    // After the state is reset, scroll the content to the top if it was scrolled to the bottom
    requestAnimationFrame(() => {
      contentElement.scrollTop = scrollTop > contentElement.scrollHeight - contentElement.clientHeight
        ? 0
        : scrollTop;
    });
  }
};
</script>