/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2204324178",
    "hidden": false,
    "id": "relation2346482409",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "mesa_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // remove field
  collection.fields.removeById("relation2346482409")

  return app.save(collection)
})
