/**
 * Seleccion.js
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
    disciplina:{
      type:'String',
      required:true,
 
    },

    peso:{
      type:'float',
      required:true,
 
    },

    altura:{
      type:'float',
      required:true,
 
    },

    estudiante:{
      model:'estudiante',
      required:true
 
    }


  }
};

