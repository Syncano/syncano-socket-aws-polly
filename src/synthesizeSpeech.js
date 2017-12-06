import AWS from 'aws-sdk';
import Syncano from 'syncano-server';

import helper from './util/helper';

export default (ctx) => {
  const { response, logger } = Syncano(ctx);

  const log = logger('Socket scope');

  const pollyHelper = new helper(ctx.config);

  const synthesizeSpeech = pollyHelper.synthesizeSpeech(ctx.args.params);

  return synthesizeSpeech
    .then((data) => {
      response.json({
        message: 'Text converted',
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
