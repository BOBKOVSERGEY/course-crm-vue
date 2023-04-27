<template>
    <div class="utility-container__body">
      <label class="checkbox">
        <input type="checkbox"
               :checked="checked"
               @change="dataChange"
               @click.prevent="dataEdit"
        >
        <div class="checkbox__input">
          <svg class="icon icon_type_checkbox">
            <use xlink:href="@/assets/i/sprite/sprite.svg#checkbox"></use>
          </svg>
        </div>
        <div class="checkbox__label">
          {{ label }}
        </div>
      </label>
    </div>
</template>

<script setup>

const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  },
  label: String,
  trueValue: {
    type: Boolean,
    default: true
  },
  falseValue: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(['change', 'edit']);
const a = {
  nameA: 'lorem',
  nameB: 'loremB'
}

const b = {
  nameB: 'lorem',
  nameBB: 'loremB'
}
function dataEdit() {
  emit("edit", ...getABValues());
}

function dataChange(event) {
  emit("change", event.target.checked ? props.trueValue : props.falseValue);
}
//collapsed.value = !collapsed.value
function getABValues() {
  return [1]
}
</script>