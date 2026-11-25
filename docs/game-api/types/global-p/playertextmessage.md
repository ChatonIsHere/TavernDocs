---
title: "PlayerTextMessage"
description: "struct PlayerTextMessage in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTextMessage

A **struct** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTextMessage(string message, float displayDuration)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration" /><code>{"private float displayDuration"}</code> |  |
| <Link id="m-message" /><code>{"private string message"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-displayduration-2" /><code>{"float DisplayDuration { get; }"}</code> |  |
| <Link id="m-message-2" /><code>{"string Message { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerTextMessage`:

[`PlayerCommunicationManager.HandlePlayerMessage`](/game-api/types/global-p/playercommunicationmanager#m-handleplayermessage), [`PlayerCommunicationManager.syncMessage`](/game-api/types/global-p/playercommunicationmanager#m-syncmessage).
