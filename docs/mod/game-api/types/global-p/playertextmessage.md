---
title: "PlayerTextMessage"
description: "A text message and how long to show it, sent from the server to one player by PlayerCommunicationManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTextMessage

A **struct** in `Root.Township`, the global namespace.

A text message and how long to show it, sent from the server to one player by `PlayerCommunicationManager`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTextMessage(string message, float displayDuration)"}</code> | <span className="api-desc">Creates a `PlayerTextMessage` from `message` and `displayDuration`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration" /><code>{"private float displayDuration"}</code> | <span className="api-desc">Backing field for `DisplayDuration`.</span> |
| <Link id="m-message" /><code>{"private string message"}</code> | <span className="api-desc">Backing field for `Message`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration-2" /><code>{"float DisplayDuration { get; }"}</code> | <span className="api-desc">How long the message stays on screen, in seconds (synced in 0.1 s steps, up to 100).</span> |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> | <span className="api-desc">The message text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the message and duration on the network stream.</span> |

## Used in

Members of other types that take, return or hold a `PlayerTextMessage`:

<div className="api-used-in">

[`PlayerCommunicationManager.HandlePlayerMessage`](/mod/game-api/types/global-p/playercommunicationmanager#m-handleplayermessage), [`PlayerCommunicationManager.syncMessage`](/mod/game-api/types/global-p/playercommunicationmanager#m-syncmessage).

</div>
