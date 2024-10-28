import { Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { CfnBucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import * as iam from "aws-cdk-lib/aws-iam";

export interface QuicksightStackProps extends StackProps {}

export class QuicksightStack extends Stack {
  constructor(scope: Construct, id: string, props: QuicksightStackProps) {
    super(scope, id, props);

    // S3バケットの作成
    const dataBucket = new CfnBucket(this, "DataBucket", {
      bucketName: "my-data-visualization-bucket",
    });

    new cdk.CfnOutput(this, "BucketName", {
      value: dataBucket.ref,
    });

    // Create IAM Role for QuickSight to access S3
    const quickSightRole = new iam.Role(this, "QuickSightS3AccessRole", {
      assumedBy: new iam.ServicePrincipal("quicksight.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName("AmazonS3ReadOnlyAccess"),
      ],
    });
  }
}
