import Syncano from '@syncano/core';
import Helper from './util/helper';

export default (ctx) => {
  const { response } = new Syncano(ctx);
  const pollyHelper = new Helper(ctx.config);

  return pollyHelper
    .synthesizeSpeech(ctx.args.params)
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
