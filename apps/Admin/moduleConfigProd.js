const domain = process.env.DOMAIN;
const moduleFileName = "remoteEntry.js";
const containerModule = {
  fileName: moduleFileName,
  name: "container",
  get url() {
    return `/`;
  },
};

const cmsModule = {
  fileName: moduleFileName,
  name: "cms",
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
  },
  get federationConfig() {
    return `${this.name}@${domain}/cms-static/${this.fileName}?${this.randomString}`;
  },
};

const adminSysModule = {
  fileName: moduleFileName,
  name: "adminSys",
  get randomString() {
    return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
  },
  get federationConfig() {
    return `${this.name}@${domain}/adminSys-static/${this.fileName}?${this.randomString}`;
  },
};

module.exports = {
  containerModule,
  cmsModule,
  adminSysModule,
};
