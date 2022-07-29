import dotenv from 'dotenv-safe';
import add from '@src/math/add';

dotenv.config();

console.log(add(1, 6));
console.log(process.env.MY_NAME);
