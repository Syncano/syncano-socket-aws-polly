import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('Describe Voices', () => {
  const config = helper.config;

  it('returns all voices when no languageCode is entered', (done) => {
    run('describeVoices', {
      config,
    }).then((response) => {
      expect(response.data.data)
        .to.have.property('Voices')
        .to.be.an('Array').that.is.not.empty;
      done();
    });
  });

  it('returns an error message if an invalid languageCode is entered', (done) => {
    run('describeVoices', {
      args: { languageCode: 'fake' },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'ValidationException');
      done();
    });
  });
});
