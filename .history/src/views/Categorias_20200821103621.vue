<template>
  <div class="category">
    <h1>{{categorias.length}}</h1>
  </div>
</template>
<script>
import useCategories from '../composables/useCategories';
import {reactive} from '@vue/composition-api';
export default {
  name: 'Categorias',
  async setup(){
    const {getAll} = useCategories();
    const categorias = await getAll()
    return { categorias }
  }
}
</script>
