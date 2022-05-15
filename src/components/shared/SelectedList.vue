<script setup>

defineProps({
  data: {
    type: Array,
    default: () => []
  },
  setSelectedItem: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <div>
    <div v-if="data.length > 0" class="ml-4 border border-primary rounded-md w-50 text-lg bg-white p-2">
      <div v-for="item in data"
        :key="item.id" 
        class="flex justify-between ml-6">
        <span class="text-primary">{{ item.title }}</span>
        <button
          @click="setSelectedItem(item)"
          class="text-xs text-red-500 hover:text-red-600 ml-3 mr-3"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>
