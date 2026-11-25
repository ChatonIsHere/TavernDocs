---
title: "RetryHandler"
description: "class RetryHandler in Alta.Api.DataTransferModels."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RetryHandler

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `HttpClientHandler`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"RetryHandler(float timeOutInSeconds, int maxRetryAmount = 3)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |
| <Link id="m-maxretryamount" /><code>{"private readonly int maxRetryAmount"}</code> |
| <Link id="m-timeout" /><code>{"private readonly TimeSpan timeout"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-timedout" /><code>{"static event Action<HttpRequestMessage> TimedOut"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-sendasync" /><code>{"protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-createtimeouttokensource" /><code>{"private CancellationTokenSource CreateTimeoutTokenSource(CancellationToken cancellationToken)"}</code> |

</details>
