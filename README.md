# aws-polly
[![CircleCI](https://circleci.com/gh/Syncano/syncano-socket-aws-polly.svg?style=svg)](https://circleci.com/gh/Syncano/syncano-socket-aws-polly)

`version:` **0.0.1**

Amazon Polly Integration

To install, run:

```
syncano-cli add aws-polly
```

## Config

| Name | Required | Description | Info
| ---- | -------- | ----------- | ----
| AWS_ACCESS_KEY_ID | true | AWS Access Key | To find the key, log into your AWS account to get it 
| AWS_SECRET_ACCESS_KEY | true | AWS Access Secret Key | To find the key, log into your AWS account to get it 
| region | true | Region | On your AWS Console, search for Polly to check supported regions and select one (e.g, us-east-1 ) 

## Endpoints

### deleteLexicon

Deletes the specified pronunciation lexicon stored in an AWS Region.

#### Parameters

| name | type | description | example
| ---- | ---- | ----------- | -------
| lexiconName | string | The name of the lexicon to delete. Must be an existing lexicon in the region. | Example



#### Response

mimetype: `application/json`

##### Success `200`

```
{
"statusCode": 200,
"message": "Lexicon Deleted"
}
```

##### Failed `400`

```
{
  "statusCode": 404,
  "code": "LexiconNotFoundException",
  "message": "Lexicon not found"
}
```

### describeVoices

Returns the list of voices that are available for use when requesting speech synthesis.

#### Parameters

| name | type | description | example
| ---- | ---- | ----------- | -------
| languageCode | string | Language identification tag for filtering the list of voices returned (Optional) | en-US
| nextToken | string | An opaque pagination token returned from the previous `DescribeVoices` operation. | opaqueToken



#### Response

mimetype: `application/json`

##### Success `200`

```
{
 "message": "Described Voice",
  "data": {
            "Voices": []
          }
}
```

##### Failed `400`

```
{
 "statusCode": 400,
 "code": "ValidationException",
 "message": "1 validation error detected"
}
```

### getLexicon

Returns the content of the specified pronunciation lexicon stored in an AWS Region

#### Parameters

| name | type | description | example
| ---- | ---- | ----------- | -------
| lexiconName | string | Name of the lexicon. | Example



#### Response

mimetype: `application/json`

##### Success `200`

```
{
"statusCode": 200,
"data": {
          "Lexicon": {}
        }
}
```

##### Failed `400`

```
{
  "statusCode": 404,
  "code": "LexiconNotFoundException",
  "message": "Lexicon not found"
}
```

### listLexicons

Returns a list of pronunciation lexicons stored in an AWS Region.

#### Parameters

| name | type | description | long_description | example
| ---- | ---- | ----------- | ---------------- | -------
| nextTokens | string | Pagination token | An opaque pagination token returned from previous ListLexicons operation. (Optional)  | token



#### Response

mimetype: `application/json`

##### Success `200`

```
{
"message": "List of Lexicons"
"data": {
          "Lexicons": []
        }
}
```

##### Failed `400`

```
{
  "detail": "Not found."
}
```

### putLexicon

Stores a pronunciation lexicon in an AWS Region.

#### Parameters

| name | type | description | example
| ---- | ---- | ----------- | -------
| lexiconName | string | Name of the lexicon -  name is case sensitive | Example
| content | string | Content of the PLS lexicon | Check PSL for its text format.



#### Response

mimetype: `application/json`

##### Success `200`

```
{
"StatusCode": 200
"message": "Lexicon Saved"
}
```

##### Failed `400`

```
{
  "statusCode": 400,
  "code": "MissingRequiredParameter",
  "message": "Missing required key 'Content' in params"
}
```

### synthesizeSpeech

Synthesizes UTF-8 input, plain text or SSML, to a stream of bytes.

#### Parameters

| name | type | description | example
| ---- | ---- | ----------- | -------
| params | object | First name of the person you want to greet | {"params":   { "OutputFormat": "pcm",     "VoiceId": "Raveena",     "Text": "text"     }   } 



#### Response

mimetype: `application/json`

##### Success `200`

```
{
msg: "Text converted",
data: {}
}
```

##### Failed `400`

```
{
  "statusCode": 400,
  "code": "MissingRequiredParameter",
  "message": "Missing required key 'Text' in params"
}
```

### Contributing

#### How to Contribute
  * Fork this repository
  * Clone from your fork
  * Make your contributions (Make sure your work is well tested)
  * Create Pull request from the fork to this repo

#### Setting up environment variables
  * Ensure [direnv](https://direnv.net/) is setup on local system.
  * Create a `.envrc` on parent folder
  * Copy contents of `.envrc.default` file to newly created `.envrc` file and assign appropriate values to the listed variables.

#### Testing
  * Ensure all your test are written on the `test` directory
  * Use the command `npm test` to run test
