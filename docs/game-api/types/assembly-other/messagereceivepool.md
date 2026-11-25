---
title: "MessageReceivePool"
description: "static class MessageReceivePool in Alta.NetworkTransport.Runtime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageReceivePool

A **static class** in `Alta.NetworkTransport.Runtime`, `Alta.NetworkingTransport`.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximummessagesize" /><code>{"const int MaximumMessageSize"}</code> |  |
| <Link id="m-maximumpoolsize" /><code>{"const int MaximumPoolSize"}</code> |  |
| <Link id="m-ismonitoring" /><code>{"private static bool isMonitoring"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger Logger"}</code> |  |
| <Link id="m-pool" /><code>{"private static readonly ConcurrentBag<byte[]> Pool"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"static byte[] Get()"}</code> |  |
| <Link id="m-put" /><code>{"static void Put(byte[] bytes)"}</code> |  |
