require('dotenv').config()
const free_endpoints = require('./free_endpoints')

async function main() {
	//// uncomment one or more of these, then 'npm start': 

	//// free-to-use: 
	//free_endpoints.HelloWorld('alex')
	//free_endpoints.Answer('java programming language')
	//free_endpoints.Weather('New York City, NY')
	//free_endpoints.IPGeolocation('1.1.1.1')
	//free_endpoints.GenerateID('uuid')
    //free_endpoints.UrlShorten('https://xmagee.com')
	//free_endpoints.GetTimezone('New York City, NY')
	//free_endpoints.GetCurrentTime('New York City, NY')
	//free_endpoints.AnalyzeTextSentiment('english', 'this is very cool')
	//free_endpoints.AnalyzeTextSentiment('english', 'this is very stupid')
	//free_endpoints.GenerateOTP('x@y.z')
	free_endpoints.ValidateOTP('x@y.z', '327820')

}

main()