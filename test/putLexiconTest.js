import { assert } from 'chai';
import { run } from 'syncano-test';
import { config, lexiconNames, lexiconFile } from './util/testHelper';

describe('Put Lexicon', () => {
  it('saves lexicon successfully', (done) => {
    run('putLexicon', {
      args: { lexiconName: lexiconNames.lexiconName1, content: lexiconFile() },
      config,
    }).then((response) => {
      assert.property(response.data, 'message', 'Lexicon Saved');
      assert.property(response.data, 'statusCode', 200);
      done();
    });
  });

  it('saves lexicon successfully', (done) => {
    run('putLexicon', {
      args: { lexiconName: lexiconNames.lexiconName1 },
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'message', 'MissingRequiredParameter');
      done();
    });
  });
});
