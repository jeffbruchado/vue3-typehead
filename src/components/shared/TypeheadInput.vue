<script setup>
import { ref, watch } from "vue";
import SuggestionsList from "./SuggestionsList.vue";
import { debounce } from "lodash";
import { useMoviesStore } from "../../stores/useMoviesStore";
import { storeToRefs } from "pinia";

const inputValue = ref('');
const isTyping = ref(false);
const showSuggestions = ref(false);
const suggestionsList = ref([]);

const moviesStore = useMoviesStore();
const { loadingSuggestionsList } = storeToRefs(moviesStore);

watch(inputValue, debounce(() => isTyping.value = false, 250));
watch(isTyping, async (value) => {
  if (!value && inputValue.value) {
    suggestionsList.value = await moviesStore.getMoviesByTitle(inputValue.value);
  }
});
const changeIsTyping = () => isTyping.value = true;

const changeSuggestionsVisibility = (visibility) => {
  showSuggestions.value = visibility;
};

const checkSuggestionsVisibility = () => {
  return (inputValue.value.length > 0 && showSuggestions.value) || loadingSuggestionsList.value;
}

</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <input
      class="text-lg text-primary border-primary border rounded-md w-48 focus:w-96 transition-all focus:outline-none p-1 mb-2"
      placeholder="Search"
      type="text"
      v-model="inputValue"
      @keydown="changeIsTyping()"
      @focus="changeSuggestionsVisibility(true)"
      @blur="changeSuggestionsVisibility(false)"
    />
    <suggestions-list 
      v-if="checkSuggestionsVisibility()" 
      :suggestions="suggestionsList"
      :loading="loadingSuggestionsList"
    />
  </div>
</template>