import documents from 'data/documents'

const state = {
  documents: [],
  documentsSubset: [],
  itemActive: {}
}

const mutations = {

  'SET_DOCUMENTS' (state, documents) { state.documents = documents },

  'SET_DOCUMENTS_SUBSET' (state, folderId) {
    function findMatchingDocumentsSubset(children) { // Find the folder object that matches the passed id (the id in the url)
      for ( let i = 0; i < children.length; i++ ) { // First loop through folders array in documents (passed as argument 'state.document', when calling this function below)
        if ( children[i].id === folderId ) { return state.documentsSubset = children[i] } // If the passed id matches the object's id, set the documentSubset to this object
        else { findMatchingDocumentsSubset(children[i].folders) } // Else loop again (function calling itself), but this time in childfolders of previously looped through folder
      }
    }
    findMatchingDocumentsSubset(state.documents)
  },

  'SET_ITEM_ACTIVE' (state, itemId) {
    for ( let i = 0; i < state.documentsSubset.items.length; i++ ) {
      if ( state.documentsSubset.items[i].id === itemId ) { return state.itemActive = state.documentsSubset.items[i] }
    }
  }

}

const actions = {

  initProjects: ( {commit} ) => { commit('SET_DOCUMENTS', documents) },

  assignParentFolderIdToChild: ( {commit} ) => { // Assigning ids from parent folder objects to child folder/item so they can be used to build url
    let documents = state.documents // Make copy of state.documents
    function getParentFolderIdAndAssignToChild(children) { // Assign parent folder id to idParentFolder property on child folder/item (all the way down the documents tree)
      for ( let i = 0; i < children.length; i++ ) {
        for ( let j = 0; j < children[i].folders.length; j++ ) { // Folders
          children[i].folders[j].idParentFolder = children[i].id }
        for ( let j = 0; j < children[i].items.length; j++ ) { // Items
          children[i].items[j].idParentFolder = children[i].id }
        getParentFolderIdAndAssignToChild(children[i].folders) }} // Call itself to recurse down the 'documents' object tree
    getParentFolderIdAndAssignToChild(documents)
    commit('SET_DOCUMENTS', documents)
  }

}

const getters = {
  documents: state => { return state.documents },
  documentsSubset: state => { return state.documentsSubset },
  itemActive: state => { return state.itemActive }
}

export default {
  state,
  mutations,
  actions,
  getters
}
