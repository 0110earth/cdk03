# Quicksight利用のためのCDK

本CDKではQuicksight利用のため、以下を実施しています。

- データソースとしてのS3バケット作成
- QuicksightがS3にアクセスできるようにするためのIAMロールの作成

以下については、手作業での実施になります。

- サンプルデータの作成／S3へのアップロード
- manifestfileの作成
- Quicksightへのデータソース設定
- Quicksightでのグラフ作成

  ■サンプルデータ(sales_data.csv)

```
Date,Product,Region,Sales,Quantity
2024-01-01,Product A,North,1000,10
2024-01-02,Product B,East,1500,15
2024-01-03,Product C,West,800,8
2024-01-04,Product D,South,1200,12
2024-01-05,Product A,East,1100,11
2024-01-06,Product B,North,1400,14
2024-01-07,Product C,South,900,9
2024-01-08,Product D,West,1300,13
```

このファイルには、以下のカラムが含まれています：

- Date: 日付
- Product: 製品名
- Region: 販売地域
- Sales: 売上金額
- Quantity: 販売数量

■ manifestfile.json

```
{
  "fileLocations": [
    {
      "URIs": [
        "https://my-data-visualization-bucket.s3.ap-northeast-1.amazonaws.com/sales_data.csv",
      ]
    }
  ],
  "globalUploadSettings": {
    "format": "CSV",
    "delimiter": ","
  }
}
```
