/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2666044546")

  // update collection data
  unmarshal({
    "name": "mesas"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2666044546")

  // update collection data
  unmarshal({
    "name": "mesass"
  }, collection)

  return app.save(collection)
})
