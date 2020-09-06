const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');


module.exports= function(){

    //agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente

    );
    //obtiene todos los registros de pacientes en la BD

    router.get('/pacientes',
        pacienteController.obtenerPacientes
    );

    //obtiene un paciente en especifico (ID)

    router.get('/pacientes/:id',
        pacienteController.obtenerPaciente
    );

    //actualizar registro con un ID especifico
    router.put('/pacientes/:id',
        pacienteController.actualizarPaciente
    )
    //elimina un paciente por su ID
    router.delete('/pacientes/:id',
        pacienteController.eliminarPaciente
    );



    return router;
}