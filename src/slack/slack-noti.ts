import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';
import * as aws from 'aws-sdk';
import { Base64 } from 'js-base64';

const bucketName = process.env.S3_BUCKET || 'wrong_bucket';
const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://whitehouse.com';

export function slackNoti(event: any, context: Context, callback: Callback) {
  const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  });
  const webhook = new IncomingWebhook(webhookUrl, {
    channel: channel,
  });

  const { messageId, timestamp, source } = event.Records[0].ses.mail;

  webhook.send('메일 송 수신 테스트 시작');
  webhook.send(messageId);

  s3.getObject(
    {
      Bucket: bucketName,
      Key: messageId,
    },
    function (err, data) {
      if (err) {
        webhook.send(`
          S3에서 데이터를 받아오지 못했습니다.
          로그 정보:
            bucketName: ${bucketName}
            messageId: ${messageId}
        `);
        return callback(err);
      } else {
        webhook.send(`S3에서 데이터를 불러오는 데 성공했습니다.`);
        try {
          webhook.send(`모든 작업 성공 :)`);
          webhook.send(JSON.stringify(data.Body?.toString()));
          webhook.send('-----------------------------------');
          webhook.send('-----------------------------------');
          webhook.send(JSON.parse(data.Body as string));

          return callback(null, null);
        } catch (e) {
          webhook.send(`mime 파일을 parse 하는 데 실패해서 메시지를 전송할 수 없습니다. :)`);
          return callback(e);
        }
      }
    }
  );
  return;
}
