const exampleRecords = {
  Records: [
    {
      eventSource: 'aws:ses',
      eventVersion: '1.0',
      ses: {
        mail: {
          timestamp: '2020-05-31T13:07:43.685Z',
          source: 'ljh86029926@gmail.com',
          messageId: 'a5aeouotrj56v5d2465cjo3333sreki11a51g9g1',
          destination: ['help@staging.cohope.io'],
          headersTruncated: false,
          headers: [
            {
              name: 'Return-Path',
              value: '<ljh86029926@gmail.com>',
            },
            {
              name: 'Received',
              value:
                'from mail-wr1-f49.google.com (mail-wr1-f49.google.com [209.85.221.49]) by inbound-smtp.us-east-1.amazonaws.com with SMTP id a5aeouotrj56v5d2465cjo3333sreki11a51g9g1 for help@staging.cohope.io; Sun, 31 May 2020 13:07:43 +0000 (UTC)',
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
                'pass (spfCheck: domain of _spf.google.com designates 209.85.221.49 as permitted sender) client-ip=209.85.221.49; envelope-from=ljh86029926@gmail.com; helo=mail-wr1-f49.google.com;',
            },
            {
              name: 'Authentication-Results',
              value:
                'amazonses.com; spf=pass (spfCheck: domain of _spf.google.com designates 209.85.221.49 as permitted sender) client-ip=209.85.221.49; envelope-from=ljh86029926@gmail.com; helo=mail-wr1-f49.google.com; dkim=pass header.i=@gmail.com; dmarc=pass header.from=gmail.com;',
            },
            {
              name: 'X-SES-RECEIPT',
              value:
                'AEFBQUFBQUFBQUFHVTVLc2NheDU3NDZTUjJ2WE5ZRmlkQk9hNEhiV1pqWjBPaVFDNjh2czF4SXp4QWhGZldHRHRXbGRzS285aS9VZEY5Um9yOXFEajNSVE9DMU1wc2xEQ2ZkRjVBQ3lXS0lxS1d0ZGdYN08zZlJTbUo1NmZwTlZNeklvNVpEaE0xaW9KYjZCMjZIdkEwNkRzVndCbHFhOUVjOVVHa2hNb2Q2S2I0c2NmbEdrNXdLNi9tS2VJaXFFeFFiWEZjUkxLZUd5eHpEVFNDRE5QTjduakNKM2xnbmZmQlJ6RU9kWENWbGpRdTRNUnFVSHVKbzVObDJvcEQwNko5ZkFROFUwSHRGdzNLeEdHRW80N2kvSVFxam9WczdjaXNuVnM2ZlBzS3N1elR5MjM0Vkh1SkE9PQ==',
            },
            {
              name: 'X-SES-DKIM-SIGNATURE',
              value:
                'a=rsa-sha256; q=dns/txt; b=e3baOOzeFwl+rWIUd2ETJE+vFnRD8LNhjXuY2rtI1x5l4cmplXJ6ONcFsY7SzhgLtceJcEVfCK1hIUsbuDjhDNDICFgnjxUphI/sbZ+CZ4k10hQqASS7+m08uPX65p70oPpNlysN0GNJ6sSf8HTuv3iUBytbHQOIMfTeKiNYrNc=; c=relaxed/simple; s=224i4yxa5dv7c2xz3womw6peuasteono; d=amazonses.com; t=1590930463; v=1; bh=RyFPnRPQv7Xx94NjnUx9KVvVKdlTXCk5MF1KElF4XKQ=; h=From:To:Cc:Bcc:Subject:Date:Message-ID:MIME-Version:Content-Type:X-SES-RECEIPT;',
            },
            {
              name: 'Received',
              value:
                'by mail-wr1-f49.google.com with SMTP id t18so8759880wru.6 for <help@staging.cohope.io>; Sun, 31 May 2020 06:07:43 -0700 (PDT)',
            },
            {
              name: 'DKIM-Signature',
              value:
                'v=1; a=rsa-sha256; c=relaxed/relaxed; d=gmail.com; s=20161025; h=mime-version:from:date:message-id:subject:to; bh=RyFPnRPQv7Xx94NjnUx9KVvVKdlTXCk5MF1KElF4XKQ=; b=vIJsU99Y+4KCC6afZzn++9O8BCSnX24mBCmCnsL/EhgDNG4caIR8MOiN/mowTXUhKr1cYr5WgQCbQRUAdLNBrLtbtQ3AOjY9gmaPFec38WkxcWla8imSaLZnadFJjyRiqpQZqHfsmFLen+joFZCj1LfY90FfEmauSjqhnqoLlAlu9im18hooPwUO402x2b0hSGeUzHqNUvGUzTF/tODMNADRk2i8DeFU+oUibRVU4A7LCFlsmqy/0aA5lsyCc43uAhuShe49s+iIqc4Vmk0EauqBqNlZtJWPCrGenT9BNEF8e+fNUe07OJzIxPlJVkZEA7iOYrP6OJlgd5aNsq0DCQ==',
            },
            {
              name: 'X-Google-DKIM-Signature',
              value:
                'v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20161025; h=x-gm-message-state:mime-version:from:date:message-id:subject:to; bh=RyFPnRPQv7Xx94NjnUx9KVvVKdlTXCk5MF1KElF4XKQ=; b=PDy19LvyT8fCIwcjUG3BLv7jsoGgoeOvSHw7cs/tcKSt7SxHFeGSQsK7cv9FZmfHhs jf18GhnudsjjyC/goNAhp3AZNBaV5ixrCDwayFhEkGye9OA4DAljAGHie1smO+kSWQK8 v5YSmnX2h9iHdodbFU1Oyy9RP5ioU/cdS2d3fG/9tG6xMoTm0z3o8ySk6u2L6sB6lJIB CDtHOT+FP998F7Ua5AFU40SjIUXU7UZhaGrWb77bPdLgt5veygP6mDmVJt4I6+srl8Z5 y20sGIVEWiBjCL6NU0T10pjclibvOfo3m1Acpg4z5+YBcDREFAHHHsCsBrp5c4ETenu8 TMkQ==',
            },
            {
              name: 'X-Gm-Message-State',
              value:
                'AOAM533+8l1H8YnmozJULMV2IPesTBzKqxS2TU0284Xcv1HAPi66JNdN hb0ypBEXz++egmM027nzz/qVz/k7giaBeAiTOQf32zbc',
            },
            {
              name: 'X-Google-Smtp-Source',
              value: 'ABdhPJz78qBhyEECjVt2o3GsFibtF6X/OTCsoH63KpMLdcsa1NBP4zTJX1QFk+1bB3t1Lm41frANVm1oqKicEQ0ZKBQ=',
            },
            {
              name: 'X-Received',
              value:
                'by 2002:a5d:4404:: with SMTP id z4mr16918209wrq.189.1590930462099; Sun, 31 May 2020 06:07:42 -0700 (PDT)',
            },
            {
              name: 'MIME-Version',
              value: '1.0',
            },
            {
              name: 'From',
              value: '이지훈 <ljh86029926@gmail.com>',
            },
            {
              name: 'Date',
              value: 'Sun, 31 May 2020 22:07:31 +0900',
            },
            {
              name: 'Message-ID',
              value: '<CAChFCHQVzYwzJs2YsT6_ExW_QPt1VZn-YMZHYJsE_pQmJdd5Uw@mail.gmail.com>',
            },
            {
              name: 'Subject',
              value: '이메일좀 받아라 씨발놈아',
            },
            {
              name: 'To',
              value: 'help@staging.cohope.io',
            },
            {
              name: 'Content-Type',
              value: 'multipart/alternative; boundary="0000000000000e4c1605a6f15dd4"',
            },
          ],
          commonHeaders: {
            returnPath: 'ljh86029926@gmail.com',
            from: ['"이지훈" <ljh86029926@gmail.com>'],
            date: 'Sun, 31 May 2020 22:07:31 +0900',
            to: ['help@staging.cohope.io'],
            messageId: '<CAChFCHQVzYwzJs2YsT6_ExW_QPt1VZn-YMZHYJsE_pQmJdd5Uw@mail.gmail.com>',
            subject: '이메일좀 받아라 씨발놈아',
          },
        },
        receipt: {
          timestamp: '2020-05-31T13:07:43.685Z',
          processingTimeMillis: 474,
          recipients: ['help@staging.cohope.io'],
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
            status: 'PASS',
          },
          action: {
            type: 'Lambda',
            functionArn: 'arn:aws:lambda:us-east-1:005100205869:function:slack-noti',
            invocationType: 'Event',
          },
        },
      },
    },
  ],
};
