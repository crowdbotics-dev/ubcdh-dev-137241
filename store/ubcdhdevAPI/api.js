import axios from "axios"
const ubcdhdevAPI = axios.create({
  baseURL: "https://ubcdh-dev-137241.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return ubcdhdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_gvfddf_list(payload) {
  return ubcdhdevAPI.get(`/api/v1/gvfddf/`)
}
function api_v1_gvfddf_create(payload) {
  return ubcdhdevAPI.post(`/api/v1/gvfddf/`, payload)
}
function api_v1_gvfddf_retrieve(payload) {
  return ubcdhdevAPI.get(`/api/v1/gvfddf/${payload.id}/`)
}
function api_v1_gvfddf_update(payload) {
  return ubcdhdevAPI.put(`/api/v1/gvfddf/${payload.id}/`, payload)
}
function api_v1_gvfddf_partial_update(payload) {
  return ubcdhdevAPI.patch(`/api/v1/gvfddf/${payload.id}/`, payload)
}
function api_v1_gvfddf_destroy(payload) {
  return ubcdhdevAPI.delete(`/api/v1/gvfddf/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return ubcdhdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return ubcdhdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return ubcdhdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return ubcdhdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return ubcdhdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return ubcdhdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_gvfddf_list,
  api_v1_gvfddf_create,
  api_v1_gvfddf_retrieve,
  api_v1_gvfddf_update,
  api_v1_gvfddf_partial_update,
  api_v1_gvfddf_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
