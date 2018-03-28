# Syncano Socket aws-polly

[![CircleCI](https://circleci.com/gh/Syncano/syncano-socket-aws-polly/tree/master.svg?style=svg)](https://circleci.com/gh/Syncano/syncano-socket-aws-polly/tree/master)

Amazon Polly is a Text-to-Speech (TTS) cloud service that converts text into lifelike speech.

### Current Features

AWS-polly features the following actions

| Action           | Description                                                                             |
| ---------------- | --------------------------------------------------------------------------------------- |
| deleteLexicon    | Deletes the specified pronunciation lexicon stored in an AWS Region.                    |
| describeVoices   | Returns the list of voices that are available for use when requesting speech synthesis. |
| getLexicon       | Returns the content of the specified pronunciation lexicon stored in an AWS Region      |
| listLexicons     | Returns a list of pronunciation lexicons stored in an AWS Region.                       |
| putLexicon       | Stores a pronunciation lexicon in an AWS Region.                                        |
| synthesizeSpeech | Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.                      |

For more information, lookup [Amazon Polly API Reference](https://docs.aws.amazon.com/polly/latest/dg/API_Reference.html)

### Installation

```
syncano-cli add aws-polly
```

### Configuration

To use this socket, you will need an AWS account and credentials. Ensure your credentials corresponds with the folllowing below:

```
AWS_ACCESS_KEY_ID="myAccessKey"
AWS_SECRET_ACCESS_KEY="mySecretKey"
region=us-east-1
```

Configuration values can be set on command line when you run

```
syncano-cli deploy aws-polly
```

## Socket Documentation

To view socket endpoints and corresponding parameters, kindly, visit [here](https://syncano.io/#/sockets/aws-polly)

### Contributing

#### How to Contribute

* Fork this repository
* Clone from your fork
* Make your contributions (Make sure your work is well tested)
* Create Pull request from the fork to this repo

#### Setting up environment variables

* Create a `.envrc` on parent folder
* Copy contents of `.envrc.default` file to newly created `.envrc` file and assign appropriate values to the listed variables.

#### Testing

* Ensure all your test are written on the `test` directory
* Use the command `npm test` to run test
