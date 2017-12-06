import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('Delete Lexicon', () => {
  const config = helper.config;

  it('returns information of requested celebrity', (done) => {
    const lexiconPlsFile = helper.lexiconFile();
    run('putLexicon', {
      args: { lexiconName: helper.lexiconNames.lexiconName2, content: lexiconPlsFile },
      config,
    }).then((response) => {
      run('deleteLexicon', {
        args: {
          lexiconName: helper.lexiconNames.lexiconName2,
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
