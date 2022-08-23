import { createClient } from 'redis';

const client = createClient({ url: 'redis://default:r3OrqRMn8y3IwYE7980Xe1vORpA01jn0@redis-12659.c135.eu-central-1-1.ec2.cloud.redislabs.com:12659' });

client.on('error', (err) => console.log('Redis experienced an error: ', err));
client.on("connect", () => console.log('Redis is connected'))
client.on("ready", () => console.log('Redis is ready'))

await client.connect();

export async function getData() {
    console.log(new Date());
    return await client.json.get('meal-plan');
}   