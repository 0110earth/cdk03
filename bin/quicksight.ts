import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { QuicksightStack } from "../lib/stack/quicksight-stack";
import { devParameter } from "../parameter";
const app = new cdk.App();

new QuicksightStack(app, "example", {
  description: "example (tag:example)",
  env: {
    account: devParameter.env?.account || process.env.CDK_DEFAULT_ACCOUNT,
    region: devParameter.env?.region || process.env.CDK_DEFAULT_REGION,
  },
  tags: {
    Environment: devParameter.envName,
  },
});
