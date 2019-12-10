<template>
  <!--<V-dialog mx-width="600px">
    <v-btn color="light-green" flat slot="activator" class="sucess">Add News</v-btn>-->
    <v-card>
      <v-card-title>
        <h2>Add a news</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="content" prepend-icon="" :rules="inputRules"></v-textarea>
          <v-menu>
<v-text-field :rules="inputRules" :value="formattedDate" slot="activator" label="Due date" prepend-icon=""></v-text-field>
<v-date-picker v-model="due"></v-date-picker>
          </v-menu>
          <v-spacer></v-spacer>
          <v-btn color="light-green" class="sucess mx-0 mt-3" @click="sumbit">Sumbit</v-btn>
          <v-spacer></v-spacer>
          <!--<v-btn color="light-green" class="sucess mx-0 mt-3" @click="update">update</v-btn>
          
          <v-btn color="light-green" class="sucess mx-0 mt-3" @click="Delete">Delete</v-btn>-->
        </v-form>
      </v-card-text>
    </v-card>
 <!-- </V-dialog>-->
</template>

<script>
//import format from 'date-fns/format'
export default{
  data(){
    return{
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
      }
      
    }
  },
  computed:{
    formattedDate(){
      return this.due ? format(this.due, 'Do MM YYYY') : ''
    }
  }
}

</script>