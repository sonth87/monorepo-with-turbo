const moduleFileName = "remoteEntry.js";
const containerModule = {
  fileName: moduleFileName,
  name: "container",
  port: 3001,
  get url() {
    return `http://localhost:${this.port}/`;
  },
};

const cmsModule = {
  fileName: moduleFileName,
  name: "cms",
  port: 3002,
  get url() {
    return `http://localhost:${this.port}`;
  },
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}?${this.randomString}`;
  },
};

const adminSysModule = {
  fileName: moduleFileName,
  name: "adminSys",
  port: 3003,
  get url() {
    return `http://localhost:${this.port}`;
  },
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
  },
  get federationConfig() {
    return `${this.name}@${this.url}/${this.fileName}?${this.randomString}`;
  },
};

module.exports = {
  containerModule,
  cmsModule,
  adminSysModule,
};
