<script setup>
    import HomeIcon from 'vue-ionicons/dist/ios-home.vue'
    import ListIcon from 'vue-ionicons/dist/ios-list.vue'
</script>
<template>
  <div class="sidebar">
      <div class="sidebar--section sidebar--section-header">
          <div class="sidebar--section--item sidebar--section--item-title">
            Events7
          </div>
      </div>
      <div class="sidebar--section">
          <div class="sidebar--section--item sidebar--section--item-link sidebar--section--item-link-selected">
            <HomeIcon />
            Dashboard
          </div>
          <div class="sidebar--section--item sidebar--section--item-link">
            <ListIcon />
            Event trackers
          </div>
      </div>
      <div class="sidebar--section">
      </div>
  </div>
</template>