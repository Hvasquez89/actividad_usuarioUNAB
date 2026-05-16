use usuarioUNAB
switched to db usuarioUNAB
db["clientes"].find()
use usuarioUNAB
already on db usuarioUNAB
db.clientes.insertMany([
  { nombre: "Ana", ciudad: "Lima", edad: 28, correo: "ana@gmail.com" },
  { nombre: "Carlos", ciudad: "Bogotá", edad: 34, correo: "carlos@yahoo.com" },
  { nombre: "María", ciudad: "Lima", edad: 22, correo: "maria@hotmail.com" },
  { nombre: "José", ciudad: "Quito", edad: 40, correo: "jose@gmail.com" },
  { nombre: "Lucía", ciudad: "Bogotá", edad: 19, correo: "lucia@outlook.com" },
  { nombre: "Pedro", ciudad: "Lima", edad: 35, correo: "pedro@gmail.com" }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a08b1aa947db4ee7b91a3b7'),
    '1': ObjectId('6a08b1aa947db4ee7b91a3b8'),
    '2': ObjectId('6a08b1aa947db4ee7b91a3b9'),
    '3': ObjectId('6a08b1aa947db4ee7b91a3ba'),
    '4': ObjectId('6a08b1aa947db4ee7b91a3bb'),
    '5': ObjectId('6a08b1aa947db4ee7b91a3bc')
  }
}
db.clientes.find()
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ ciudad: "Lima" })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ edad: { $gt: 30 } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ edad: { $lte: 22 } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
db.clientes.find({ edad: { $lte: 22 } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
db.clientes.find({ ciudad: { $ne: "Bogotá" } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ ciudad: "Lima", edad: { $gt: 25 } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ ciudad: { $in: ["Lima", "Bogotá"] } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.find({ ciudad: { $nin: ["Lima", "Quito"] } })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
db.clientes.find({ $or: [ { edad: { $lt: 20 } }, { ciudad: "Quito" } ] })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
db.clientes.find({}, { nombre: 1, ciudad: 1, _id: 0 })
{
  nombre: 'Ana',
  ciudad: 'Lima'
}
{
  nombre: 'Carlos',
  ciudad: 'Bogotá'
}
{
  nombre: 'María',
  ciudad: 'Lima'
}
{
  nombre: 'José',
  ciudad: 'Quito'
}
{
  nombre: 'Lucía',
  ciudad: 'Bogotá'
}
{
  nombre: 'Pedro',
  ciudad: 'Lima'
}
db.clientes.find({}, { correo: 0 })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35
}
db.clientes.find().sort({ edad: 1 })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
db.clientes.find().sort({ edad: -1 })
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
db.clientes.find().limit(3)
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b7'),
  nombre: 'Ana',
  ciudad: 'Lima',
  edad: 28,
  correo: 'ana@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b8'),
  nombre: 'Carlos',
  ciudad: 'Bogotá',
  edad: 34,
  correo: 'carlos@yahoo.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
db.clientes.find().skip(2)
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3b9'),
  nombre: 'María',
  ciudad: 'Lima',
  edad: 22,
  correo: 'maria@hotmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3ba'),
  nombre: 'José',
  ciudad: 'Quito',
  edad: 40,
  correo: 'jose@gmail.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bb'),
  nombre: 'Lucía',
  ciudad: 'Bogotá',
  edad: 19,
  correo: 'lucia@outlook.com'
}
{
  _id: ObjectId('6a08b1aa947db4ee7b91a3bc'),
  nombre: 'Pedro',
  ciudad: 'Lima',
  edad: 35,
  correo: 'pedro@gmail.com'
}
db.clientes.createIndex({ ciudad: 1 })
ciudad_1
db.clientes.createIndex({ ciudad: 1, edad: -1 })
ciudad_1_edad_-1
db.clientes.createIndex({ correo: 1 }, { unique: true })
correo_1
db.clientes.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { ciudad: 1 }, name: 'ciudad_1' },
  { v: 2, key: { ciudad: 1, edad: -1 }, name: 'ciudad_1_edad_-1' },
  { v: 2, key: { correo: 1 }, name: 'correo_1', unique: true }
]
db.clientes.find({ nombre: "Pedro" }).explain("executionStats")
        '$eq': 'Pedro'
      }
    },
    indexFilterSet: false,
    queryHash: 'D61B61A6',
    planCacheShapeHash: 'D61B61A6',
    planCacheKey: 'B1FCBE5B',
    optimizationTimeMillis: 0,
    maxIndexedOrSolutionsReached: false,
    maxIndexedAndSolutionsReached: false,
    maxScansToExplodeReached: false,
    prunedSimilarIndexes: false,
    winningPlan: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        nombre: {
          '$eq': 'Pedro'
        }
      },
      nss: 'usuarioUNAB.clientes',
      direction: 'forward'
    },
    rejectedPlans: []
  },
  executionStats: {
    executionSuccess: true,
    nReturned: 1,
    executionTimeMillis: 13,
    totalKeysExamined: 0,
    totalDocsExamined: 6,
    executionStages: {
      isCached: false,
      stage: 'COLLSCAN',
      filter: {
        nombre: {
          '$eq': 'Pedro'
        }
      },
      nReturned: 1,
      executionTimeMillisEstimate: 0,
      works: 7,
      advanced: 1,
      needTime: 5,
      needYield: 0,
      saveState: 0,
      restoreState: 0,
      isEOF: 1,
      nss: 'usuarioUNAB.clientes',
      direction: 'forward',
      docsExamined: 6
    }
  },
  queryShapeHash: '21F6F3D3AC28DC46BEE1C29708F31371F81E08D146D974D3DDE71551408744B7',
  command: {
    find: 'clientes',
    filter: {
      nombre: 'Pedro'
    },
    '$db': 'usuarioUNAB'
  },
  serverInfo: {
    host: 'ORLAN2022',
    port: 27017,
    version: '8.3.1',
    gitVersion: '094e631246d5b5bee5bd5f20b12f882bc8e286ea'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
db.clientes.createIndex({ nombre: 1 })
nombre_1
db.clientes.find({ nombre: "Pedro" }).explain("executionStats")
          nombre: [
            '["Pedro", "Pedro"]'
          ]
        },
        keysExamined: 1,
        seeks: 1,
        dupsTested: 0,
        dupsDropped: 0,
        peakTrackedMemBytes: 0
      }
    }
  },
  queryShapeHash: '21F6F3D3AC28DC46BEE1C29708F31371F81E08D146D974D3DDE71551408744B7',
  command: {
    find: 'clientes',
    filter: {
      nombre: 'Pedro'
    },
    '$db': 'usuarioUNAB'
  },
  serverInfo: {
    host: 'ORLAN2022',
    port: 27017,
    version: '8.3.1',
    gitVersion: '094e631246d5b5bee5bd5f20b12f882bc8e286ea'
  },
  serverParameters: {
    internalQueryFacetBufferSizeBytes: 104857600,
    internalDocumentSourceGroupMaxMemoryBytes: 104857600,
    internalQueryMaxBlockingSortMemoryUsageBytes: 104857600,
    internalDocumentSourceSetWindowFieldsMaxMemoryBytes: 104857600,
    internalQueryFacetMaxOutputDocSizeBytes: 104857600,
    internalLookupStageIntermediateDocumentMaxSizeBytes: 104857600,
    internalQueryProhibitBlockingMergeOnMongoS: 0,
    internalQueryMaxAddToSetBytes: 104857600,
    internalQueryFrameworkControl: 'trySbeRestricted',
    internalQueryPlannerIgnoreIndexWithCollationForRegex: 1
  },
  ok: 1
}
db.clientes.getIndexes()
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { ciudad: 1 }, name: 'ciudad_1' },
  { v: 2, key: { ciudad: 1, edad: -1 }, name: 'ciudad_1_edad_-1' },
  { v: 2, key: { correo: 1 }, name: 'correo_1', unique: true },
  { v: 2, key: { nombre: 1 }, name: 'nombre_1' }
]
db.clientes.dropIndex("nombre_1")
{ nIndexesWas: 5, ok: 1 }
db.clientes.insertOne({ nombre: "Otro", ciudad: "Cali", edad: 30, correo: "pedro@gmail.com" })
MongoServerError: E11000 duplicate key error collection: usuarioUNAB.clientes index: correo_1 dup key: { correo: "pedro@gmail.com" }
usuarioUNAB
Selection deleted


