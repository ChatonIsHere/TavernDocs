---
title: "PlayerTextMessage"
description: "A text message and how long to show it, sent from the server to one player by PlayerCommunicationManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTextMessage

A **struct** in `Root.Township`, no namespace.

A text message and how long to show it, sent from the server to one player by `PlayerCommunicationManager`.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTextMessage(string message, float displayDuration)"}</code> | Creates a `PlayerTextMessage` from `message` and `displayDuration`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration" /><code>{"private float displayDuration"}</code> | Backing field for `DisplayDuration`. |
| <Link id="m-message" /><code>{"private string message"}</code> | Backing field for `Message`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration-2" /><code>{"float DisplayDuration { get; }"}</code> | How long the message stays on screen, in seconds (synced in 0.1 s steps, up to 100). |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> | The message text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the message and duration on the network stream. |

## Used in

Members of other types that take, return or hold a `PlayerTextMessage`:

[`PlayerCommunicationManager.HandlePlayerMessage`](/game-api/types/global-p/playercommunicationmanager#m-handleplayermessage), [`PlayerCommunicationManager.syncMessage`](/game-api/types/global-p/playercommunicationmanager#m-syncmessage).
