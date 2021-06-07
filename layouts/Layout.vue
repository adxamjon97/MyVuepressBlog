<template>
  <div id="tttt">
    <BaseListLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>
