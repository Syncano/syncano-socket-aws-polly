import AWS from 'aws-sdk';
import Syncano from 'syncano-server';
import helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');

  const pollyHelper = new helper(ctx.config);

  const listLexicons = pollyHelper.listLexicons(ctx.args.nextTokens);

  return listLexicons
    .then((data) => {
      response.json({
        message: 'List of Lexicons',
        data,
      });
    })
    .catch((err) => {
      response.json({
        err,
      });
    });
};
