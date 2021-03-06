const getFormFields = require('../../lib/get-form-fields')
const api = require('./api')
const sapi = require('../show/api')
const ui = require('./ui')
const sui = require('../show/ui')

const onSignUp = function (event) {
  event.preventDefault()
  // // console.log('SU clicked')

  const form = event.target
  const data = getFormFields(form)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}
const onSignIn = function (event) {
  event.preventDefault()
  // // console.log('SI clicked')

  const form = event.target
  const data = getFormFields(form)
  const getshows = async () => {
    await api.signIn(data)
      .then(ui.onSignInSuccess)
      .catch(ui.onError)
    await sapi.indexUserShows()
      .then(sui.onIUSSuccess) // Index User Shows Success
      .catch(ui.onError)
  }
  getshows()
}
const onPChange = function (event) {
  event.preventDefault()
  // // console.log('PC clicked')
  const form = event.target

  const data = getFormFields(form)
  // // // console.log('haha', data)
  api.pChange(data)
    .then(ui.onPChangeSuccess)
    .catch(ui.onError)
}
const onSignOut = function (event) {
  event.preventDefault()

  // // console.log('SO clicked')
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

module.exports = {
  onPChange,
  onSignIn,
  onSignOut,
  onSignUp
}
