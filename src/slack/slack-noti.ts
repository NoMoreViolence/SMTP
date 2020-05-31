import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';

const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://facebook.com';

export function slackNoti(event: any, context: Context, callback: Callback) {
  const message = JSON.stringify(event);

  const webhook = new IncomingWebhook(webhookUrl, {
    channel: channel,
  });
  webhook.send(message);

  return callback(null, null);
}
