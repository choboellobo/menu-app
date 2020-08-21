<template>
  <div class="product">
    <h1>{{productos.length}}</h1>
  </div>
</template>

<script>
import useProducts from "../composables/useProducts";
import { ref } from "@vue/composition-api";
export default {
  name: "Productos",
  setup() {
    const { getAll } = useProducts(id);
    const productos = ref([]);
    getAll().then((d) => {
      productos.value = d;
      console.log(d);
    });
    return {productos}
  },
};
</script>
