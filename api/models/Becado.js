/**
 * Becado.js
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
    tipo:{
      type:'String',
      required:true,
 
    },

    porcentaje:{
      type:'integer',
      required:true,
 
    },

    estudiante:{
      model:'estudiante',
      required:true
 
    }


  }
};

