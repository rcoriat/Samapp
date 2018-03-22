/**
 * EstructuraController
 *
 * @description :: Server-side logic for managing estructuras
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function(req,res,err){
		Profesor.findOne(req.param('profesor'),function profesorFounded (err,profesor){
			if (err) return next(err);
			if (!profesor) return next();
			res.view({
				profesor:profesor
			});
		});


	},

	create: function(req,res,next) {
		Estructura.create(req.params.all(),function estructuraCreado(err,estructura) {
			if (err) return next(err);
			res.redirect('/profesor/show/'+estructura.profesor);

		});
    }
    

	
};

