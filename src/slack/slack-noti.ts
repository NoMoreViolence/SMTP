import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';
import aws from 'aws-sdk';
import parse from 'emailjs-mime-parser';

const bucketName = process.env.S3_BUCKET || 'wrong_bucket';
const s3 = new aws.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://whitehouse.com';
const webhook = new IncomingWebhook(webhookUrl, {
  channel: channel,
});

export async function slackNoti(event: any, context: Context, callback: Callback) {
  const eventObject = JSON.stringify(event.Records[0].ses.mail);
  const { messageId, timestamp, source } = event.Records[0].ses.mail;

  s3.getObject(
    {
      Bucket: bucketName,
      Key: messageId,
    },
    function (err, data) {
      if (err) {
        callback(null, null);
      } else {
        const emailMimeNode = parse(data.Body);
        webhook.send('테스트 메일임');
        webhook.send(eventObject);
        webhook.send(emailMimeNode);
        callback(null, null);
      }
    }
  );
}
