[![Koodoo](https://avatars2.githubusercontent.com/u/44973825?s=200&v=4)](https://github.com/KoodooHQ)

# gcp-pub-sub-emulator 

The purpose of this repository is to test apps locally with the pub/sub emulator.

To develop and test your application locally, you can use the this Pub/Sub emulator, which provides local emulation of the production Pub/Sub service.

To run your application against the emulator, you first need to start the emulator and set environment variables so that your application communicates with the emulator instead of the production Pub/Sub service. The resources created and messages published to the emulator are maintained for the lifetime of the emulator session.

## Install and run emulator
### Prerequisites

- You must have the following to use the Pub/Sub emulator:

- Properly set up python development environment. Refer to [this guide](https://cloud.google.com/python/docs/setup) for details.

- Java JRE (version 7 or higher) installed.

- [Google Cloud CLI](https://cloud.google.com/sdk/docs) installed.

- An application that is built using the [Google Cloud Client Libraries](https://cloud.google.com/pubsub/docs/reference/libraries#gcloud-libraries). <br> **Note** - This repository using `nodeJs` client library

### Installing the emulator
Install the emulator from a command prompt:
```
gcloud components install pubsub-emulator
gcloud components update
```

### Starting the emulator
Start the emulator by invoking pubsub start from a command prompt.

```
gcloud beta emulators pubsub start
```

After you start the emulator, you should see a message that resembles the following:

```
...
[pubsub] This is the Pub/Sub fake.
[pubsub] Implementation may be incomplete or differ from the real system.
...
[pubsub] INFO: Server started, listening on 8085
```
This indicates that the Pub/Sub server runs at the emulator endpoint on your local machine instead of the Google Cloud endpoint. All operations happen locally, including:

- Creating a topic or subscription
- Publishing
- Subscribing

### Setting environment variables

After you start the emulator, you need to set environment variables so that your application connects to the emulator instead of Pub/Sub. Set these environment variables on the same machine that you use to run your application.

#### Automatically setting the variables
```
$(gcloud beta emulators pubsub env-init)
```

### Using the emulator
If you reach till here without any issues, then now er are going to use the emulator by running 
- `npm run quick-start`

**Note** - Make sure before running this command you have set the variables using `$(gcloud beta emulators pubsub env-init)` 

`npm run quick-start` command basically does the following things:

- start emulator
- create topic
- create subscription
- sends message to the topic

You can pass `projectId`, `topicNameOrId`, `subsriptionName`.

ex - `npm run quick-start koodoo-007 my-topic my-sub` 

here `koodoo-007` is project Id, `my-topic` is topic name and `my-sub` is subsription name

After executing the `node start.js koodoo-007 my-topic my-sub` command you should see the message that resembles the following
```
...
Topic projects/koodoo-007/topics/my-topic created.
Received message: Test message!
...
...
...
stderr: [pubsub] This is the Google Pub/Sub fake.

stderr: [pubsub] Implementation may be incomplete or differ from the real system.

stderr: [pubsub] Apr 04, 2022 1:08:29 PM com.google.cloud.pubsub.testing.v1.Main main
```

### Listing down few more commands to play with
-  `npm run publish-message`
-  `npm run list-topics`
-  `npm run list-subscriptions`
-  `npm run delete-topic`
-  `npm run delete-subscription`

**Note** - Make sure you are passing `projectId` along with the above commands

### References
Testing apps locally with the emulator - [Google Doc](https://cloud.google.com/pubsub/docs/emulator)

There are few more samples that you can checkout
https://github.com/googleapis/nodejs-pubsub#samples