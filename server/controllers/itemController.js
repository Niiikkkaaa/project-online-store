const uuid = require('uuid')//генерация названия
const path = require('path')
const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
  async create(req, res, next) {
    try {
      let {name, price, brandId, typeId, info} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"//название файла

      img.mv(path.resolve(__dirname, '..', 'static', fileName))//перемещаем файл в папку после получения

      const item = await Item.create({name, price, brandId, typeId, img: fileName})
  
      if (info) {
        info = JSON.parse(info)
        info.forEach(i => 
          ItemInfo.create({      
            title: i.title,
            description: i.description,
            itemId: item.id
          }) 
        )
      }
     
      return res.json(item)
      
    } catch(e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    let {brandId, typeId, limit, page} = req.query

    page = page || 1
    limit = limit || 100
    let offset = page * limit - limit//отступ

    let items;
    if (!brandId && !typeId) {
      items = await Item.findAndCountAll({limit, offset})
    }
    if (brandId && !typeId) {
      items = await Item.findAndCountAll({where: {brandId}, limit, offset})
    }
    if (!brandId && typeId) {
      items = await Item.findAndCountAll({where: {typeId}, limit, offset})
    }
    if (brandId && typeId) {
      items = await Item.findAndCountAll({where: {brandId, typeId}, limit, offset})
    }
    return res.json(items)
  }

  async getOne(req, res) {
    const {id} = req.params
    const item = await Item.findOne(
      { 
        where: {id},
        include: [{model: ItemInfo, as: 'info'}]
      }
    )
    return res.json(item)
  } 

  async delete(req, res) {
    const {id} = req.params
    await Item.destroy({where: {id}})  
    const items = await Item.findAll()
    return res.json(items)
  } 
}

module.exports = new ItemController()