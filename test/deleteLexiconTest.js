import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import { config, lexiconNames, lexiconFile } from './util/testHelper';

describe('Delete Lexicon', () => {
  it('deletes requested Lexicon', (done) => {
    run('putLexicon', {
      args: { lexiconName: lexiconNames.lexiconName1, content: lexiconFile() },
      config,
    }).then((response) => {
      run('deleteLexicon', {
        args: {
          lexiconName: lexiconNames.lexiconName2,
        },
        config,
      }).then((response) => {
        assert.property(response.data, 'statusCode', 200);
        assert.property(response.data, 'message', 'Lexicon Deleted');
        done();
      });
    });
  });

  it('returns an error message when no lexiconName parameter is entered', (done) => {
    run('deleteLexicon', {
      args: {},
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
