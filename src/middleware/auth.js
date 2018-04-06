import store from '@/store'

export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
  //if (false) {
    next({ name: 'login' })
  } else {
    next()
  }
}
