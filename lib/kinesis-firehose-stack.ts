import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as kinesisfirehose from '@aws-cdk/aws-kinesisfirehose-alpha'
import * as destinations from '@aws-cdk/aws-kinesisfirehose-destinations-alpha'

export class KinesisFirehoseStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, 'kinesis-bucket')
  
    const s3Destination = new destinations.S3Bucket(bucket, {
    });

    const newFireHose = new kinesisfirehose.DeliveryStream(this, 'firehose',{
      destinations: [s3Destination],
    })
  }
}
