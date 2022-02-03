const state = () => ({
  persons: [
    { id: 1, name: 'My Name' }
  ]
})


const mutations = {
  'ADD_PERSON' (state, payload) {
    state.persons.push(payload)
  },
  'CHANGE_PERSON' (state, payload) {
    // econtrando o objeto e evoluindo ele
    const newState = state.persons.map(person => person.id === payload ? { ...person, name: 'my new name' } : person)
    state.persons = newState // atualizando o estado com a mudança
  }
}

const actions = {
  addPerson({ commit }, payload) {
    console.log('passando pela action - add')
    commit('ADD_PERSON', payload)
  },
  changePerson({ commit }, payload) {
    console.log('passando pela action - change')
    commit('CHANGE_PERSON', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}