<template>
  <div class="category">
    <h1>{{categorias.length}}</h1>
  </div>
</template>
<script>
import useCategories from '../composables/useCategories';
export default {
  name: 'Categorias',
  async setup(){
    const {getAll} = useCategories();
    const categorias = await getAll()
    return { categorias }
  }
}
</script>
