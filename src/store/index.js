const state = () => ({
  persons: [],
});

const mutations = {
  ADD_PERSON(state, payload) {
    state.persons.push(payload);
  },
  CHANGE_PERSON(state, payload) {
    const newState = state.persons.map((person) =>
      person.id === Number(payload.target.id)
        ? { ...person, name: payload.target.value }
        : person
    );
    state.persons = newState;
  },
  TOGGLE_EDIT_MODE(state, payload) {
    const newState = state.persons.map((person) => {
      return person.id === payload
        ? { ...person, inEditMode: !person.inEditMode }
        : person;
    });
    state.persons = newState;
  },
};

const actions = {
  addPerson({ commit }, payload) {
    commit("ADD_PERSON", payload);
  },
  changePerson({ commit }, payload) {
    commit("CHANGE_PERSON", payload);
  },
  toggleEditMode({ commit }, payload) {
    commit("TOGGLE_EDIT_MODE", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
