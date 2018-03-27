import Syncano from '@syncano/core';
import Helper from './util/helper';

export default (ctx) => {
  const { response } = new Syncano(ctx);
  const pollyHelper = new Helper(ctx.config);

  return pollyHelper
    .putLexicon(ctx.args.lexiconName, ctx.args.content)
    .then((data) => {
      response.json({
        statusCode: 200,
        message: 'Lexicon Saved',
      });
    })
    .catch((err) => {
      response.json({
        statusCode: err.statusCode || 400,
        code: err.code,
        message: err.message,
      });
    });
};
