<template>
  <v-app dark>
    <v-app-bar fixed app class="app-bar" color="base">
      <div class="app-title">
        <nuxt-link to="/">{{ title }}</nuxt-link>
      </div>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="app-menu"
        ><v-list class="menu-list text-light" color="base">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            class="text-light"
          >
            <v-list-item-action>
              <v-icon class="text-light">{{ item.icon }}</v-icon>
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
          icon: 'mdi-account-injury',
          title: 'Staffs',
          to: '/staffs',
        },
        {
          icon: 'mdi-account-group',
          title: 'Customers',
          to: '/customers',
        },
        {
          icon: 'mdi-calendar-edit',
          title: 'Booking',
          to: '/bookings',
        },
        {
          icon: 'mdi-book-open-blank-variant',
          title: 'Menus',
          to: '/menus',
        },
        {
          icon: 'mdi-file-document-outline',
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
<style lang="scss" scoped>
.app-title > a {
  text-decoration: none;
  font-size: 30px;
  color: #fff;
}
.app-menu {
  float: left;
  height: 100%;
  width: 20%;
  background: #246241;
  padding: unset;
  & .text-light {
    color: $text-light !important;
  }
}
.app-menu > .menu-list {
  padding: 0;
}

.app-main {
  float: left;
  width: 80%;
}
</style>
