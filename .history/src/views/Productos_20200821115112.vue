<template>
  <div class="product">
    <h1>Productos</h1>
  </div>
</template>

<script>
import useProducts from '../composables/useProducts';
import { ref } from "@vue/composition-api";
export default {
  name: 'Productos',
  setup(){
      const { getAll } = useProducts();

  }
}
</script>
