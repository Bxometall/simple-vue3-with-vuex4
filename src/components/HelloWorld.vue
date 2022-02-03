<template>
  <h1 class="mb-8">Hello</h1>
  <p class="text-center mb-4">{{ this.msg }}</p>
  <table class="w-screen table-auto">
    <tr v-for="(person, i) in personsList" :key="i">
      <td class="p-4 border-b divide-y border-stone-400">
        <div v-if="!person.inEditMode">
          {{ `${person.id} | ${person.name}` }}
        </div>
        <input
          v-else
          class="border border-stone-400 rounded w-full"
          type="text"
          v-bind="person"
          @input="changeThisPerson"
        />
      </td>
      <td class="p-4 border-b divide-y border-stone-400">
        <button
          class="p-4 bg-slate-400 text-white"
          @click="togglePersonEditMode(person.id)"
        >
          <span v-if="!person.inEditMode">Edit</span>
          <span v-else>Done</span>
        </button>
      </td>
    </tr>
  </table>
  <button class="p-4 bg-slate-400 text-white" @click="myLocalMethod()">
    Add Person
  </button>
</template>

<script>
import { ref } from "vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "crazy memo",
    };
  },
  computed: {
    ...mapState({
      personsList: ({ personModule }) => personModule.persons,
    }),
  },
  methods: {
    ...mapActions("personModule", [
      "addPerson",
      "changePerson",
      "toggleEditMode",
    ]),

    myLocalMethod: function () {
      this.addPerson({
        id: parseInt(Math.random() * 1000),
        name: `${parseInt(Math.random() * 1000)} name`,
        inEditMode: false,
      });
    },

    togglePersonEditMode(id) {
      this.toggleEditMode(id);
    },

    changeThisPerson: function (e) {
      this.changePerson(e);
    },
  },
  mounted() {
    console.log("listtt", this.$store);
  },
};
</script>
