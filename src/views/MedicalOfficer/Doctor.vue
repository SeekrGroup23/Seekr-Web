<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      dark
      app
      width="280"
      hidden-md-and-down
    >
      <v-card flat color="secondary">
        <v-container class="pa-0 " fluid>
          <v-layout class="" row>
            <v-flex md12>
              <v-card flat dark color="" height="48">
                <v-layout class="pa-0 ma-0 px-3" row>
                  <v-flex>
                    <v-img
                      :src="require('../../assets/logoIcon.png')"
                      aspect-ratio="1"
                      height="42"
                      width="42"
                      shrink
                    ></v-img>
                  </v-flex>
                  <v-flex grow class="py-2">
                    <h5 class="headline">Seekr</h5>
                  </v-flex>
                </v-layout>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider class="my-0 py-0"></v-divider>

        <!-- List Items Begin From Here -->
        <v-list dense>
          <v-list-tile @click="$router.push('/medicalofficer')">
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>people</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Patients</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/medicalofficer/add_patient')">
              <v-list-tile-content>
                <v-list-tile-title>Add Patient</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/medicalofficer/patients')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-divider></v-divider>

          <!-- <v-list-tile @click="$router.push('/medicalofficer/clinic')">
            <v-list-tile-action>
              <v-icon>local_hospital</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Clinical</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>notification_important</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider> -->

          <v-list-tile @click="$router.push('/medicalofficer/profile')">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="deleteConfirmation = true">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-toolbar fixed app dense>
      <!-- <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> -->
      <v-toolbar-side-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-toolbar-side-icon>
      <v-toolbar-title>Medical Officer</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="mt-2">
        <v-badge color="primary" right overlap>
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon color="secondary" size="26">
            notifications
          </v-icon>
        </v-badge>
      </v-btn>

      <v-menu offset-y dense transition="slide-x-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" class="mr-2">
            <v-avatar size="35">
              <img :src="image" alt="" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile @click="$router.push('/medicalofficer/profile')">
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="deleteConfirmation = true">
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <v-container class="py-0 ma-0 containerRouterView" fluid>
        <router-view></router-view>
        <v-dialog v-model="deleteConfirmation" persistent max-width="290">
          <v-card>
            <v-card-title class="headline">Logout Confirmation</v-card-title>
            <v-card-text>Do you want to proceed with this action?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                flat
                @click="deleteConfirmation = false"
                >Cancel</v-btn
              >
              <v-btn color="red darken-1" flat @click="logout()">Logout</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-content>
    <v-footer color="" fixed app></v-footer>
  </v-app>
</template>

<script>
import jwtDecode from "jwt-decode";

export default {
  data: () => {
    return {
      drawer: true,
      deleteConfirmation: false,
      imageURL: "",
      image: null,
      items: [
        {
          action: "local_activity",
          title: "Attractions",
          items: [{ title: "List Item" }]
        },
        {
          action: "restaurant",
          title: "Dining",
          active: true,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          action: "school",
          title: "Education",
          items: [{ title: "List Item" }]
        },
        {
          action: "directions_run",
          title: "Family",
          items: [{ title: "List Item" }]
        },
        {
          action: "healing",
          title: "Health",
          items: [{ title: "List Item" }]
        },
        {
          action: "content_cut",
          title: "Office",
          items: [{ title: "List Item" }]
        },
        {
          action: "local_offer",
          title: "Promotions",
          items: [{ title: "List Item" }]
        }
      ],
      items_x: [
        {
          text: "Dashboard",
          disabled: false,
          href: "breadcrumbs_dashboard"
        },
        {
          text: "Link 1",
          disabled: false,
          href: "breadcrumbs_link_1"
        },
        {
          text: "Link 2",
          disabled: true,
          href: "breadcrumbs_link_2"
        }
      ]
    };
  },
  beforeCreate() {},
  created() {
    this.$store.state.userJWT = localStorage.getItem("access_token");
    // Decoding the Payload from the userJWT
    const jwtPayload = jwtDecode(this.$store.state.userJWT);
    // console.log(jwtPayload);
    this.$store.state.user.id = jwtPayload.user.id;
    this.$store.state.user.firstName = jwtPayload.user.firstName;
    this.$store.state.user.lastName = jwtPayload.user.lastName;
    this.$store.state.user.email = jwtPayload.user.email;
    // this.$store.state.user.imageURL = jwtPayload.user.imageURL;
    this.$store.state.user.role = jwtPayload.user.role;
    this.getProfile();
  },
  mounted() {},
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    getImageFromServer(imageURL) {
      this.$http
        .post("api/common/get_image", {
          imageURL: imageURL
        })
        .then(res => {
          if (res.data != null) {
            // Display the Image converted into Base64 - Decoding
            this.image = "data:image/jpeg;base64, " + res.data.img;
            // console.log(this.image);
          } else {
            this.image = require("../../assets/user.png");
          }

          if (res.data.img == "") {
            this.image = require("../../assets/user.png");
          }
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$store.dispatch("logout");
          }
        });
    },
    getProfile() {
      // moID = "this.$store.state.user.id";
      this.$http
        .get("/api/medical_officer/get_profile/" + this.$store.state.user.id)
        .then(res => {
          this.imageURL = res.data.imageURL;
          this.getImageFromServer(this.imageURL);

          this.$store.state.user.firstName = res.data.firstName;
          this.$store.state.user.lastName = res.data.lastName;
        })
        .catch(err => {
          if (err.response.status == 403) {
            this.$store.dispatch("logout");
          }
        });
    }
  }
};
</script>

<style scoped>
.containerRouterView {
  padding-left: 3%;
  padding-right: 3%;
}
</style>
