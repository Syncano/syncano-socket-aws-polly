import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import { config, lexiconNames, lexiconFile } from './util/testHelper';

describe('Get Lexicon', () => {
  it('returns information of requested celebrity', (done) => {
    run('putLexicon', {
      args: { lexiconName: lexiconNames.lexiconName2, content: lexiconFile() },
      config,
    }).then((response) => {
      run('getLexicon', {
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
    run('getLexicon', {
      args: {},
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
