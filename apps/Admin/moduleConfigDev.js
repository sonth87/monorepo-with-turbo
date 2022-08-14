const moduleFileName = 'remoteEntry.js';
const containerModule = {
  fileName: moduleFileName,
  name: 'container',
  port: 3001,
  get url() {
    return `http://localhost:${this.port}/`;
  },
};

const appModule = {
  fileName: moduleFileName,
  name: 'app',
  port: 3002,
  get url() {
    return `http://localhost:${this.port}`;
  },
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}?${this.randomString}`;
  },
};

const app1Module = {
  fileName: moduleFileName,
  name: 'app1',
  port: 3003,
  get url() {
    return `http://localhost:${this.port}`;
  },
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}?${this.randomString}`;
  },
};

module.exports = {
  containerModule,
  appModule,
  app1Module
};