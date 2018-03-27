import { assert, expect } from 'chai';
import { run } from '@syncano/test';
import { config, speechParams, incompleteParams } from './util/testHelper';

describe('Synthesize Speech', () => {
  it('returns an audio stream data when valid parameters are passed', (done) => {
    run('synthesize-speech', {
      args: { params: speechParams },
      config,
    }).then((response) => {
      expect(response.data.data).to.have.property('AudioStream');
      done();
    });
  });

  it('returns an error message if an expected parameter is missing', (done) => {
    run('synthesize-speech', {
      args: { params: incompleteParams },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
