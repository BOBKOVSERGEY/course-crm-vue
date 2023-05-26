<template>
  <div class="dropdown-select">
    <div class="dropdown-select__wrapper">
      <div class="dropdown-select__input-wrapper">
        <input class="dropdown-select__input" type="text" placeholder="Плейсхолдер">
        <div class="dropdown-select__arrow">
          <svg class="icon icon_type_chevron-down">
            <use xlink:href="@/assets/i/sprite/sprite.svg#chevron-down"></use>
          </svg>
        </div>
      </div>
      <div ref="element"
          class="dropdown-select__list-wrapper">
        <div class="dropdown-select__list">
          <div
              v-for="comment in comments" :key="comment.id"
              class="dropdown-select__list-item">
            #{{comment.id}} {{comment.name}}
          </div>
          <div ref="loadYet"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios";

const comments = ref([]);
const page = ref(1);
const lastPage = ref(1);
const loadYet = ref();
const element = ref();

const fetchComments = async () => {
  let res = await axios.get(`https://jsonplaceholder.typicode.com/comments?_limit=5&_page=${ page.value }`)
  comments.value.push(...res.data)
}
const handleScrolledToBottom =  (isVisible) => {
  if (!isVisible) { return }
  // use it have last page
  //if (page.value >= lastPage.value) { return }
  page.value++
  fetchComments()
}
onMounted(() => {
  fetchComments();
  let options = {
    root: element.value,
    rootMargin: "1px",
    threshold: 1.0,
  };
  const callback = (entries, observer)=> {
    handleScrolledToBottom(entries[0].isIntersecting)
  }
  let observer = new IntersectionObserver(callback, options);

  observer.observe(loadYet.value);
})


</script>