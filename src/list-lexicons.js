import Syncano from '@syncano/core';
import Helper from './util/helper';

export default (ctx) => {
  const { response } = new Syncano(ctx);
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
