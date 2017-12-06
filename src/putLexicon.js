import AWS from 'aws-sdk';
import Syncano from 'syncano-server';
import helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');
  const pollyHelper = new helper(ctx.config);

  const putLexicon = pollyHelper.putLexicon(ctx.args.lexiconName, ctx.args.content);

  return putLexicon
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
