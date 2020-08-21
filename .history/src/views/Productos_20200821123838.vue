<template>
  <div class="products" >
    <div class="product">
      <p>Lorem</p>
    </div>
 
  </div>
</template>

<script>
import useProducts from "../composables/useProducts";
import { ref } from "@vue/composition-api";
export default {
  name: "Productos",
  setup(props, contexto) {
    const category_id = contexto.root.$route.params.category_id
    const { getAll } = useProducts(category_id);
    const productos = ref([]);
    getAll().then((d) => {
      productos.value = d;
      console.log(d);
    });
    return {productos}
  },
};
</script>
