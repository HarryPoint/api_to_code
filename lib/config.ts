import path from "path";
const argv = require("yargs").argv;
const dir = path.join(__dirname, "..", argv.dir);

type IServiceMap = {
  "masterdata-service": string;
  "plk-uaa-service": string;
};

type IServiceKey = keyof IServiceMap;

const apiMap: Record<string, IServiceMap> = {
  dev: {
    "masterdata-service": "http://47.108.135.148:16700",
    "plk-uaa-service": "http://47.108.135.148:18100",
  },
};

export default {
  dir,
  translateCache: path.join(dir, "translateCache.json"),
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  serviceMap: apiMap.dev,
};
