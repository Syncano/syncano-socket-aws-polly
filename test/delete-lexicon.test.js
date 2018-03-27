import { assert } from 'chai';
import { run } from '@syncano/test';
import { config, lexiconNames, lexiconFile } from './util/testHelper';

describe('Delete Lexicon', () => {
  it('deletes requested Lexicon', (done) => {
    run('put-lexicon', {
      args: { lexiconName: lexiconNames.lexiconName1, content: lexiconFile() },
      config,
    }).then(() => {
      run('delete-lexicon', {
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
    run('delete-lexicon', {
      args: {},
      config,
    }).then((response) => {
      assert.property(response.data, 'statusCode', 400);
      assert.property(response.data, 'code', 'MissingRequiredParameter');
      done();
    });
  });
});
