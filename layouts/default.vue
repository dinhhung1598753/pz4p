<template>
  <v-app dark>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="app-menu"
        ><v-list class="menu-list">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
      <div class="app-main">
        <Nuxt />
      </div>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Staffs',
          to: '/staffs',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Customers',
          to: '/customers',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Booking',
          to: '/bookings',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Menus',
          to: '/menus',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Bills',
          to: '/bills',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Pizza 4P's",
    }
  },
}
</script>
<style scoped>
.app-menu {
  float: left;
  height: 100%;
  width: 20%;
  background: #333;
  padding: unset;
}
.app-menu > .menu-list {
  padding: 0;
}

.app-main {
  float: left;
  width: 80%;
}
</style>
