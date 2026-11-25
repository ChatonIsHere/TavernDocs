---
title: "VivoxText"
description: "class VivoxText in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxText

A **class** in `Root.Township`, `Alta.Voice`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"VivoxText(IChannelSession session)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-session" /><code>{"private IChannelSession session"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-messagereceived" /><code>{"event Action<IChannelTextMessage> MessageReceived"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-queue" /><code>{"IEnumerable<IChannelTextMessage> Queue() (iterator)"}</code> |
| <Link id="m-send" /><code>{"async Task<bool> Send(string message)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-messagelogadded" /><code>{"private void MessageLogAdded(object sender, QueueItemAddedEventArgs<IChannelTextMessage> e)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxText`:

[`VivoxClient.JoinChannel`](/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxSession.VivoxText`](/game-api/types/alta-networking/vivoxsession#m-vivoxtext).
