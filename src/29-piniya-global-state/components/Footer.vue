<template>
  <footer class="footer">
    <div class="footer__copyright">&copy;2019-2022 Company Name
    </div>
    <div class="footer__items-group">
      <div class="footer__item"><a class="footer__link" href="#">Ссылка</a>
      </div>
      <div class="footer__item"><a class="footer__link" href="#">Техподдержка</a>
      </div>
    </div>
    <div class="footer__item">
      Построено на
      <a class="footer__link" href="#" @click="handleClick">OpenCRM</a>
    </div>
  </footer>
</template>

<script setup>
import { useEventBus } from '@vueuse/core'

const bus = useEventBus('news')


const handleClick = () => {
  bus.emit('1 The Tokyo Olympics has begun')
}
</script>
