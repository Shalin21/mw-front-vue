<template>

    <body class="skin-default fixed-layout">
      <div id="main-wrapper">
         <myHeader></myHeader>
         <sideMenu></sideMenu>
        <!-- <router-view></router-view> -->
      </div>
    </body>
</template>

<script>
 import myHeader from '../Components/header.vue';
 import sideMenu from '../Components/menu.vue';


export default {
  name: 'mainBody',
  components: { myHeader, sideMenu },
  data () {
    return {
    }
  }
}

</script>




<style lang="css">
@import '../dist/css/style.min.css';
@import '../dist/css/pages/footable-page.css';
@import '../dist/css/myCustom.css';
</style>
