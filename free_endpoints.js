const m3o = require('@m3o/m3o-node'),
	client = new m3o.Client({ token: process.env.MICRO_API_KEY })
    
module.exports = {

    HelloWorld: async (name) => {
        // https://m3o.com/helloworld/overview
        client.call('helloworld', 'Call', {
            "name": name
        })
            .then(response => {
                console.log(response);
            });
    },
    	 
	Answer: async (query) => {
        //https://m3o.com/answer/overview
		client.call('answer', 'Question', {
			"query": query
		})
			.then(response => {
			console.log(response);
			});
    },
	
}
