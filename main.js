require('dotenv').config()
const m3o = require('@m3o/m3o-node'),
  client = new m3o.Client({ token: process.env.MICRO_API_KEY })

async function main() {
    
    client.call('helloworld', 'Call', {
        "name": "alex"
      })
        .then(response => {
          console.log(response);
        });

}

main()