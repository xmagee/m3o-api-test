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
        // https://m3o.com/answer/overview
		client.call('answer', 'Question', {
            "query": query
        })
            .then(response => {
            console.log(response)
            })
    },

    Weather: async (location, days = 0) => {
        // https://m3o.com/weather/overview
        client.call('weather', 'Forecast', {
            "days": days,
            "location": location
        })
            .then(response => {
              console.log(response)
            })
    },
	
    IPGeolocation: async (ip) => {
        // https://m3o.com/ip/overview
        client.call('ip', 'Lookup', {
            "ip": ip
        })
            .then(response => {
              console.log(response)
            })
    }, 

    GenerateID: async (type) => {
        // https://m3o.com/id/overview
        // available types: uuid, shortid, snowflake, bigflake
        client.call('id', 'Generate', {
            "type": type
          })
            .then(response => {
                console.log(response)
            })
    }

}
