import { Callback, Context } from 'aws-lambda';
import { HttpStatusCode } from '../constants';

export function spamMailFilter(event: any, context: Context, callback: Callback) {
  try {
    console.log('Spam filter');

    const sesNotification = event.Records[0].ses;
    console.log('SES Notification:\n', JSON.stringify(sesNotification, null, 2));

    if (
      sesNotification.receipt.spfVerdict.status === 'FAIL' ||
      sesNotification.receipt.dkimVerdict.status === 'FAIL' ||
      sesNotification.receipt.spamVerdict.status === 'FAIL' ||
      sesNotification.receipt.virusVerdict.status === 'FAIL'
    ) {
      console.log('Dropping spam');
      return callback(null, {
        statusCode: HttpStatusCode.UNAUTHORIZED,
        disposition: 'STOP_RULE_SET',
      });
    }

    callback(null, null);
  } catch (e) {
    callback(null, {
      statusCode: HttpStatusCode.OK,
      disposition: 'STOP_RULE_SET',
    });
  }
}
