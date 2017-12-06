import { assert, expect } from 'chai';
import { run } from 'syncano-test';
import helper from './util/testHelper';

describe('List Lexicon', () => {
  const config = helper.config;

  it('list all lexicon successfully', (done) => {
    run('listLexicons', {
      config,
    }).then((response) => {
      expect(response.data.data)
        .to.have.property('Lexicons')
        .to.be.an('Array').that.is.not.empty;
      done();
    });
  });
});
