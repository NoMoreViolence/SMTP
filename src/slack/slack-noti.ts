import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';
import dayjs from 'dayjs';

const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://whitehouse.com';

export function slackNoti(event: any, _context: Context, callback: Callback) {
  const webhook = new IncomingWebhook(webhookUrl, {
    channel: channel,
  });

  const { messageId, timestamp } = event.Records[0].ses.mail;
  const mailUrl = `${process.env.BUCKET_URL}${messageId}`;

  webhook.send(
    `[새로운 이메일이 도착했습니다.] ${dayjs(new Date(timestamp).toISOString()).format(
      'YYYY.MM.DD hh.mm a'
    )}\n이메일 링크: ${mailUrl}\n링크를 클릭해 메일을 다운받으신 후, 메일 확장자를 .eml로 변경하게 되면 메일을 읽을 수 있게 됩니다.`
  );

  callback(null, null);
}
