var Manager = require("bateeq-module").master.StorageManager;
var JwtRouterFactory = require("../jwt-router-factory");
const apiVersion = '1.0.0';

function getRouter() {
    var router = JwtRouterFactory(Manager, {
        version: apiVersion,
        defaultOrder: {
            "_updatedDate": -1
        }
    });
    return router;
}

module.exports = getRouter;

// var Router = require('restify-router').Router;
// var router = new Router();
// var StorageManager = require('bateeq-module').master.StorageManager;
// var db = require('../../../db');
// var resultFormatter = require("../../../result-formatter");

// const apiVersion = '1.0.0';

// router.get('/', (request, response, next) => {
//     db.get().then(db => {
//         var manager = new StorageManager(db, {
//             username: 'router'
//         });
        
//         var query = request.query;

//         manager.read(query)
//             .then(docs => { 
//                 var result = resultFormatter.ok(apiVersion, 200, docs.data);
//                 delete docs.data;
//                 result.info = docs;
//                 response.send(200, result);
//             })
//             .catch(e => {
//                 var error = resultFormatter.fail(apiVersion, 400, e);
//                 response.send(400, error);
//             });

//     });
// });

// router.get('/:id', (request, response, next) => {
//     db.get().then(db => {
//         var manager = new StorageManager(db, {
//             username: 'router'
//         });
        
//         var id = request.params.id;

//         manager.getSingleById(id)
//             .then(doc => {
//                 var result = resultFormatter.ok(apiVersion, 200, doc);
//                 response.send(200, result); 
//             })
//             .catch(e => {
//                 var error = resultFormatter.fail(apiVersion, 400, e);
//                 response.send(400, error);
//             });

//     });
// });

// router.post('/', (request, response, next) => {
//     db.get().then(db => {
//         var manager = new StorageManager(db, {
//             username: 'router'
//         });
        
//         var data = request.body;

//         manager.create(data)
//             .then(docId => {
//                 response.header('Location', `/storages/${docId.toString()}`);
//                 var result = resultFormatter.ok(apiVersion, 201);
//                 response.send(201, result);
//             })
//             .catch(e => {
//                 var error = resultFormatter.fail(apiVersion, 400, e);
//                 response.send(400, error);
//             });

//     });
// });

// router.put('/:id', (request, response, next) => {
//     db.get().then(db => {
//         var manager = new StorageManager(db, {
//             username: 'router'
//         });
        
//         var id = request.params.id;
//         var data = request.body;

//         manager.update(data)
//             .then(docId => {
//                 var result = resultFormatter.ok(apiVersion, 204);
//                 response.send(204, result);
//             })
//             .catch(e => {
//                 var error = resultFormatter.fail(apiVersion, 400, e);
//                 response.send(400, error);
//             });

//     });
// });

// router.del('/:id', (request, response, next) => {
//     db.get().then(db => {
//         var manager = new StorageManager(db, {
//             username: 'router'
//         });
        
//         var id = request.params.id;
//         var data = request.body;

//         manager.delete(data)
//             .then(docId => {
//                 var result = resultFormatter.ok(apiVersion, 204);
//                 response.send(204, result);
//             })
//             .catch(e => {
//                 var error = resultFormatter.fail(apiVersion, 400, e);
//                 response.send(400, error);
//             });
//     });
// });


// module.exports = router;