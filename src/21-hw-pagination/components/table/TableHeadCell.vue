<template>
    <th class="table__head-cell"
        @click="handleClick"
        :class="{
            'table__head-cell_width_min': minWidth,
            'table__head-cell_actions': type === 'actions'
        }"
    >
        <Icon :type="icon" size="s"
              v-if="type === 'icon'"
        />
        <template v-else-if="type === 'actions'">
            <Button icon="cog" size="xs" transparent/>
            <Button icon="filter" size="xs" transparent/>
        </template>
        <div class="table__head-cell-inner" v-else>
            {{ text }}
            <Icon :type="sortDirIconType" v-if="sortDir"
                  size="xs"
            />
        </div>
    </th>
</template>

<script setup>
import { computed } from 'vue';
import Button from '@/21-hw-pagination/components/Button.vue'
import Icon from "@/21-hw-pagination/components/Icon.vue";
const availableSorting = ['', 'asc', 'desc'];
const emit = defineEmits(['change-sort']);
const props = defineProps({
  type: {
    type: String,
    validator(value) {
      return ['', 'icon', 'actions'].includes(value)
    }
  },
  icon: String,
  text: String,
  minWidth: Boolean,
  sortDir: {
    type: String,
    default: '',
    validator(value) {
      return ['', 'asc', 'desc'].includes(value);
    }
  }
});

const sortDirIconType = computed(() => {
  if(props.sortDir === 'asc'){
    return 'arrow-down';
  }
  else if(props.sortDir === 'desc'){
    return 'arrow-up';
  }
  return '';
})

function handleClick(){
  let currentIndex = availableSorting.indexOf(props.sortDir);
  if(currentIndex === -1) currentIndex = 0;
  currentIndex++;
  if(currentIndex >= availableSorting.length) currentIndex = 0;
  emit('change-sort', availableSorting[currentIndex]);
}

</script>
