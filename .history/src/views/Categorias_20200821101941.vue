<template>
  <div class="category">
    <h1>Categorías</h1>
  </div>
</template>
<script>
import useCategories from '../composables/useCategories';
export default {
  name: 'Categorias',
  setup(){
    const {getAll} = useCategories();
    getAll().then(console.log)
  }
}
</script>
