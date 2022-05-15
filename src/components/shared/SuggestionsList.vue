<script setup>
import { useMoviesStore } from "../../stores/useMoviesStore";
import { storeToRefs } from "pinia";

defineProps({
  suggestions: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const moviesStore = useMoviesStore();
const { setSelectedMovies } = moviesStore;

</script>

<template>
  <ul
      data-testid="results-list"
      class="border border-primary rounded-md w-96 text-lg bg-white"
    >

    <div v-if="loading" class="flex justify-center items-center">
      <div :style="{ borderTopColor: 'transparent' }"
        class="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin">
      </div>
    </div>
    
    <li v-for="item in suggestions" :key="item.id"
      class="p-1 rounded-md hover:bg-gray-100"
      @mousedown="setSelectedMovies(item)"
    >
      <span>{{ item.title || item.name }}</span>
    </li>

    <li v-if="!loading && suggestions.length === 0" 
      class="p-1 rounded-md hover:bg-gray-100">
      <span class="">No results found</span>
    </li>

  </ul>
</template>