---
title: "VivoxText"
description: "Client: wraps text messaging on a Vivox channel session, raising an event for each received message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VivoxText

A **class** in `Root.Township`, `Alta.Voice`.

Client: wraps text messaging on a Vivox channel session, raising an event for each received message.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VivoxText(IChannelSession session)"}</code> | <span className="api-desc">Creates a `VivoxText` from `session`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private IChannelSession session"}</code> | <span className="api-desc">The Vivox channel session.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-messagereceived" /><code>{"event Action<IChannelTextMessage> MessageReceived"}</code> | <span className="api-desc">Raised for each text message received on the channel.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-queue" /><code>{"IEnumerable<IChannelTextMessage> Queue() (iterator)"}</code> | <span className="api-desc">Yields and removes every message waiting in the session's log.</span> |
| <Link id="m-send" /><code>{"async Task<bool> Send(string message)"}</code> | <span className="api-desc">Sends a text message to the channel and returns whether it succeeded.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagelogadded" /><code>{"private void MessageLogAdded(object sender, QueueItemAddedEventArgs<IChannelTextMessage> e)"}</code> | <span className="api-desc">Session handler: raises `MessageReceived` and dequeues the message, but only when something is listening.</span> |

</details>

## Used in

Members of other types that take, return or hold a `VivoxText`:

<div className="api-used-in">

[`VivoxClient.JoinChannel`](/mod/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxSession.VivoxText`](/mod/game-api/types/alta-networking/vivoxsession#m-vivoxtext).

</div>
