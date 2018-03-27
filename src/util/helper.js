import AWS from 'aws-sdk';

/** Class respresenting AWS rekognition actions */
class Helper {
  /**
   * Constructs a service object for each API operation
   *
   * @param {Object} configDetails - Contains the AWS configuration parameters
   */
  constructor(configDetails) {
    const { region, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = configDetails;
    this.polly = new AWS.Polly({
      region,
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    });
  }

  deleteLexicon(lexiconName) {
    try {
      return this.polly.deleteLexicon({ Name: lexiconName }).promise();
    } catch (err) {
      return Promise.reject(err);
    }
  }

  describeVoices(languageCode, nextToken) {
    try {
      return this.polly
        .describeVoices({
          LanguageCode: languageCode || null,
          NextToken: nextToken || null,
        })
        .promise();
    } catch (err) {
      return promise.reject(err);
    }
  }

  getLexicon(lexiconName) {
    try {
      return this.polly
        .getLexicon({
          Name: lexiconName,
        })
        .promise();
    } catch (err) {
      return promise.reject(err);
    }
  }

  listLexicons(nextToken) {
    try {
      return this.polly
        .listLexicons({
          NextToken: nextToken,
        })
        .promise();
    } catch (err) {
      return promise.reject(err);
    }
  }

  putLexicon(lexiconName, content) {
    try {
      return this.polly
        .putLexicon({
          Name: lexiconName || null,
          Content: content,
        })
        .promise();
    } catch (err) {
      return promise.reject(err);
    }
  }

  synthesizeSpeech(params) {
    try {
      return this.polly.synthesizeSpeech(params).promise();
    } catch (error) {
      return promise.reject(error);
    }
  }
}

export default Helper;
