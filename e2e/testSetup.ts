import { cleanup, init } from "detox";
import adapter from "detox/runners/jest/adapter";

const config = require("../package.json").detox;

jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

beforeAll(async () => {
  await init(config, { launchApp: false, initGlobals: true });
});

beforeEach(async () => {
  await adapter.beforeEach();
});

afterAll(async () => {
  await adapter.afterAll();
  await cleanup();
});
