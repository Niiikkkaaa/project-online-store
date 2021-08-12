import {$host, $authHost} from './index';
import jwt_decode from 'jwt-decode';

export const createType = async (type) => {
  const {data} = await $authHost.post('api/type', type)
  return data 
}

export const fetchTypes = async () => {
  const {data} = await $host.get('api/type')
  return data
}

export const deleteType = async (id) => {
  await $authHost.delete('api/type/' + id  )
  return 0
}
//
export const createBrand = async (brand) => {
  const {data} = await $authHost.post('api/brand', brand)
  return data 
}

export const fetchBrands = async () => {
  const {data} = await $host.get('api/brand')
  return data
}

export const deleteBrand = async (id) => {
  await $authHost.delete('api/brand/' + id)
  return 0 
}
//
export const createItem = async (item) => {
  const {data} = await $authHost.post('api/item', item)
  return data 
}

export const fetchItems = async (typeId, brandId, page, limit = 6) => {
  const {data} = await $host.get('api/item', {params: {
    typeId, brandId, page, limit
  }})
  return data
}

export const fetchOneItem = async (id) => {
  const {data} = await $host.get('api/item/' + id)
  return data
}

export const deleteItem = async (id) => {
  await $authHost.delete('api/item/' + id)
  return 0 
}