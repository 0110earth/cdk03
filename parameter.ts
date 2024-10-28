import { Environment } from "aws-cdk-lib";

// Parameters for Application
export interface AppParameter {
  env?: Environment;
  envName: string;
}

// Example
export const devParameter: AppParameter = {
  envName: "Development",
};
