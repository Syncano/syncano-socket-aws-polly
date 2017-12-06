import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('Get Lexicon', () => {
  const config = helper.config;

  it('returns information of requested celebrity', (done) => {
    const lexiconPlsFile = helper.lexiconFile();
    run('putLexicon', {
      args: { lexiconName: helper.lexiconNames.lexiconName2, content: lexiconPlsFile },
      config,
    }).then((response) => {
      run('getLexicon', {
        args: {
          lexiconName: helper.lexiconNames.lexiconName2,
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
