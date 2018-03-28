import { assert, expect } from 'chai';
import { run } from '@syncano/test';
import { config, lexiconNames, lexiconFile } from './util/testHelper';

describe('Get Lexicon', () => {
  it('returns information of requested celebrity', (done) => {
    run('put-lexicon', {
      args: { lexiconName: lexiconNames.lexiconName2, content: lexiconFile() },
      config,
    }).then((response) => {
      run('get-lexicon', {
        args: {
          lexiconName: lexiconNames.lexiconName2,
        },
        config,
      }).then((res) => {
        expect(res.data.data).to.not.be.empty;
        done();
      });
    });
  });

  it('returns an error message when no lexiconName is entered', (done) => {
    run('get-lexicon', {
      args: {},
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
