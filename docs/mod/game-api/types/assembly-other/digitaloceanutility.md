---
title: "DigitalOceanUtility"
description: "Static access to a DigitalOcean Spaces (S3-compatible, sfo2 region) client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DigitalOceanUtility

A **static class** in `Alta.IO`, `Alta.Utilities`.

Static access to a DigitalOcean Spaces (S3-compatible, sfo2 region) client. Keys must be set with `SetupKeys` before first use.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accesskey" /><code>{"private static string accessKey"}</code> | <span className="api-desc">Stored access key.</span> |
| <Link id="m-client" /><code>{"private static TransferUtility client"}</code> | <span className="api-desc">Backing field for `Client`.</span> |
| <Link id="m-s3client" /><code>{"private static AmazonS3Client s3Client"}</code> | <span className="api-desc">Backing field for `S3Client`.</span> |
| <Link id="m-secretkey" /><code>{"private static string secretKey"}</code> | <span className="api-desc">Stored secret key.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-client-2" /><code>{"static TransferUtility Client { get; }"}</code> | <span className="api-desc">S3 `TransferUtility` for uploads and downloads (up to 1000 concurrent requests), created on first use.</span> |
| <Link id="m-s3client-2" /><code>{"static AmazonS3Client S3Client { get; }"}</code> | <span className="api-desc">The `AmazonS3Client` for the sfo2 Spaces endpoint, created on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupkeys" /><code>{"static void SetupKeys(string accessKey, string secretKey)"}</code> | <span className="api-desc">Stores the access and secret keys used when the clients are created. Nothing calls it in this build (`AltaIO` sets up `S3Utility` instead).</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"private static void Setup()"}</code> | <span className="api-desc">Creates both clients from the stored keys.</span> |

</details>
