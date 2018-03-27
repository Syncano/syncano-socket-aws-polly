import { expect } from 'chai';
import { run } from '@syncano/test';
import { config } from './util/testHelper';

describe('List Lexicon', () => {
  it('list all lexicon successfully', (done) => {
    run('list-lexicons', {
      config,
    }).then((response) => {
      expect(response.data.data)
        .to.have.property('Lexicons')
        .to.be.an('Array').that.is.not.empty;
      done();
    });
  });
});
