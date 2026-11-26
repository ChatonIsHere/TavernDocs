---
title: "ApiBatchRequestService"
description: "Collects small API posts and sends them in batches: entries are queued and flushed every 30 seconds or at 100 entries, grouped by URI into one JSON list per..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ApiBatchRequestService

A **static class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

Collects small API posts and sends them in batches: entries are queued and flushed every 30 seconds or at 100 entries, grouped by URI into one JSON list per URI.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authorizedclient" /><code>{"private static HttpClient authorizedClient"}</code> | HTTP client used to send batches; set by every `Enqueue` call. |
| <Link id="m-iswatchingqueue" /><code>{"private static bool isWatchingQueue"}</code> | Unused flag. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Class logger. |
| <Link id="m-maxqueueentries" /><code>{"private const int MaxQueueEntries"}</code> | Queue size (100) that triggers a flush. |
| <Link id="m-maxqueuelifetimems" /><code>{"private const int MaxQueueLifetimeMs"}</code> | Longest time (30000 ms) entries wait before a flush. |
| <Link id="m-queue" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-api-client/doublebufferedqueue-t">{"DoubleBufferedQueue"}</Link>{"<"}<Link to="/mod/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> queue"}</code> | The double-buffered queue holding pending entries. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enqueue" /><code>{"static async void Enqueue(string uri, object data, HttpClient client)"}</code> | Queues `data` to be posted to `uri` in the next batch. The last client passed is the one used for sending. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializequeue" /><code>{"private static void InitializeQueue()"}</code> | Creates the double-buffered queue on first use and hooks up `ProcessQueue`. |
| <Link id="m-isrequestvalid" /><code>{"private static bool IsRequestValid(string uri, object data, HttpClient client)"}</code> | Rejects (with an error log) entries with a null client, empty URI or null data. |
| <Link id="m-processqueue" /><code>{"private static void ProcessQueue(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> queueToProcess)"}</code> | Queue flush callback; starts `ProcessQueueInternal` without waiting for it. |
| <Link id="m-processqueueinternal" /><code>{"private static async Task ProcessQueueInternal(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-client/batchedrequestentry">{"BatchedRequestEntry"}</Link>{"> list)"}</code> | Groups queued entries by URI and posts each group as one JSON list. |

</details>
