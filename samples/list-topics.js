 'use strict';

 const listAllTopics = async (pubSubClient) => {
    // Lists all topics in the current project
    const [topics] = await pubSubClient.getTopics();
    console.log('Topics:');
    topics.forEach(topic => console.log(topic.name));
  }

 const main = (projectId) => {
   // [START pubsub_list_topics]
   // Imports the Google Cloud client library
   const {PubSub} = require('@google-cloud/pubsub');
 
   // Creates a client; cache this for further use
   const pubSubClient = new PubSub({projectId});
 
   listAllTopics(pubSubClient).catch(console.error);
   // [END pubsub_list_topics]
 }
 
 main(...process.argv.slice(2));