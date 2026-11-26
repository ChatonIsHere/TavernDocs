---
title: "BatchedRequestEntry"
description: "One queued request in ApiBatchRequestService."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BatchedRequestEntry

A **class** in `Alta.Api.Client`, `Alta.Api.Client.LowLevel`.

One queued request in `ApiBatchRequestService`. Entries for the same address are sent together as one JSON list.

- **Listed in** [Alta.Api.Client](/mod/game-api/types/assembly-api-client)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BatchedRequestEntry()"}</code> | <span className="api-desc">Creates a `BatchedRequestEntry` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"object Data { get; set; }"}</code> | <span className="api-desc">The object to send.</span> |
| <Link id="m-uri" /><code>{"string Uri { get; set; }"}</code> | <span className="api-desc">The address to post it to.</span> |

## Used in

Members of other types that take, return or hold a `BatchedRequestEntry`:

<div className="api-used-in">

[`ApiBatchRequestService.ProcessQueue`](/mod/game-api/types/assembly-api-client/apibatchrequestservice#m-processqueue), [`ApiBatchRequestService.ProcessQueueInternal`](/mod/game-api/types/assembly-api-client/apibatchrequestservice#m-processqueueinternal), [`ApiBatchRequestService.queue`](/mod/game-api/types/assembly-api-client/apibatchrequestservice#m-queue).

</div>
