<template>
  <section class="container">
      <section class="menu">
          <menus></menus>
      </section>
      <section class="content-container">
          <todo></todo>
      </section>
  </section>
</template>

<script>
import menus from './menus';
import todo from './todo';
export default {
    components: { // register components
        menus,
        todo
    }
};
</script>

<style lang="less">
 @import '../common/styles/layouts.less';
</style>

