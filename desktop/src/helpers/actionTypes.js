export const createCRUDActionTypes = (domain, pluralDomain = domain + `s`) => {
  return {
    [`GET_${domain.toUpperCase()}_REQUEST`]: `get_${domain.toLowerCase()}_request`,
    [`GET_${domain.toUpperCase()}_SUCCESS`]: `get_${domain.toLowerCase()}_success`,
    [`GET_${domain.toUpperCase()}_FAILURE`]: `get_${domain.toLowerCase()}_failure`,
    [`GET_${pluralDomain.toUpperCase()}_REQUEST`]: `get_${pluralDomain.toLowerCase()}_request`,
    [`GET_${pluralDomain.toUpperCase()}_SUCCESS`]: `get_${pluralDomain.toLowerCase()}_success`,
    [`GET_${pluralDomain.toUpperCase()}_FAILURE`]: `get_${pluralDomain.toLowerCase()}_failure`,
    [`POST_${domain.toUpperCase()}_REQUEST`]: `post_${domain.toLowerCase()}_request`,
    [`POST_${domain.toUpperCase()}_SUCCESS`]: `post_${domain.toLowerCase()}_success`,
    [`POST_${domain.toUpperCase()}_FAILURE`]: `post_${domain.toLowerCase()}_failure`,
    [`PUT_${domain.toUpperCase()}_REQUEST`]: `put_${domain.toLowerCase()}_request`,
    [`PUT_${domain.toUpperCase()}_SUCCESS`]: `put_${domain.toLowerCase()}_success`,
    [`PUT_${domain.toUpperCase()}_FAILURE`]: `put_${domain.toLowerCase()}_failure`,
    [`DELETE_${domain.toUpperCase()}_REQUEST`]: `delete_${domain.toLowerCase()}_request`,
    [`DELETE_${domain.toUpperCase()}_SUCCESS`]: `delete_${domain.toLowerCase()}_success`,
    [`DELETE_${domain.toUpperCase()}_FAILURE`]: `delete_${domain.toLowerCase()}_failure`,
    [`CREATE_${domain.toUpperCase()}_REQUEST`]: `create_${domain.toLowerCase()}_request`,
    [`CREATE_${domain.toUpperCase()}_SUCCESS`]: `create_${domain.toLowerCase()}_success`,
    [`CREATE_${domain.toUpperCase()}_FAILURE`]: `create_${domain.toLowerCase()}_failure`,
    [`UPDATE_${domain.toUpperCase()}_REQUEST`]: `update_${domain.toLowerCase()}_request`,
    [`UPDATE_${domain.toUpperCase()}_SUCCESS`]: `update_${domain.toLowerCase()}_success`,
    [`UPDATE_${domain.toUpperCase()}_FAILURE`]: `update_${domain.toLowerCase()}_failure`,
    [`REMOVE_${domain.toUpperCase()}_REQUEST`]: `remove_${domain.toLowerCase()}_request`,
    [`REMOVE_${domain.toUpperCase()}_SUCCESS`]: `remove_${domain.toLowerCase()}_success`,
    [`REMOVE_${domain.toUpperCase()}_FAILURE`]: `remove_${domain.toLowerCase()}_failure`,
  }
}

export const createCustomAsyncActionType = (domain, type) => {
  return {
    [`${type.toUpperCase()}_${domain.toUpperCase()}_REQUEST`]: `${type.toLowerCase()}_${domain.toLowerCase()}_request`,
    [`${type.toUpperCase()}_${domain.toUpperCase()}_SUCCESS`]: `${type.toLowerCase()}_${domain.toLowerCase()}_success`,
    [`${type.toUpperCase()}_${domain.toUpperCase()}_FAILURE`]: `${type.toLowerCase()}_${domain.toLowerCase()}_failure`,
  }
}

export const createCustomSyncActionType = (domain, type) => {
  return {
    [`${type.toUpperCase()}_${domain.toUpperCase()}`]: `${type.toLowerCase()}_${domain.toLowerCase()}`,
  }
}

export default {
  createCustomAsyncActionType,
  createCustomSyncActionType,
  createCRUDActionTypes,
}
