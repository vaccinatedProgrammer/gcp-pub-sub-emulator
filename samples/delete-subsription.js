 'use strict';

  const deleteSubscription = async (pubSubClient) => {
    // Deletes the subscription
    await pubSubClient.subscription(subscriptionNameOrId).delete();
    console.log(`Subscription ${subscriptionNameOrId} deleted.`);
  }

 const main = (projectId = 'YOUR_PROJECT_ID', subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID') => {
   // [START pubsub_delete_subscription]
   /**
    * TODO(developer): Uncomment this variable before running the sample.
    */
   // const subscriptionNameOrId = 'YOUR_SUBSCRIPTION_NAME_OR_ID';
 
   // Imports the Google Cloud client library
   const {PubSub} = require('@google-cloud/pubsub');
 
   // Creates a client; cache this for further use
   const pubSubClient = new PubSub({projectId});
 
   deleteSubscription(pubSubClient).catch(console.error);
   // [END pubsub_delete_subscription]
 }
 
 main(...process.argv.slice(2));