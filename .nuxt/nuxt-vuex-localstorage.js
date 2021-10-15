import bindStorage from 'nuxt-vuex-localstorage/plugins/bindStorage'

export default (ctx) => {
  const options = {"mode":"debug","localStorage":["counter"],"sessionStorage":["filter"]}
  bindStorage(ctx, options)
}
