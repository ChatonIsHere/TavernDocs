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

- **Listed in** [Alta.Api.Client](/game-api/types/assembly-api-client)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BatchedRequestEntry()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code>{"object Data { get; set; }"}</code> | The object to send. |
| <Link id="m-uri" /><code>{"string Uri { get; set; }"}</code> | The address to post it to. |

## Used in

Members of other types that take, return or hold a `BatchedRequestEntry`:

[`ApiBatchRequestService.ProcessQueue`](/game-api/types/assembly-api-client/apibatchrequestservice#m-processqueue), [`ApiBatchRequestService.ProcessQueueInternal`](/game-api/types/assembly-api-client/apibatchrequestservice#m-processqueueinternal), [`ApiBatchRequestService.queue`](/game-api/types/assembly-api-client/apibatchrequestservice#m-queue).
