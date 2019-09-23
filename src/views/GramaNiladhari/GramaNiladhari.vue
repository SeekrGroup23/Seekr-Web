<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app temporary>
      <v-container class="py-2">
        <v-layout row>
          <v-flex> <h5 class="subheading py-1">Grama Niladhari</h5> </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>

      <v-container class="pa-0 " fluid>
        <v-layout class="" row>
          <v-flex md12>
            <v-card flat dark color="">
              <v-layout class="pa-0 ma-0 py-4 px-3" row>
                <v-flex md3>
                  <v-avatar size="60px" color="grey lighten-4">
                    <img
                      src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                      alt="avatar"
                    />
                  </v-avatar>
                </v-flex>
                <v-flex class="pl-2" md9>
                  <h6 class="subheading">Pasindu Dewapriya</h6>
                  <h6 class="body-1">pd@gmail.com</h6>
                  <h6 class="body-1">Wethara - 453</h6>

                  <!-- <v-avatar size="50px" color="grey lighten-4">
              <img
                src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                alt="avatar"
              />
            </v-avatar> -->
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <v-divider></v-divider>

      <!-- List Items Begin From Here -->
      <v-list dense>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-group prepend-icon="account_circle" value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Users</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-group no-action sub-group value="true">
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Admin</v-list-tile-title>
              </v-list-tile>
            </template>

            <v-list-tile v-for="(admin, i) in admins" :key="i">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action>
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-title>Actions</v-list-tile-title>
              </v-list-tile>
            </template>
            <v-list-tile v-for="(crud, i) in cruds" :key="i">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

        <v-list-tile router-link to="/profile">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>CKDu Patient</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Messages</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Log Out</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dense>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Seekr</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="ma-4">
        <v-badge color="primary" right overlap>
          <template v-slot:badge>
            <!-- <v-icon dark small>
              done
            </v-icon> -->
            <span>6</span>
          </template>
          <v-icon color="secondary" large>
            notifications
          </v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon class="mr-2">
        <v-badge color="primary" right overlap>
          <template v-slot:badge>
            <!-- <v-icon dark small>
              done
            </v-icon> -->
            <span>6</span>
          </template>
          <v-icon color="secondary" large>
            email
          </v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container class="py-0 ma-0 containerPadding" fluid>
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
      drawer: false,
      items: [
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
  }
};
</script>

<style scoped>
.containerPadding {
  padding-left: 100px;
  padding-right: 100px;
}
</style>
