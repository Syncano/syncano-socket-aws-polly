import AWS from 'aws-sdk';
import Syncano from 'syncano-server';
import helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');
  const pollyHelper = new helper(ctx.config);

  const describeVoices = pollyHelper.describeVoices(ctx.args.languageCode, ctx.args.nextToken);

  return describeVoices
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
