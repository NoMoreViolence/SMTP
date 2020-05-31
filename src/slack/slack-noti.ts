import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';
import * as aws from 'aws-sdk';
import parse from 'emailjs-mime-parser';

const bucketName = process.env.S3_BUCKET || 'wrong_bucket';
const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://whitehouse.com';

export async function slackNoti(event: any, context: Context, callback: Callback) {
  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
  const webhook = new IncomingWebhook(webhookUrl, {
    channel: channel,
  });

  const eventObject = JSON.stringify(event.Records[0].ses.mail);
  const { messageId, timestamp, source } = event.Records[0].ses.mail;

  await webhook.send('메일 송 수신 테스트 시작');
  await webhook.send(messageId);

  s3.getObject(
    {
      Bucket: bucketName,
      Key: messageId,
    },
    async function (err, data) {
      if (err) {
        await webhook.send(`
          S3에서 데이터를 받아오지 못했습니다.
          로그 정보:
            bucketName: ${bucketName}
            messageId: ${messageId}
        `);
        callback(err);
      } else {
        await webhook.send(`S3에서 데이터를 불러오는 데 성공했습니다.`);
        await webhook.send(data.Body?.toString() ?? '');

        try {
          const emailMimeNode = parse(data.Body);
          await webhook.send(`모든 작업 성공`);
          await webhook.send(eventObject);
          await webhook.send(emailMimeNode);
          callback(null, null);
        } catch (e) {
          await webhook.send(`mime parse failed`);
          callback(null, null);
        }
      }
    }
  );
}
