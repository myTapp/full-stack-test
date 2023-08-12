const axios = require('axios');

exports.index = async (request, response, next) => {
	try {
		const beer = await axios.get(`${process.env.PUNK_API}`, {
			params: request.query,
		});
		return response.status(beer.status).json(beer.data);
	} catch (err) {
		console.log(err);
	}
};

exports.find = async (request, response, next) => {
	try {
		const beer = await axios.get(`${process.env.PUNK_API + '/'}${request.params.id}`);
		return response.status(beer.status).json(beer.data);
	} catch (err) {
		console.log(err);
	}
};

exports.random = async (request, response, next) => {
	try {
		const beer = await axios.get(`${process.env.PUNK_API + '/random'}`, {
			params: request.query,
		});
		return response.status(beer.status).json(beer.data);
	} catch (err) {
		console.log(err);
	}
};
