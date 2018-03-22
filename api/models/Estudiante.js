/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  
  autoCreatedAt: false,
 	autoUpdatedAt: false,
  attributes: {

    id:{
      type: 'integer',
       primaryKey: true,
      autoIncrement:true
    },

  	cedula: {
  		type: 'integer',
  		required: true,
  		defaultsTo: '25012664'
  	
    },
  

  	nombre: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Alejandro'
  		
  	},

  	apellido: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'Gutierrez'
  		
  		
  	},

  	email: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'elguti@hotmail.com'
  		
  		
  	},

  	  telefono: {
  		type: 'float',
  		required: true,
  		defaultsTo: '02123212132'
  		
  		
  	},

  	  carrera: {
  		type: 'string',
  		required: true,
  		defaultsTo: 'IngProduccion'
  		
    },
    
    becado:{
      collection: 'becado',
      via:'estudiante'
    },

    seleccion:{
      collection: 'seleccion',
      via:'estudiante'
    }



  }
};