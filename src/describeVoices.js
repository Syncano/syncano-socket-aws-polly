import Syncano from 'syncano-server';
import Helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');
  const pollyHelper = new Helper(ctx.config);

  return pollyHelper
    .describeVoices(ctx.args.languageCode, ctx.args.nextToken)
    .then((data) => {
      response.json({
        message: 'Described Voice',
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
