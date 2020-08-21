<template>
  <div class="category">
    <h1>{{categorias.length}}</h1>
  </div>
</template>
<script>
import useCategories from '../composables/useCategories';
import { ref } from '@vue/composition-api'
export default {
  name: 'Categorias',
   setup(){
    const { getAll } = useCategories();
    const categorias = ref([])
    getAll().then( d => categorias.value = d)
    return { categorias }
  }
}
</script>
