import foods from './foods';
import {choice, remove} from './helper';

let fruit = choice(foods);
console.log(`I'd like one, ${fruit}, please.`);
console.log(`Here you go: ${fruit}`);
console.log('Delicious! May I have another?')
let remainingFruit = remove(foods, fruit);
console.log(`I'm sorry, we're all out. We have ${remainingFruit.length} other fruit left.`);
console.log(`What are the other ${remainingFruit.length} left? `);
console.log(`It is ${remainingFruit}`);

