<template>
  <div
      ref="dropZoneRef"
      class="user-avatar user-avatar_size_xl">
    <a class="button button_rounded button_no-text button_color_secondary button_size_xs" href="#">
      <svg class="icon icon_type_trash">
        <use xlink:href="@/assets/i/sprite/sprite.svg#trash"></use>
      </svg>
    </a>
    <div class="user-avatar__wrapper">
      <img
          v-if="imgUrl"
          class="user-avatar__image"
          :src="imgUrl" alt="avatar"/>
      <label class="user-avatar__upload-link">
        <input
            ref="inputFile"
            type="file"
            name="avatar_image"/>
        <svg class="icon icon_type_upload">
          <use xlink:href="@/assets/i/sprite/sprite.svg#upload"></use>
        </svg><span>загрузить</span>
      </label>
    </div>
  </div>
  <div v-if="isOverDropZone">
    Отпустите файл для загрузки
  </div>
</template>

<script setup>
import { useDropZone } from '@vueuse/core'
import {ref} from "vue";
import {useEventHanler} from "@/28-vue-use/use/eventHendler";

const imgUrl = ref();
const inputFile = ref();

const dropZoneRef = ref();

function onDrop(files) {
  const file = files[0];

  if(!['image/jpeg', 'image/png'].includes(file.type)) {
    alert('file must be img');
    return;
  }
  imgUrl.value = URL.createObjectURL(file);

  const formData = new FormData();
  formData.append('file', file);

  fetch('/upload-url', {
    method: 'POST',
    body: formData
  })

}

const { isOverDropZone } = useDropZone(dropZoneRef, onDrop)


useEventHanler('change', inputFile, () => {
  onDrop(inputFile.value.files);
})
</script>