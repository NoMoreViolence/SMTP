const exampleRecords = {
  Records: [
    {
      eventSource: 'aws:ses',
      eventVersion: '1.0',
      ses: {
        mail: {
          timestamp: '2019-08-05T21:30:02.028Z',
          source: 'prvs=144d0cba7=sender@example.com',
          messageId: 'EXAMPLE7c191be45-e9aedb9a-02f9-4d12-a87d-dd0099a07f8a-000000',
          destination: ['recipient@example.com'],
          headersTruncated: false,
          headers: [
            {
              name: 'Return-Path',
              value: '<prvs=144d0cba7=sender@example.com>',
            },
            {
              name: 'Received',
              value:
                'from smtp.example.com [203.0.113.0]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id bsvpsoklfhu7u50iur7h0kk9a2ou0r7iexample for recipient@example.com; Mon, 05 Aug 2019 21:30:02 +0000 (UTC)',
            },
            {
              name: 'X-SES-Spam-Verdict',
              value: 'PASS',
            },
            {
              name: 'X-SES-Virus-Verdict',
              value: 'PASS',
            },
            {
              name: 'Received-SPF',
              value:
                'pass (spfCheck: domain of example.com designates 203.0.113.0 as permitted sender) client-ip=203.0.113.0; envelope-from=prvs=144d0cba42=sender@example.com; helo= smtp.example.com;',
            },
            {
              name: 'Authentication-Results',
              value: `amazonses.com; spf=pass (spfCheck: domain of example.com designates 203.0.113.0
                    as permitted sender) client-ip=203.0.113.0; envelope-from=prvs=144d0cba42=
                    sender@example.com; helo=smtp.example.com; dkim=pass header.i=@example.com; 
                    dmarc=none header.from=example.com;`,
            },
            {
              name: 'X-SES-RECEIPT',
              value: 'AEFBQUFBQUFBQUFHbFo0VU81VzVuYmRDNm51nhTVWpabDh6J4V2l5cG5PSHFtNzlBeUk90example',
            },
            {
              name: 'X-SES-DKIM-SIGNATURE',
              value: `a=rsa-sha256; q=dns/txt; b=Cm1emU30VcD6example=; c=relaxed/simple; s=6gbrjpgwjs
                    5zn6fwqknexample; d=amazonses.com; t=1567719002; v=1; bh=DSofsjAoUvyZj6YsBDP5en
                    pRO1otGb7Nes0Qexample=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:
                    Content-Type:X-SES-RECEIPT;`,
            },
            {
              name: 'DKIM-Signature',
              value: `v=1; a=rsa-sha256; c=relaxed/relaxed; d=example.com; i=@example.com; q=dns/txt; 
                    s=example12345; t=1567719001; x=1599255001; h=from:to:subject:date:message-id:
                    references:in-reply-to:mime-version; bh=sjAoUvyZj6YsBDP5enpRO1otGb7s0Qexample=; 
                    b=EQw2D4RLOW2IHE9OgfEA4WXp+AENJtaD2+63wmd5J+d+t/xoaiKUGClOS7WhpyOmlipryOz+iOhxU
                    v350xJIHjLTi9Jsnlw76mRK8o4770TaUz620joCVN21n4cxsrRZpv+1kS0EcAxaF30pmwlni+XT4ems
                    Vxn7zO0I8example=;`,
            },
            {
              name: 'Received',
              value: `from mail.example.com (mail.example.com [203.0.113.0]) by email-inbound-relay-
                    1d-9ec21598.us-east-1.example.com (Postfix) with ESMTPS id 57F83A2042 for 
                    <recipient@example.com>; Mon, 5 Aug 2019 21:29:58 +0000 (UTC)`,
            },
            {
              name: 'From',
              value: '"Doe, John" <sender@example.com>',
            },
            {
              name: 'To',
              value: '"recipient@example.com" <recipient@example.com>',
            },
            {
              name: 'Subject',
              value: 'This is a test',
            },
            {
              name: 'Thread-Topic',
              value: 'This is a test',
            },
            {
              name: 'Thread-Index',
              value: 'AQHVZDAaQ58yKI8q7kaAjkhC5stGexample',
            },
            {
              name: 'Date',
              value: 'Mon, 5 Aug 2019 21:29:57 +0000',
            },
            {
              name: 'Message-ID',
              value: '<F8098FDD-49A3-442D-9935-F6112example@example.com>',
            },
            {
              name: 'References',
              value: '<1FCED16B-F6B0-4506-A6F0-594DFexample@example.com>',
            },
            {
              name: 'In-Reply-To',
              value: '<1FCED16B-F6B0-4506-A6F0-594DFexample@example.com>',
            },
            {
              name: 'Accept-Language',
              value: 'en-US',
            },
            {
              name: 'Content-Language',
              value: 'en-US',
            },
            {
              name: 'X-MS-Has-Attach',
              value: '',
            },
            {
              name: 'X-MS-TNEF-Correlator',
              value: '',
            },
            {
              name: 'x-ms-exchange-messagesentrepresentingtype',
              value: '1',
            },
            {
              name: 'x-ms-exchange-transport-fromentityheader',
              value: 'Hosted',
            },
            {
              name: 'x-originating-ip',
              value: '[203.0.113.0]',
            },
            {
              name: 'Content-Type',
              value: 'multipart/alternative; boundary="_000_F8098FDD49A344F6112B195BDAexamplecom_"',
            },
            {
              name: 'MIME-Version',
              value: '1.0',
            },
            {
              name: 'Precedence',
              value: 'Bulk',
            },
          ],
          commonHeaders: {
            returnPath: 'prvs=144d0cba7=sender@example.com',
            from: ['"Doe, John" <sender@example.com>'],
            date: 'Mon, 5 Aug 2019 21:29:57 +0000',
            to: ['"recipient@example.com" <recipient@example.com>'],
            messageId: '<F8098FDD-49A3-442D-9935-F6112B195BDA@example.com>',
            subject: 'This is a test',
          },
        },
        receipt: {
          timestamp: '2019-08-05T21:30:02.028Z',
          processingTimeMillis: 1205,
          recipients: ['recipient@example.com'],
          spamVerdict: {
            status: 'PASS',
          },
          virusVerdict: {
            status: 'PASS',
          },
          spfVerdict: {
            status: 'PASS',
          },
          dkimVerdict: {
            status: 'PASS',
          },
          dmarcVerdict: {
            status: 'GRAY',
          },
          action: {
            type: 'Lambda',
            functionArn: 'arn:aws:lambda:us-east-1:123456789012:function:IncomingEmail',
            invocationType: 'Event',
          },
        },
      },
    },
  ],
};
