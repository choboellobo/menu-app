<template>
  <div class="product">
    <h1>Productos</h1>
  </div>
</template>

<script>
import useProducts from "../composables/useProducts";
import { ref } from "@vue/composition-api";
export default {
  name: "Productos",
  setup() {
    const { getAll } = useProducts();
    const productos = ref([]);
    getAll().then((d) => {
      productos.value = d;
      console.log(d);
    });
  },
};
</script>
