const {PubSub} = require('@google-cloud/pubsub');
const Emulator = require('google-pubsub-emulator');


process.env.GCLOUD_PROJECT = 'pubsub-koodoo';

const options = {
    debug:true, // if you like to see the emulator output
    topics: [
        'projects/project-id/topics/topic-1' // automatically created topic
    ]
};

const emulator = new Emulator(options);

emulator.start();


async function quickstart(
    projectId = 'koodoo-007', // Your Google Cloud Platform project ID
    topicNameOrId = 'my-topic', // Name for the new topic to create
    subscriptionName = 'my-sub' // Name for the new subscription to create
  ) {
    // Instantiates a client
    const pubsub = new PubSub({projectId});
  
    // Creates a new topic
    const [topic] = await pubsub.createTopic(topicNameOrId);
    console.log(`Topic ${topic.name} created.`);
  
    // Creates a subscription on that new topic
    const [subscription] = await topic.createSubscription(subscriptionName);
  
    // Receive callbacks for new messages on the subscription
    subscription.on('message', message => {
      console.log('Received message:', message.data.toString());
    //   process.exit(0);
    });
  
    // Receive callbacks for errors on the subscription
    subscription.on('error', error => {
      console.error('Received error:', error);
      process.exit(1);
    });
  
    // Send a message to the topic
    topic.publish(Buffer.from('Test message!'));
  }

  process.on('unhandledRejection', err => {
    console.error(err.message);
    process.exitCode = 1;
  });
  
  quickstart(...process.argv.slice(2));
