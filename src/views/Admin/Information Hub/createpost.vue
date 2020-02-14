<template>
 
<v-card-text>
  <v-form class="px-3" ref="form">
   <v-text-field label="Author" v-model="name" prepend-icon="" :rules="inputRules"></v-text-field>
    <v-text-field label="Title" v-model="title" prepend-icon="" :rules="inputRules"></v-text-field>
      <v-textarea label="Information" v-model="content" prepend-icon="" :rules="inputRules"></v-textarea>
   <v-menu>
    <v-text-field  :value="due" slot="activator" label="Due date" prepend-icon=""></v-text-field>
    <v-date-picker v-model="due"></v-date-picker>
   </v-menu>
   <!--image input
    <v-avatar tile color="white" size="208">
        <v-img :src="imageURL"></v-img>
          </v-avatar>-->
                 
           <v-flex class=" " md2>
                    <input
                      style="display: none"
                      ref="imageFileInput"
                      type="file"
                      name="imageFile"
                      v-on:change="onFileSelected"
                    />
                    <v-btn @click="$refs.imageFileInput.click()"
                      >Select Image</v-btn
                    >
                  </v-flex>
                  <v-flex class="py-1 " md8>
                    <v-spacer></v-spacer>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>

    <v-spacer></v-spacer>
      <v-btn color="light-green" class="sucess mx-0 mt-3" @click="sumbit">Sumbit</v-btn>
          </v-form>
      </v-card-text>
  
</template>

<script>

export default{
  data(){
    return{
      name:'',
      title:'',
      content:'',
      due: null,
      inputRules: [
        v => v.length >=3 || 'Minimum length is 3 charactors'
      ]
    }
  },
  methods:{
    sumbit(){
      if(this.$refs.form.validate()){
        console.log(this.title,this.content)
        const project = {
          title: this.title,
          information: this.information,
          due: format(this.due, 'Do MM YYYY'),

onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.imageURL = URL.createObjectURL(this.selectedFile);
      console.log(URL.createObjectURL(this.selectedFile));
      // this.uploadFile();
    },
    uploadFile() {
      let formData = new FormData();
      formData.append("imageFile", this.selectedFile);
      console.log(formData);
      console.log(this.selectedFile);
      this.loading_1 = true;
      this.$http
        .post(
          "/Information_Hub/show_post/" + this.docID + "/image",
          formData,
          {
            onUploadProgress: uploadEvent => {
              console.log(
                "Upload Progress: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                  "%"
              );
            }
          }
        )
        .then(res => {
          console.log(res.data);
          if (res.data.message == "Success") {
            this.loading_1 = false;
            this.e6 = 4;
          }
        })
        .catch(err => {
          this.loading_1 = false;
          this.snackbarText = "Image Uploading Failed";
          this.snackbarColor = "warning";
          this.snackbar = true;
          console.log(err);
        });
    },
        }
       
      }
      
    }
  },
  
}

</script>