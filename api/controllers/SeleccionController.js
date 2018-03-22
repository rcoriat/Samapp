/**
 * SeleccionController
 *
 * @description :: Server-side logic for managing seleccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	'new': function(req,res,err){
		Estudiante.findOne(req.param('estudiante'),function estudianteFounded (err,estudiante){
			if (err) return next(err);
			if (!estudiante) return next();
			res.view({
				estudiante:estudiante
			});
		});


	},

	create: function(req,res,next) {
		Seleccion.create(req.params.all(),function seleccionCreado(err,seleccion) {
			if (err) return next(err);
			res.redirect('/estudiante/show/'+seleccion.estudiante);

		});
    }
    



};
