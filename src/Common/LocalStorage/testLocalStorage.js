const TEST_STORAGE_KEY = 'vue-storage'

export default {
  getTestVueLocalStorage()
  {
    return JSON.parse( window.localStorage.getItem( TEST_STORAGE_KEY ) || '[]' )
  },

  setTestVueLocalStorage( argument )
  {
    window.localStorage.setItem( TEST_STORAGE_KEY, JSON.stringify( argument ) )
  }
}
