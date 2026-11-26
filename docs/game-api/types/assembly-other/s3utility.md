---
title: "S3Utility"
description: "Static holder for the AWS S3 clients used for remote saves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# S3Utility

A **static class** in `Alta.IO`, `Alta.Utilities`.

Static holder for the AWS S3 clients used for remote saves. Keys come from the `/s3_credentials` command line argument; the region is fixed to US West 1.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesskey" /><code>{"private static string accessKey"}</code> | AWS access key. |
| <Link id="m-client" /><code>{"private static TransferUtility client"}</code> | Backing field for `Client`. |
| <Link id="m-region" /><code>{"private static readonly RegionEndpoint Region"}</code> | Fixed AWS region, `USWest1`. |
| <Link id="m-s3client" /><code>{"private static AmazonS3Client s3Client"}</code> | Backing field for `S3Client`. |
| <Link id="m-secretkey" /><code>{"private static string secretKey"}</code> | AWS secret key. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client-2" /><code>{"static TransferUtility Client { get; }"}</code> | S3 `TransferUtility`, created on first use. |
| <Link id="m-s3client-2" /><code>{"static AmazonS3Client S3Client { get; }"}</code> | `AmazonS3Client`, created on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupkeys" /><code>{"static void SetupKeys(string accessKey, string secretKey)"}</code> | Stores the access and secret keys. Call before the clients are first used. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> | Creates both clients from the stored keys. The transfer utility allows 1000 concurrent requests. |

</details>
