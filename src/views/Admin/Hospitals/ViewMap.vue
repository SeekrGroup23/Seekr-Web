<template>
  <v-container class="px-0 mx-0" fluid>
    <v-layout column>
      <v-flex>
        <h4 class="display-1 font-weight-medium" color="secondary">
          View In Map
        </h4>
      </v-flex>
    </v-layout>
    <v-layout
      row
      justify-space-between
      align-content-start
      class="py-4 px-2"
      wrap
    >
    </v-layout>

    <v-layout row justify-space-between wrap>
      <v-flex md4 xs12 class="px-2">
        <v-select
          :items="provinces"
          v-model="province"
          @change="getDistricts()"
          label="Province"
        ></v-select>
      </v-flex>
      <v-flex md4 xs class="px-2">
        <v-select
          :items="districts"
          v-model="district"
          @change="getDivisions()"
          label="District"
          :disabled="isDistrictDisabled"
        ></v-select>
      </v-flex>
      <v-flex md4 xs12 class="px-2">
        <v-select
          :items="divisions"
          v-model="division"
          label="Division"
          :disabled="isDivisionDisabled"
          @change="updateMap()"
        ></v-select>
      </v-flex>
    </v-layout>

    <v-divider></v-divider>

    <v-layout>
      <gmap_hospitals></gmap_hospitals>
    </v-layout>
  </v-container>
</template>

<script>
import gmap_hospitals from "../../../components/Gmap_hospitals";
import { bus } from "../../../main";
export default {
  components: {
    gmap_hospitals
  },
  data: () => {
    return {
      provinces: [
        "Western",
        "Eastern",
        "Southern",
        "Northern",
        "Uva",
        "North-Central",
        "Sabaragamuwa",
        "Central",
        "North-Western",
        "All"
      ],
      districts: ["All"],
      divisions: ["All"],
      province: "All",
      district: "All",
      division: "All",
      provinceDistrictMap: new Map(),
      districtDivisionMap: new Map(),
      isDistrictDisabled: false,
      isDivisionDisabled: false
    };
  },
  async mounted() {},
  created() {
    this.$http
      .get("/api/metadata/metadata_01")
      .then(res => {
        // Convert the Plain Object to a MAP Object
        this.provinceDistrictMap = new Map(
          Object.entries(res.data.province_district)
        );
        this.districtDivisionMap = new Map(
          Object.entries(res.data.district_division)
        );
      })
      .catch(err => {
        console.log(err);
      });
  },
  computed: {},
  methods: {
    // When User Select the Province, the Districts within that Provice should be loaded to the v-select
    getDistricts() {
      this.districts = this.provinceDistrictMap.get(this.province);
      this.districts.push("All");
      this.district = "All";
      this.division = "All";

      this.updateMap();
    },
    getDivisions() {
      this.divisions = this.districtDivisionMap.get(this.district);
      this.divisions.push("All");
      this.division = "All";
      this.updateMap();
    },
    updateMap() {
      bus.$emit("update_hospital_map", {
        province: this.province,
        district: this.district,
        division: this.division
      });
    }
  }
};
</script>

<style scoped></style>
