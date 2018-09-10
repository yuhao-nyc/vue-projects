<template>
  <div style="background-color: blue; height: 20px; width: 200px">
    <div :style="{width: progress + '0%'}" style="background-color: yellow">progress</div>
  </div>
</template>
<script>
export default {
  props: {
    progress: 0
  }
};
</script>