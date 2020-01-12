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
                      src="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png"
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
          <v-list-tile @click="$router.push('/medicalofficer/profile')">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
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
          <v-divider></v-divider>
          <v-list-tile>
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

      <v-btn icon class="mr-2">
        <v-avatar size="35">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container class="py-0 ma-0 containerRouterView" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="" fixed app></v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => {
    return {
      drawer: true,
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
  methods: {}
};
</script>

<style scoped>
.containerRouterView {
  padding-left: 3%;
  padding-right: 3%;
}
</style>
