import { assert, expect } from 'chai';
import { run } from '@syncano/test';
import { config } from './util/testHelper';

describe('Describe Voices', () => {
  it('returns all voices when no languageCode is entered', (done) => {
    run('describe-voices', {
      config,
    }).then((response) => {
      expect(response.data.data)
        .to.have.property('Voices')
        .to.be.an('Array').that.is.not.empty;
      done();
    });
  });

  it('returns an error message if an invalid languageCode is entered', (done) => {
    run('describe-voices', {
      args: { languageCode: 'fake' },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'ValidationException');
      done();
    });
  });
});
