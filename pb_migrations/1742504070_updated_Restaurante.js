/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_792358614")

  // update collection data
  unmarshal({
    "name": "mesa"
  }, collection)

  // remove field
  collection.fields.removeById("text1210445753")

  // update field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number3303806670",
    "max": null,
    "min": null,
    "name": "numero",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3625394937",
    "max": 0,
    "min": 0,
    "name": "estado",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_792358614")

  // update collection data
  unmarshal({
    "name": "Restaurante"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1210445753",
    "max": 0,
    "min": 0,
    "name": "mesas",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number3303806670",
    "max": null,
    "min": null,
    "name": "pedido",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text3625394937",
    "max": 0,
    "min": 0,
    "name": "item_product",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
})
