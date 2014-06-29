module.exports = function(express) {
	var api = express.Router();

	api.get('/sponge/:slug', function(req, res) {
		res.send('harro');
	});

	return api;
}