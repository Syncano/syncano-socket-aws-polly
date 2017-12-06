import { assert } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('Put Lexicon', () => {
  const config = helper.config;

  it('saves lexicon successfully', (done) => {
    const lexiconPlsFile = helper.lexiconFile();
    run('putLexicon', {
      args: { lexiconName: helper.lexiconNames.lexiconName1, content: lexiconPlsFile },
      config,
    }).then((response) => {
      assert.property(response.data, 'message', 'Lexicon Saved');
      assert.property(response.data, 'statusCode', 200);
      done();
    });
  });

  it('saves lexicon successfully', (done) => {
    run('putLexicon', {
      args: { lexiconName: helper.lexiconNames.lexiconName1 },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'message', 'MissingRequiredParameter');
      done();
    });
  });
});
