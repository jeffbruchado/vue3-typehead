<script setup>
import TypeheadInput from './TypeheadInput.vue';
import SelectedList from './SelectedList.vue';
import { useMoviesStore } from '../../stores/useMoviesStore';
import { storeToRefs } from 'pinia';

const moviesStore = useMoviesStore();
const { selectedMovies } = storeToRefs(moviesStore);
const { setSelectedMovies } = moviesStore;

</script>

<template>
  <div>
    <div class="flex justify-center items-center mt-14">
      <typehead-input />
    </div>
    <div v-if="selectedMovies.length"
      class="flex justify-center items-center mt-14">
      <selected-list :data="selectedMovies" :setSelectedItem="setSelectedMovies" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>