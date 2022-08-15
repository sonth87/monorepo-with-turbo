const domain = process.env.DOMAIN;
const moduleFileName = 'remoteEntry.js';
const containerModule = {
    fileName: moduleFileName,
    name: 'container',
    get url() {
        return `/`;
    },
};

const appModule = {
    fileName: moduleFileName,
    name: 'app',
    get randomString() {
        return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    },
    get federationConfig() {
        return `${this.name}@${domain}/app-static/${this.fileName}?${this.randomString}`;
    },
};

const app1Module = {
    fileName: moduleFileName,
    name: 'app1',
    get randomString() {
        return [...Array(30)].map(() => Math.random().toString(36)[2]).join('');
    },
    get federationConfig() {
        return `${this.name}@${domain}/app1-static/${this.fileName}?${this.randomString}`;
    },
};

module.exports = {
    containerModule,
    appModule,
    app1Module
};