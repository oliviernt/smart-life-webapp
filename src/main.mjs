import tuya from './libs/tuya.js';

const region = process.env.TUYA_REGION;
const username = process.env.TUYA_USERNAME;
const password = process.env.TUYA_PASSWORD;

const client = new tuya.HomeAssistantClient({region});

console.log('Logging into region', region);

await client.login(username, password, region)
  .then(() => {
    console.log('Logged in');
  })
  .catch((err) => {
    console.error('Failed to login', err);
  });

const devices = await client.deviceDiscovery();

console.log('Discovered devices', devices);
