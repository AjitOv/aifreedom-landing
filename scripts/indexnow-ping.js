#!/usr/bin/env node
/**
 * IndexNow bulk submitter.
 *
 * Reads every <loc> from sitemap.xml and submits the list to IndexNow
 * (Bing, Yandex, Naver, Seznam, Yep) so new/updated URLs get indexed
 * within hours instead of weeks.
 *
 * Usage:
 *   node scripts/indexnow-ping.js                 # submit everything in sitemap.xml
 *   node scripts/indexnow-ping.js /courses/ai-basics /Course   # submit specific paths
 *
 * The key file must stay accessible at:
 *   https://www.aifreedom.in/e4d3f2a1-b5c6-7d8e-9f0a-1b2c3d4e5f6g.txt
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'www.aifreedom.in';
const KEY = 'e4d3f2a1-b5c6-7d8e-9f0a-1b2c3d4e5f6g';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function readSitemapUrls() {
  const xml = fs.readFileSync(path.join(__dirname, '..', 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1].trim());
}

function fromArgs() {
  return process.argv.slice(2).map(p => p.startsWith('http') ? p : `https://${HOST}${p.startsWith('/') ? p : '/' + p}`);
}

function postIndexNow(urlList) {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  });

  const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    },
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async function main() {
  const urls = process.argv.length > 2 ? fromArgs() : readSitemapUrls();
  if (!urls.length) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URL${urls.length === 1 ? '' : 's'} to IndexNow…`);
  urls.forEach(u => console.log('  •', u));

  const res = await postIndexNow(urls);
  console.log(`\nHTTP ${res.status}`);
  if (res.body) console.log(res.body);

  // IndexNow: 200/202 = accepted. 400 = bad URL. 403 = key mismatch. 422 = unprocessable.
  if (res.status === 200 || res.status === 202) {
    console.log('\n✓ Accepted. Bing/Yandex will crawl these within hours.');
  } else {
    console.log('\n⚠ Non-success status — check the key file is live at:', KEY_LOCATION);
    process.exit(1);
  }
})().catch(err => {
  console.error('Failed:', err);
  process.exit(1);
});
