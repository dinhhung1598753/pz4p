<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="menus"
      class="elevation-1 app-table"
    >
      <template #top>
        <v-toolbar flat color="base">
          <v-toolbar-title class="text-light">MENUS</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template #activator="{ on, attrs }">
              <v-btn dark class="mb-2" v-bind="attrs" v-on="on">
                New Menu
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
                          v-model="editedItem.name"
                          label="name"
                          :rules="formRules.name"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.category"
                          label="category"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.price"
                          label="price"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field
                          v-model="editedItem.description"
                          label="description"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-file-input
                          v-model="editedItem.image"
                          accept="image/*"
                          label="File input"
                        ></v-file-input>
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
                >Are you sure you want to delete this menu?</v-card-title
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
import { getMenus, insertMenu, updateMenu, deleteMenu } from '@/models'
export default {
  name: 'MenuPage',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'Name',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Category', value: 'category' },
      { text: 'Price', value: 'price' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    menus: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      category: '',
      price: '',
      description: '',
      image: '',
    },
    defaultItem: {
      name: '',
      category: '',
      price: '',
      description: '',
      image: '',
    },
    formRules: {
      name: [(v) => v.length >= 1 || 'Please enter the dish'],
    },
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Menu' : 'Edit Menu'
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
      this.menus = await getMenus()
    },
    editItem(item) {
      this.editedIndex = this.menus.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem(item) {
      this.editedIndex = this.menus.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },
    async deleteItemConfirm() {
      await deleteMenu(this.editedItem.id)
      await this.initialize()
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
        await updateMenu(this.editedItem, this.editedItem.id)
      } else {
        await insertMenu(this.editedItem)
      }
      await this.initialize()
      this.close()
    },
  },
}
</script>
