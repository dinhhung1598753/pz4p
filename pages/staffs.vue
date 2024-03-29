<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="staffs"
      class="elevation-1 app-table"
    >
      <template #top>
        <v-toolbar flat color="base">
          <v-toolbar-title class="text-light">STAFFS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template #activator="{ on, attrs }">
              <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
                New Staff
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-form ref="form">
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.username"
                          label="username"
                          :rules="formRules.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.name"
                          label="name"
                          :rules="formRules.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.phoneNumber"
                          label="phonenumber"
                          :rules="formRules.phone"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.sex"
                          label="sex"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.address"
                          label="address"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.email"
                          label="email"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this staff?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      // eslint-disable-next-line vue/valid-v-slot
      <template #[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template #no-data>
        <v-btn color="primary" @click="initialize"> Reset </v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { getStaffs, insertStaff, updateStaff, deleteStaff } from '@/models'
export default {
  name: 'StaffPage',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'UserName',
        align: 'start',
        sortable: false,
        value: 'username',
      },
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Phonenumber', value: 'phoneNumber' },
      { text: 'Sex', value: 'sex' },
      { text: 'Address', value: 'address' },
      { text: 'Email', value: 'email' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    staffs: [],
    editedIndex: -1,
    editedItem: {
      username: '',
      name: '',
      phoneNumber: '',
      sex: '',
      address: '',
      email: '',
    },
    defaultItem: {
      username: '',
      name: '',
      phoneNumber: '',
      sex: '',
      address: '',
      email: '',
    },
    formRules: {
      name: [(v) => v.length >= 1 || 'This field is required'],
      phone: [((v) => v && v.length === 10) || 'This field is required'],
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Staff' : 'Edit Staff'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },
  async created() {
    await this.initialize()
  },
  methods: {
    async initialize() {
      this.staffs = await getStaffs()
    },
    editItem(item) {
      this.editedIndex = this.staffs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.staffs.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    deleteItemConfirm() {
      deleteStaff(this.editedItem.id)
      this.staffs.splice(this.editedIndex, 1)
      this.closeDelete()
    },
    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },
    async save() {
      if (!this.$refs.form.validate()) return

      if (this.editedIndex > -1) {
        await updateStaff(
          {
            ...this.editedItem,
            password: this.editedItem.password,
            phoneNumber: Number(this.editedItem.phoneNumber),
          },
          this.editedItem.id
        )
      } else {
        this.editedItem.password = 123456
        await insertStaff({
          ...this.editedItem,
          phoneNumber: Number(this.editedItem.phoneNumber),
        })
      }
      await this.initialize()
      this.close()
    },
  },
}
</script>
