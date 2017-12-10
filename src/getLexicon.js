import Syncano from 'syncano-server';
import Helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');
  const pollyHelper = new Helper(ctx.config);

  return pollyHelper
    .getLexicon(ctx.args.lexiconName)
    .then((data) => {
      response.json({
        statusCode: 200,
        data,
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
