<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
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
          <v-list-tile @click="$router.push('/admin/')">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Dashboard</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <!-- Patients -->
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

            <v-list-tile @click="$router.push('/admin/patients/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/patients/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add New</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
          <v-divider></v-divider>

          <!-- Medical Officers -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>people</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Medical Officers</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/admin/medical_officer/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add New</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/medical_officer/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Hospitals -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>local_hospital</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Hospitals</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-divider></v-divider>

            <v-list-tile @click="$router.push('/admin/hospitals/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add Hospital</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>loupe</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/hospitals/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/hospitals/view_map')">
              <v-list-tile-content>
                <v-list-tile-title>View in Map</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>map</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Grama Niladhari -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>people</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Grama Niladhari</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/admin/grama_niladhari/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add New</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/grama_niladhari/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Donors -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>supervisor_account</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Donors</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/admin/donors/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add New</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/donors/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Data Entry -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>note_add</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Data Entry</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/admin/data_entry/add')">
              <v-list-tile-content>
                <v-list-tile-title>Add New</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/admin/data_entry/view')">
              <v-list-tile-content>
                <v-list-tile-title>View All</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Donation Platform -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>sentiment_satisfied_alt</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Donation Platform</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile @click="$router.push('/medicalofficer/add_patient')">
              <v-list-tile-content>
                <v-list-tile-title>Dashboard</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/medicalofficer/patients')">
              <v-list-tile-content>
                <v-list-tile-title>View History</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Information Platform -->
          <v-list-group>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>info</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>Information Platform</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-divider></v-divider>

            <v-list-tile @click="$router.push('/medicalofficer/add_patient')">
              <v-list-tile-content>
                <v-list-tile-title>Dashboard</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>person_add</v-icon>
              </v-list-tile-action>
            </v-list-tile>

            <v-list-tile @click="$router.push('/medicalofficer/patients')">
              <v-list-tile-content>
                <v-list-tile-title>View Posts</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>group</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-divider></v-divider>

          <!-- Profile -->
          <v-list-tile @click="$router.push('/medicalofficer/profile')">
            <v-list-tile-action>
              <v-icon>account_circle</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <!-- Notifications -->
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>notification_important</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Notifications</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <!-- Logout -->
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
      <v-toolbar-title>System Administrator</v-toolbar-title>
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