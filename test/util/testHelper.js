import path from 'path';
import fs from 'fs';

const helper = {
  config: {
    region: process.env.region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },

  lexiconNames: {
    lexiconName1: 'Example',
    lexiconName2: 'Test',
  },

  params: {
    OutputFormat: 'pcm',
    VoiceId: 'Raveena',
    Text: 'text',
  },

  incompleteParams: {
    OutputFormat: 'pcm',
    VoiceId: 'Raveena',
  },

  lexiconFile() {
    const filepath = path.join(__dirname, '../util/lexiContent.pls');
    const fileContent = fs.readFileSync(filepath, 'utf8');
    return fileContent;
  },
};

export default helper;
