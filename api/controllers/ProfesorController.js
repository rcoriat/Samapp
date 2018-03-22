/**
 * ProfesorController
 *
 * @description :: Server-side logic for managing profesors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res){
		console.log('entra al registro est');
		res.view();
	},


    
    create: function(req,res,next) {
		Profesor.create(req.params.all(),function profesorCreado(err,profesor) {
			if (err) return next(err);
			res.redirect('/profesor/show/'+profesor.id);

		});
	},

	show: function(req, res, next){
		Profesor.findOne(req.param('id')).populateAll().exec(function(err,profesor){
			if(err) return next(err);
			if(!profesor) return next();
			res.view({
				profesor: profesor

			});
		});


	},

	menu: function(req,res,next){
        Profesor.findOne({cedula:req.param('cedulaProfesor')}).exec(function(err,profesor){
            if(err){
                return res.json(500,{error: 'Some error ocurred'});
                sails.log('El ID introducido no existe en la BD');
            }
            sails.log(profesor)
           res.view({
        	profesor:profesor
           });
        })
	},



	edit: function(req,res,next){
		//body
		Profesor.findOne(req.param('id'), function profesorFounded(err,profesor) {
			if (err)
				return next(err);
			if(!profesor)
				return next();
			res.view({
				profesor: profesor
			});

		});
	},

 
    update:function(req,res,next){
		Profesor.update(req.param('id'),req.params.all(),function profesorUpdated(err){
			if (err){
				return res.redirect('/profesor/edit/'+req.param('id'));
			}
			res.redirect('/profesor/show/'+req.param('id'));
		});
	},


	index: function(req, res, next){
		Profesor.find(function profesorFounded(err, profesor){
			if(err){
				console.log(err);
				return next(err);
			}
			res.view({
				profesor: profesor
			});
			
		});

	},

	destroy: function(req, res, next){
		Profesor.destroy(req.param('id'),function profesorDestroyed(err, profesor){
			if(err){
				console.log(err);
				return next(err);
			}
			res.redirect('/profesor/index');
			
		});

	}	
	
};

