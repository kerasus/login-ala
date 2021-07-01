<template>
  <div>
    <router-view/>
    <profile/>
  </div>

</template>

<script>

import profile from "./components/profile";

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    profile,
  },
};
</script>
