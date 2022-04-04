'use strict';

const listSubscriptions = async (pubSubClient) => {
    // Lists all subscriptions in the current project
    const [subscriptions] = await pubSubClient.getSubscriptions();
    console.log('Subscriptions:');
    subscriptions.forEach(subscription => console.log(subscription.name));
  }

 const main = (projectId) => {
   // [START pubsub_list_subscriptions]
   // Imports the Google Cloud client library
   const {PubSub} = require('@google-cloud/pubsub');
 
   // Creates a client; cache this for further use
   const pubSubClient = new PubSub({projectId});
 
   listSubscriptions(pubSubClient).catch(console.error);
   // [END pubsub_list_subscriptions]
 }
 
 main(...process.argv.slice(2));