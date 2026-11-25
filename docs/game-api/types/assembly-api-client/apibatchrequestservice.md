---
title: "ApiBatchRequestService"
description: "static class ApiBatchRequestService in Alta.Api.Client."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiBatchRequestService

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-authorizedclient" /><code>{"private static HttpClient authorizedClient"}</code> |
| <Link id="m-iswatchingqueue" /><code>{"private static bool isWatchingQueue"}</code> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |
| <Link id="m-maxqueueentries" /><code>{"private const int MaxQueueEntries"}</code> |
| <Link id="m-maxqueuelifetimems" /><code>{"private const int MaxQueueLifetimeMs"}</code> |
| <Link id="m-queue" /><code>{"private static "}<Link to="/game-api/types/assembly-api-client/doublebufferedqueue-t">{"DoubleBufferedQueue"}</Link>{"<"}<Link to="/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> queue"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-enqueue" /><code>{"static async void Enqueue(string uri, object data, HttpClient client)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-initializequeue" /><code>{"private static void InitializeQueue()"}</code> |
| <Link id="m-isrequestvalid" /><code>{"private static bool IsRequestValid(string uri, object data, HttpClient client)"}</code> |
| <Link id="m-processqueue" /><code>{"private static void ProcessQueue(IEnumerable<"}<Link to="/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> queueToProcess)"}</code> |
| <Link id="m-processqueueinternal" /><code>{"private static async Task ProcessQueueInternal(IEnumerable<"}<Link to="/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> list)"}</code> |

</details>
