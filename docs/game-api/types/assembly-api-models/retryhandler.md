---
title: "RetryHandler"
description: "HTTP handler for the API client that adds a timeout per attempt and retries failed requests with a doubling delay (2, 4, ..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RetryHandler

A **class** in `Alta.Api.DataTransferModels`, `Alta.Api.DataTransferModels.Utility`.

HTTP handler for the API client that adds a timeout per attempt and retries failed requests with a doubling delay (2, 4, ... seconds).

- **Listed in** [Alta.Api.DataTransferModels](/game-api/types/assembly-api-models)
- **Inherits or implements** `HttpClientHandler`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RetryHandler(float timeOutInSeconds, int maxRetryAmount = 3)"}</code> | Creates a `RetryHandler` from `timeOutInSeconds` and `maxRetryAmount`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> | Class logger. |
| <Link id="m-maxretryamount" /><code>{"private readonly int maxRetryAmount"}</code> | Most attempts per request; 3 by default. |
| <Link id="m-timeout" /><code>{"private readonly TimeSpan timeout"}</code> | Time allowed for each attempt. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-timedout" /><code>{"static event Action<HttpRequestMessage> TimedOut"}</code> | Raised when every attempt at a request timed out. The low-level API client listens to it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendasync" /><code>{"protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)"}</code> | Sends the request, retrying on timeouts and errors. After the last attempt, errors throw `HttpRequestException` and timeouts raise `TimedOut` then throw `TimeoutException`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createtimeouttokensource" /><code>{"private CancellationTokenSource CreateTimeoutTokenSource(CancellationToken cancellationToken)"}</code> | Makes a cancel token that fires after `timeout` or when the caller cancels. |

</details>
