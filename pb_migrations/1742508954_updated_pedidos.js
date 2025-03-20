/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2666044546",
    "hidden": false,
    "id": "relation1043086211",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "mesas_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // remove field
  collection.fields.removeById("relation1043086211")

  return app.save(collection)
})
