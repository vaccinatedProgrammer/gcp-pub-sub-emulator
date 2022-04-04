 'use strict';
 function main(
   topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID',
   projectId = 'test'
   ) {
   const data = JSON.stringify({foo: 'bar'})
   
   // Imports the Google Cloud client library
   const {PubSub} = require('@google-cloud/pubsub');
 
   // Creates a client; cache this for further use
   const pubSubClient = new PubSub({projectId});
 
   async function publishMessage() {
     // Publishes the message as a string, e.g. "Hello, world!" or JSON.stringify(someObject)
     const dataBuffer = Buffer.from(data);
 
     try {
       const messageId = await pubSubClient
         .topic(topicNameOrId)
         .publish(dataBuffer);
       console.log(`Message ${messageId} published.`);
     } catch (error) {
       console.error(`Received error while publishing: ${error.message}`);
       process.exitCode = 1;
     }
   }
 
   publishMessage();
 }
 
 process.on('unhandledRejection', err => {
   console.error(err.message);
   process.exitCode = 1;
 });

 main(...process.argv.slice(2));