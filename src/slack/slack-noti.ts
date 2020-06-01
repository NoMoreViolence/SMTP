import { App } from '@slack/bolt';
import { IncomingWebhook } from '@slack/client';
import { Callback, Context } from 'aws-lambda';
import aws from 'aws-sdk';
import dayjs from 'dayjs';
import * as fs from 'fs';

const signingSecret = process.env.SIGNING_SECRET || 'mkit';
const bucket = process.env.S3_BUCKET_ID || 'justhis';
const accessKeyId = process.env.ACCESS_KEY_ID || 'giriboy';
const secretAccessKey = process.env.SECRET_ACCESS_KEY || 'nafla';
const slackBotToken = process.env.SLACK_BOT_TOKEN || '2pac';
const channel = process.env.SLACK_CHANNEL || '#random';
const webhookUrl = process.env.SLACK_END_POINT || 'https://whitehouse.com';

export function slackNoti(event: any, _context: Context, callback: Callback) {
  try {
    const s3 = new aws.S3({
      accessKeyId,
      secretAccessKey,
    });
    const webhook = new IncomingWebhook(webhookUrl, {
      channel: channel,
    });
    const slackApp = new App({
      token: slackBotToken,
      signingSecret,
    });
    const { messageId, timestamp } = event.Records[0].ses.mail;

    const file = fs.createWriteStream(`./${timestamp}.eml`);
    const readStream = s3
      .getObject(
        {
          Bucket: bucket,
          Key: messageId,
        },
        async function (err, data) {
          if (err) {
            webhook.send('메일을 받았으나, 에러로 인해서 가져오지 못했습니다. :)');
            throw new Error('Bad request');
          }
        }
      )
      .createReadStream()
      .pipe(file);

    slackApp.client.files
      .upload({ channels: channel, token: slackBotToken, file: readStream })
      .then(() => {
        webhook.send(
          `[새로운 이메일이 도착했습니다.] ${dayjs(new Date(timestamp).toISOString()).format(
            'YYYY.MM.DD hh.mm A (+9)'
          )}\n첨부파일을 다운받으 신 후, 메일 확장자를 .eml로 변경하게 되면 메일을 읽을 수 있게 됩니다.`
        );
      })
      .finally(() => {
        callback(null, null);
      });
  } catch (e) {
    callback(null, null);
  }
}
