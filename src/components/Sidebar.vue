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
          <router-link to="/" active-class="sidebar--section--item-link-selected" class="sidebar--section--item sidebar--section--item-link ">
            <HomeIcon />
            Dashboard
          </router-link>
          <router-link to="/events" active-class="sidebar--section--item-link-selected" class="sidebar--section--item sidebar--section--item-link">
            <ListIcon />
            Event trackers
          </router-link>
      </div>
      <div class="sidebar--section">
      </div>
  </div>
</template>