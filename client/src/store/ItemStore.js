import {makeAutoObservable} from "mobx"

export default class ItemStore {
  constructor() {

    this._types = []
    /*this._types = [
      {id: 1, name: 'Watches'},
      {id: 2, name: 'Braslets'},
      {id: 3, name: 'Rings'},
      {id: 4, name: 'Earrings'},
      {id: 5, name: 'Necklaces'}
    ]*/

    this._brands = []
    
    /*this._brands = [
      {id: 1, name: 'Pandora'},
      {id: 2, name: 'Cartier'},
      {id: 3, name: 'Tiffani'},
      {id: 4, name: 'Rolex'}
    ]*/

    this._items = [] 
    /*[
      {id: 1, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 2, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 3, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 4, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 5, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 6, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 7, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'},
      {id: 8, name: "Pandora", price: 2500, rating: 5, img: 'https://images.ua.prom.st/802643021_w640_h640_braslety-pandora-v.jpg'}
    ]*/

    this._selectedType = {}
    this._selectedBrand = {}
    this._selectedItem = {}
    this._page = 1
    this._totalCount = 0
    this._limit = 6
    makeAutoObservable(this)//следит за компонентами
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setItems(items) {
    this._items = items
  }

  setSelectedType(type){
    this.setPage(1)
    this._selectedType = type
  }
 
  setSelectedBrand(brand){
    this.setPage(1)
    this._selectedBrand = brand
  }

  setSelectedItem(item){
    this._selectedItem = item
  }

  
  setPage(page){
    this._page = page
  }

  setTotalCount(count){
    this._totalCount = count
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get items() {
    return this._Items
  } 

  get selectedType(){
    return this._selectedType
  }

  get selectedBrand(){
    return this._selectedBrand
  }

  get selectedItem(){
    return this._selectedItem
  }
  //
  get totalCount(){
    return this._totalCount
  }

  get page() {
    return this._page
  }

  get limit() {
    return this._limit
  } 
}