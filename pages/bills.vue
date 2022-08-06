<template>
  <v-container>
    <v-toolbar dark color="base">
      <v-toolbar-title>Bill code</v-toolbar-title>
      <v-text-field
        v-model="searchCode"
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Press bill code"
      ></v-text-field>
      <v-btn> Search </v-btn>
    </v-toolbar>
    <div v-if="bill && bill.code">
      <v-card class="mx-auto my-12" max-width="374">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-card-title>Pizza 4P</v-card-title>

        <v-card-text>
          <div>Code: 123</div>
          <div>Table: A4</div>
          <div>Time: 22:40 06/07/2022</div>
          <div>Staff: Hoai Thu</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>
        <v-data-table
          dense
          :headers="headers"
          :items="bill.data"
          item-key="name"
          class="elevation-1"
          hide-default-footer
          disable-sort
          color="accent"
        ></v-data-table>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'BillPage',
  data: () => ({
    searchCode: '',
    bill: {
      code: '',
      table: '',
      time: '',
      staff: '',
      data: [
        {
          order: '1',
          name: 'pizza',
          count: 2,
          price: 51000,
          total: 102000,
        },
        {
          order: '2',
          name: 'pizza 2',
          count: 2,
          price: 53200,
          total: 102120,
        },
        {
          order: 'Total',
          name: '',
          total: 102120,
        },
      ],
    },

    headers: [
      { text: 'TT', value: 'order' },
      {
        text: 'Name',
        align: 'start',
        value: 'name',
      },
      { text: 'Count', value: 'count' },
      { text: 'Price', value: 'price' },
      { text: 'Total', value: 'total' },
    ],
  }),
}
</script>
<style lang="scss" scoped>
.v-data-table-header {
  background-color: #fff !important;
}
</style>
