import express from 'express'
import {getServices,createService,getServiceById,updateService,deleteService} from '../controllers/ServicesController.js';

const router = express.Router()


//Definir ruta Agrupadas 
router.route('/')
    .post(createService)
    .get(getServices)

router.route('/:id')
    .get(getServiceById)
    .put(updateService)
    .delete(deleteService)


//rutas Directas sin agrupar
// router.get('/:id',getServices)
// router.post('/',createService)

// router.get('/:id',getServiceById)
// router.put('/:id',)
// router.delete('/:id',deleteService)

export default router;