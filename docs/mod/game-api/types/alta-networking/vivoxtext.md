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
| <Link id="m-ctor" /><code>{"VivoxText(IChannelSession session)"}</code> | Creates a `VivoxText` from `session`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-session" /><code>{"private IChannelSession session"}</code> | The Vivox channel session. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-messagereceived" /><code>{"event Action<IChannelTextMessage> MessageReceived"}</code> | Raised for each text message received on the channel. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-queue" /><code>{"IEnumerable<IChannelTextMessage> Queue() (iterator)"}</code> | Yields and removes every message waiting in the session's log. |
| <Link id="m-send" /><code>{"async Task<bool> Send(string message)"}</code> | Sends a text message to the channel and returns whether it succeeded. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-messagelogadded" /><code>{"private void MessageLogAdded(object sender, QueueItemAddedEventArgs<IChannelTextMessage> e)"}</code> | Session handler: raises `MessageReceived` and dequeues the message, but only when something is listening. |

</details>

## Used in

Members of other types that take, return or hold a `VivoxText`:

[`VivoxClient.JoinChannel`](/mod/game-api/types/alta-networking/vivoxclient#m-joinchannel), [`VivoxSession.VivoxText`](/mod/game-api/types/alta-networking/vivoxsession#m-vivoxtext).
