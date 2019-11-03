<template>
  <v-app>
    <v-container fluid class="pa-0">
      <v-layout column>
        <v-flex shrink>
          <v-toolbar app dense>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Seekr</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
              <v-btn flat small color="primary">Home</v-btn>
              <v-btn flat small>Data Analytics</v-btn>
              <v-btn flat small>Research</v-btn>
              <v-btn flat small>Information Hub</v-btn>
              <v-btn flat small>Donations</v-btn>
              <v-btn flat small>About</v-btn>
              <v-btn flat small>Contact</v-btn>
            </v-toolbar-items>
            <v-btn color="primary" small>Register/Login</v-btn>
          </v-toolbar>
        </v-flex>
        <!-- Image Carousal -->
        <v-flex grow>
          <v-layout row fill-height>
            <v-carousel height="790">
              <v-carousel-item
                v-for="(item, i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade"
                transition="fade"
              ></v-carousel-item>
            </v-carousel>
          </v-layout>
        </v-flex>

        <!-- Second Row Cards for Main Features of the System -->
        <v-flex grow class="ma-0 px-5 mt-2">
          <v-container fluid class="pa-5">
            <v-layout column align-center justify-center>
              <h5 class="display-1 pb-3">Lorem Ipsum Sit Dolar Amet</h5>
              <p class="py-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                quibusdam nobis officia maxime assumenda quo, quibusdam nobis
                officia maxime assumenda quo,
              </p>
              <p class="py-0">
                quibusdam nobis officia maxime assumenda quo,
              </p>
            </v-layout>
            <v-layout
              row
              wrap
              align-center
              justify-center
              justify-space-between
              fill-height
              class="py-3"
            >
              <!-- Card - 1 -->
              <v-card height="325" width="275" hover>
                <v-container fluid class="align-content-center">
                  <v-layout column align-center justify-center>
                    <v-flex>
                      <v-img
                        :src="require('../../assets/discussion.png')"
                        height="125"
                        width="125"
                      ></v-img>
                    </v-flex>
                    <v-flex>
                      <v-divider class="my-2"></v-divider>
                    </v-flex>
                    <v-flex>
                      <h5 class="headline pb-2">Data Analytics</h5>
                    </v-flex>

                    <v-flex>
                      <p class="body-1 text-align-last">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio aliquid possimus quod eveniet in hic eius
                        laudantium consequatur quia
                      </p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>

              <!-- Card - 2 -->
              <v-card height="325" width="275" hover>
                <v-container fluid class="align-content-center">
                  <v-layout column align-center justify-center>
                    <v-flex>
                      <v-img
                        :src="require('../../assets/discussion.png')"
                        height="125"
                        width="125"
                      ></v-img>
                    </v-flex>
                    <v-flex>
                      <v-divider class="my-2"></v-divider>
                    </v-flex>
                    <v-flex>
                      <h5 class="headline pb-2">Information Hub</h5>
                    </v-flex>

                    <v-flex>
                      <p class="body-1 text-align-last">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio aliquid possimus quod eveniet in hic eius
                        laudantium consequatur quia
                      </p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>

              <!-- Card - 3 -->
              <v-card height="325" width="275" hover>
                <v-container fluid class="align-content-center">
                  <v-layout column align-center justify-center>
                    <v-flex>
                      <v-img
                        :src="require('../../assets/discussion.png')"
                        height="125"
                        width="125"
                      ></v-img>
                    </v-flex>
                    <v-flex>
                      <v-divider class="my-2"></v-divider>
                    </v-flex>
                    <v-flex>
                      <h5 class="headline pb-2">Research</h5>
                    </v-flex>

                    <v-flex>
                      <p class="body-1 text-align-last">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio aliquid possimus quod eveniet in hic eius
                        laudantium consequatur quia
                      </p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>

              <!-- Card - 4 -->
              <v-card height="325" width="275" hover>
                <v-container fluid class="align-content-center">
                  <v-layout column align-center justify-center>
                    <v-flex>
                      <v-img
                        :src="require('../../assets/discussion.png')"
                        height="125"
                        width="125"
                      ></v-img>
                    </v-flex>
                    <v-flex>
                      <v-divider class="my-2"></v-divider>
                    </v-flex>
                    <v-flex>
                      <h5 class="headline pb-2">Donations</h5>
                    </v-flex>

                    <v-flex>
                      <p class="body-1 text-align-last">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio aliquid possimus quod eveniet in hic eius
                        laudantium consequatur quia
                      </p>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-layout>
          </v-container>
        </v-flex>

        <!-- Third Row -->
        <v-flex grow class="mx-0 my-5 pa-0">
          <v-container fluid class="pa-0">
            <v-layout column>
              <v-card height="450" full-width flat>
                <v-container fluid>
                  <v-layout column align-center justify-center>
                    <v-flex>
                      <v-layout row>
                        <v-flex shrink>
                          <v-img
                            aspectRatio="1"
                            src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                            height="400"
                            width="400"
                          >
                          </v-img>
                        </v-flex>
                        <v-flex grow>
                          <v-layout column class="ml-4">
                            <v-flex>
                              <h5 class="headline pb-">What is Seekr?</h5>
                              <h6 class="body-2 pb-2">Lorem Ipsum</h6>
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tenetur, quasi numquam modi
                                dolores iste
                                <br />
                                voluptate quis natus dolor voluptatem
                                voluptatibus atque blanditiis qui quam, incidunt
                                officia <br />
                                aspernatur aperiam consectetur cum.
                              </p>
                            </v-flex>
                          </v-layout>
                        </v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card>
            </v-layout>
          </v-container>
        </v-flex>

        <!-- Forth Row -->

        <!-- <v-flex grow class="ma-0 pa-0">
          <v-container fluid class="pa-0">
            <v-layout column>
              <v-card height="400" full-width flat>
                <span>sdfsd</span>
              </v-card>
            </v-layout>
          </v-container>
        </v-flex> -->

        <v-flex grow>
          <v-layout row fill-height>
            <v-carousel height="500">
              <v-carousel-item>
                <v-container fluid class="pa-0">
                  <v-layout column fill-height>
                    <v-card height="500" full-width flat>
                      <h5 class="title">News and Recent Information</h5>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-carousel-item>
              <v-carousel-item>
                <v-container fluid class="pa-0">
                  <v-layout column fill-height>
                    <v-card height="500" full-width flat>
                      <v-img
                        height="500"
                        src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                      ></v-img>
                      <span>Card2</span>
                    </v-card>
                  </v-layout>
                </v-container>
              </v-carousel-item>
            </v-carousel>
          </v-layout>
        </v-flex>

        <!-- Footer Starts from Here -->
        <v-flex>
          <v-footer dark height="auto" class="mt-5">
            <v-card flat tile class="secondary white--text text-xs-center">
              <v-card-text>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-3 white--text"
                  icon
                >
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card-text>

              <v-card-text class="white--text pt-0">
                Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit
                amet. Mauris cursus commodo interdum. Praesent ut risus eget
                metus luctus accumsan id ultrices nunc. Sed at orci sed massa
                consectetur dignissim a sit amet dui. Duis commodo vitae velit
                et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat
                augue vel ipsum ultrices, cursus iaculis dui sollicitudin.
                Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-text class="white--text">
                &copy;2019 — <strong>Seekr</strong>
              </v-card-text>
            </v-card>
          </v-footer>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      icons: [
        "fab fa-facebook",
        "fab fa-twitter",
        "fab fa-google-plus",
        "fab fa-linkedin",
        "fab fa-instagram"
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
#example-custom-transition
  .fade
    &-enter-active, &-leave-active, &-leave-to
      transition: .3s ease-out
      position: absolute
      top: 0
      left: 0

    &-enter, &-leave, &-leave-to
      opacity: 0

.text-align-last {
  text-align: justify;
  -moz-text-align-last: center;
  text-align-last: center;
}
</style>
