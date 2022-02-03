<template>
  <div>Hello</div>
  <span>{{ this.msg }}</span>
  <ul>
    <li v-for="(person, i) in personsList" :key="i">
      {{ `${person.id} | ${person.name}` }}
      <button @click="changeThisPerson(person.id)">Change</button>
    </li>
  </ul>
  <button @click="myLocalMethod()">Add Person</button>
</template>

<script>
import { ref } from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'crazy memo'
    }
  },
  computed: {
    ...mapState({
      personsList: ({ personModule }) => personModule.persons
    })
  },
  methods: {
    
    ...mapActions('personModule', [ 'addPerson', 'changePerson' ]),

    myLocalMethod: function() {
      this.addPerson({ id: parseInt(Math.random() * 1000), name: `${parseInt(Math.random() * 1000)} name` })
    },

    changeThisPerson: function(id) {
      this.changePerson(id)
    }
  },
  mounted() {
    console.log('listtt', this.$store)
  },
}
</script>
