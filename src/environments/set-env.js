const {writeFileSync} = require('fs');

const target = './src/environments/environment.ts';
const file = `export const environment = {
  token: '${process.env.TOKEN}',
  name: '${process.env.NAME}',
  github: '${process.env.GITHUB}',
  linkedin: '${process.env.LINKEDIN}',
  email: '${process.env.EMAIL}',
};
`;

writeFileSync(target, file, {encoding: 'utf-8'});
console.log(`Env file generated at ${target}`);
