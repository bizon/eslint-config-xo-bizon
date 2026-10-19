import {get_access_token} from './helpers/legacy-api.js'

export function buildTokenRequest(credentials) {
  const {client_id, client_secret: clientSecret} = credentials

  return {
    grant_type: 'client_credentials',
    access_token: get_access_token(client_id),
    client_secret: clientSecret,
  }
}
