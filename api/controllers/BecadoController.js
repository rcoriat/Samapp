/**
 * BecadoController
 *
 * @description :: Server-side logic for managing becadoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    'new': function(req,res,err){
		Estudiante.findOne(req.param('estudiante'),function estudianteFounded(err,estudiante){
			if (err) return next(err);
			if (!estudiante) return next();
			res.view({
				estudiante:estudiante
			});
		});


	},

	create: function(req,res,next) {
		Becado.create(req.params.all(),function becadoCreado(err,becado) {
			if (err) return next(err);
			res.redirect('/estudiante/show/'+becado.estudiante);
		//res.view({
			//medico:medico
		//})

		});
	},

	 display: function(req, res){
		becado.query('SELECT Becado.disciplina from Becado INNER JOIN Estudiante on Becado.estudiante = ?',
		[estudiante],function(err, rawResults){
			if (err) {return res.serverError(err);}
			sails.log(rawResults);
		})

	}

	
};

