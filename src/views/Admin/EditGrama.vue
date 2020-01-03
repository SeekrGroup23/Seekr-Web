<template>
  <div>
    <v-toolbar flat color="white">
      <v-toolbar-title>Grama Niladhari</v-toolbar-title>
      <v-divider class="mx-2" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
        <v-card>
          <v-card-title>
            <span class="headline">Edit Data</span>
          </v-card-title>

          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.fName"
                    label="First Name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.lName"
                    label="Last Name"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.nicNum"
                    label="NIC Number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    v-model="editedItem.gender"
                    :items="genders"
                    :rules="[v => !!v || 'Gender is required']"
                    label="Gender"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    v-model="editedItem.province"
                    :items="provinces"
                    :rules="[v => !!v || 'Province is required']"
                    label="Province"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-select
                    v-model="editedItem.district"
                    :items="districts"
                    :rules="[v => !!v || 'District is required']"
                    label="District"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.division"
                    label="Grama Niladhari Division"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.divisionNum"
                    label="Division Number"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    v-model="editedItem.regNum"
                    label="Register Number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
            <v-btn color="blue darken-1" flat v-on:click="save(editedItem)"
              >Save</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.fName }}</td>
        <td class="text-xs-left">{{ props.item.lName }}</td>
        <td class="text-xs-left">{{ props.item.province }}</td>
        <td class="text-xs-left">{{ props.item.district }}</td>
        <td class="text-xs-left">{{ props.item.cNumber }}</td>
        <td class="text-xs-left">{{ props.item.regNum }}</td>
        <td class="justify-center layout px-0">
          <v-icon small class="mr-2" @click="editItem(props.item)">
            edit
          </v-icon>
          <v-icon small @click="deleteItem(props.item)">
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    nicNum: "",
    search: "",
    headers: [
      {
        text: "First Name",
        align: "left",
        sortable: false,
        value: "fName"
      },
      { text: "Last Name", value: "lName", align: "left" },
      { text: "Province", value: "province" },
      { text: "District", value: "district" },
      { text: "Contact Number", value: "cNumber" },
      { text: "Register Number", value: "regNum" },
      { text: "Actions", value: "name", sortable: false }
    ],
    desserts: [],
    genders: ["Male", "Female", "Other"],
    provinces: [
      "Western",
      "Southern",
      "Central",
      "Eastern",
      "Nothern",
      "North Western",
      "North Central",
      "Uva",
      "Sabaragamuwa"
    ],
    districts: [
      "Ampara",
      "Anuradhapura",
      "Badulla",
      "Batticaloa",
      "Colombo",
      "Galle",
      "Gampaha",
      "Hambantota",
      "Jaffna",
      "Kalutara",
      "Kandy",
      "Kegalle",
      "Kilinochchi",
      "Kurunegala",
      "Mannar",
      "Matale",
      "Matara",
      "Monaragala",
      "Mullaitivu",
      "Nuwara Eliya",
      "Polonnaruwa",
      "Puttalam",
      "Ratnapura",
      "Trincomalee",
      "Vavuniya"
    ],
    editedIndex: -1,
    editedItem: {
      fName: "",
      lName: "",
      nicNum: "",
      resiAddress: "",
      email: "",
      gender: "",
      cNumber: "",
      province: "",
      district: "",
      division: "",
      divisionNum: "",
      regNum: ""
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem.fName = item.fName;
      this.editedItem.lName = item.lName;
      this.editedItem.gender = item.gender;
      this.editedItem.nicNum = item.nicNum;
      this.editedItem.email = item.email;
      this.editedItem.cNumber = item.cNumber;
      this.editedItem.resiAddress = item.resiAddress;
      this.editedItem.province = item.province;
      this.editedItem.district = item.district;
      this.editedItem.division = item.division;
      this.editedItem.divisionNum = item.divisionNum;
      this.editedItem.regNum = item.regNum;
      //this.editedItem = Object.assign({}, item)
      this.dialog = true;
    },

    deleteItem(item) {
      this.$http
        .delete("/admin/delete/gramadata", {
          nicNum: item.nicNum
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save(item) {
      //this.$v.editedItem.$touch();
      /* if(!this.$v.item.$invalid){ */
      this.$http
        .patch("/admin/update/gramadata", {
          fName: item.fName,
          lName: item.lName,
          gender: item.gender,
          nicNum: item.nicNum,
          email: item.email,
          cNumber: item.cNumber,
          resiAddress: item.resiAddress,
          province: item.province,
          district: item.district,
          division: item.division,
          divisionNum: item.divisionNum,
          regNum: item.regNum
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });

      /* if (this.editedIndex > -1) {
         // Object.assign(this.desserts[this.editedIndex], this.editedItem)
          
        } else {
          this.desserts.push(this.editedItem)
        } */
      this.close();
    }
  },
  mounted() {
    this.$http
      .get("admin/gramadata")
      .then(response => {
        this.desserts = response.data;
        //console.log(response.data.fName);
        console.log("success");
        //this.gramaCount = response.data.count;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
