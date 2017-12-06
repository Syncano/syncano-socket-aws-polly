import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('Synthesize Speech', () => {
  const config = helper.config;

  it('returns an audio stream data when valid parameters are passed', (done) => {
    run('synthesizeSpeech', {
      args: { params: helper.params },
      config,
    }).then((response) => {
      expect(response.data.data).to.have.property('AudioStream');
      done();
    });
  });

  it('returns an error message if an expected parameter is missing', (done) => {
    run('synthesizeSpeech', {
      args: { params: helper.incompleteParams },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
