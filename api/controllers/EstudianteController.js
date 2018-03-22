/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res){
		console.log('entra al registro est');
		res.view();
	},


    
    create: function(req,res,next) {
		Estudiante.create(req.params.all(),function estudianteCreado(err,estudiante) {
			if (err) return next(err);
			res.redirect('/estudiante/show/'+estudiante.id);

		});
	},


	show: function(req, res, next){
		Estudiante.findOne(req.param('id')).populateAll().exec(function(err,estudiante){
			if(err) return next(err);
			if(!estudiante) return next();
			console.log(estudiante)
			res.view({
				estudiante: estudiante

			});
		});


	},



	menu: function(req,res,next){
        Estudiante.findOne({cedula:req.param('cedulaEstudiante')}).exec(function(err,estudiante){
            if(err){
                return res.json(500,{error: 'Some error ocurred'});
                sails.log('El ID introducido no existe en la BD');
            }
            sails.log(estudiante)
           res.view({
        	estudiante:estudiante
           });
        })
	},


	edit: function(req,res,next){
		//body
		Estudiante.findOne(req.param('id'), function estudianteFounded(err,estudiante) {
			if (err)
				return next(err);
			if(!estudiante)
				return next();
			res.view({
				estudiante: estudiante
			});

		});
	},

 
    update:function(req,res,next){
		Estudiante.update(req.param('id'),req.params.all(),function estudianteUpdated(err){
			if (err){
				return res.redirect('/estudiante/edit/'+req.param('id'));
			}
			res.redirect('/estudiante/show/'+req.param('id'));
		});
	},


	index: function(req, res, next){
		Estudiante.find(function estudianteFounded(err, estudiante){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				estudiante: estudiante
			});
			
		});

	},

	destroy: function(req, res, next){
		Estudiante.destroy(req.param('id'),function estudianteDestroyed(err, estudiante){
			if(err){
				console.log(err);
				return next(err);
			}
			res.redirect('/estudiante/index');
			
		});

	}	
	
};

