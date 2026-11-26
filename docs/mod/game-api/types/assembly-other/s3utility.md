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

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesskey" /><code>{"private static string accessKey"}</code> | <span className="api-desc">AWS access key.</span> |
| <Link id="m-client" /><code>{"private static TransferUtility client"}</code> | <span className="api-desc">Backing field for `Client`.</span> |
| <Link id="m-region" /><code>{"private static readonly RegionEndpoint Region"}</code> | <span className="api-desc">Fixed AWS region, `USWest1`.</span> |
| <Link id="m-s3client" /><code>{"private static AmazonS3Client s3Client"}</code> | <span className="api-desc">Backing field for `S3Client`.</span> |
| <Link id="m-secretkey" /><code>{"private static string secretKey"}</code> | <span className="api-desc">AWS secret key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client-2" /><code>{"static TransferUtility Client { get; }"}</code> | <span className="api-desc">S3 `TransferUtility`, created on first use.</span> |
| <Link id="m-s3client-2" /><code>{"static AmazonS3Client S3Client { get; }"}</code> | <span className="api-desc">`AmazonS3Client`, created on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupkeys" /><code>{"static void SetupKeys(string accessKey, string secretKey)"}</code> | <span className="api-desc">Stores the access and secret keys. Call before the clients are first used.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> | <span className="api-desc">Creates both clients from the stored keys. The transfer utility allows 1000 concurrent requests.</span> |

</details>
