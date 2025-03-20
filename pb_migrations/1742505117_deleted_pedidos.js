/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4131763008");

  return app.delete(collection);
}, (app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": true,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
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
      }
    ],
    "id": "pbc_4131763008",
    "indexes": [],
    "listRule": null,
    "name": "pedidos",
    "system": false,
    "type": "base",
    "updateRule": null,
    "viewRule": null
  });

  return app.save(collection);
})
