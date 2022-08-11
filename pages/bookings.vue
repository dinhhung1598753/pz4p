<template>
  <v-container>
    <v-app-bar dense color="base">
      <v-toolbar-title class="date-booking"
        ><v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              class="toolbar-text-field"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker> </v-menu
      ></v-toolbar-title>
      <v-toolbar-title class="date-booking">
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker> </v-menu
      ></v-toolbar-title>

      <v-spacer></v-spacer>
      <v-text-field v-model="search" class="search-field"></v-text-field>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <div class="content">
      <v-row>
        <v-col v-for="item in bookings" :key="item.id" cols="4">
          <v-card
            class="booking-card"
            outlined
            cols="md-3"
            :style="{ 'background-color': item.isBooked ? '#eeaeae' : '#fff' }"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="mb-4">BÀN {{ item.id }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ item.isBooked ? item.customer.name : 'Người đặt bàn' }}
                </v-list-item-title>
                <v-list-item-subtitle
                  >Phone:
                  {{
                    item.isBooked ? item.customer.phoneNumber : 'Số điện thoại'
                  }}</v-list-item-subtitle
                >
                <v-list-item-subtitle>Giờ hẹn</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn v-show="!item.isBooked" outlined rounded text> Đặt </v-btn>
              <v-btn v-show="item.isBooked" outlined rounded text> Hủy </v-btn>
              <v-btn v-show="item.isBooked" outlined rounded text>
                Thanh toán
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { getBookings } from '@/models'
export default {
  name: 'BookingPage',
  data: (vm) => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    dateFormatted: vm.formatDate(
      new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10)
    ),
    time: '',
    menu1: false,
    menu2: false,
    search: '',
    bookings: [],
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.bookings = getBookings()
    },
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
}
</script>
<style lang="scss" scoped>
.date-booking {
  padding-top: 10px;
}
.toolbar-text-field {
  > div > div > .v-icon {
    color: #fff !important;
  }
}
::v-deep .v-icon {
  color: #fff !important;
}

::v-deep .v-text-field__slot {
  color: #fff !important;
  width: 90px;
}

.content {
  margin-top: 30px;
}
.content > .booking-card {
  display: inline-block;
  margin: 0 10px 20px 0;
}

.search-field {
  padding-top: 10px;
  width: 0px;
}
</style>
