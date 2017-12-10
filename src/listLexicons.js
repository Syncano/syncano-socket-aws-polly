import Syncano from 'syncano-server';
import Helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');

  const pollyHelper = new Helper(ctx.config);

  return pollyHelper
    .listLexicons(ctx.args.nextTokens)
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
