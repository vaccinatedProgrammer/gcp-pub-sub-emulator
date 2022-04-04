 'use strict';
 
 const deleteTopic = async (pubSubClient, topicNameOrId) => {
    /**
     * TODO(developer): Uncomment the following line to run the sample.
     */
    // const topicName = 'my-topic';

    // Deletes the topic
    await pubSubClient.topic(topicNameOrId).delete();
    console.log(`Topic ${topicNameOrId} deleted.`);
  }

 const main = (projectId = 'YOUR_PROJECT_ID', topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID') => {
   // [START pubsub_delete_topic]
   /**
    * TODO(developer): Uncomment this variable before running the sample.
    */
   // const topicNameOrId = 'YOUR_TOPIC_NAME_OR_ID';
 
   console.log('productId =>', projectId);
   // Imports the Google Cloud client library
   const {PubSub} = require('@google-cloud/pubsub');
 
   // Creates a client; cache this for further use
   const pubSubClient = new PubSub({projectId});
 
 
   deleteTopic(pubSubClient, topicNameOrId).catch(console.error);
   // [END pubsub_delete_topic]
 }
 
 main(...process.argv.slice(2));