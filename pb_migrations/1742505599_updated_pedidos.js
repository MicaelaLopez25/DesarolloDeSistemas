/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // remove field
  collection.fields.removeById("number2135700020")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "number2135700020",
    "max": null,
    "min": null,
    "name": "numero_de_mesa",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
