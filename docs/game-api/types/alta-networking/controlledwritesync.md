---
title: "ControlledWriteSync"
description: "An entity message channel where each send passes its own write method, unlike MethodSync which uses a fixed one."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControlledWriteSync

A **class** in `Root.Township`, `Alta.Networking`.

An entity message channel where each send passes its own write method, unlike `MethodSync` which uses a fixed one. Registers the read handler when created.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ControlledWriteSync("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler)"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity whose message handler carries the messages. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | The entity message type this sync uses. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks("}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" sendMethod, params "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"[] except)"}</code> | Sends the message, written by the given method, to every player in range of the entity's chunks, minus any listed. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" sendMethod)"}</code> | Sends the message, written by the given method, to one player. |

## Used in

Members of other types that take, return or hold a `ControlledWriteSync`:

[`LandmarkManager.changeSync`](/game-api/types/alta-world/landmarkmanager#m-changesync), [`LandmarkManager.initialSync`](/game-api/types/alta-world/landmarkmanager#m-initialsync), [`ServerClientLandmarkManager.changeSync`](/game-api/types/alta-world/serverclientlandmarkmanager#m-changesync), [`ServerClientLandmarkManager.initialSync`](/game-api/types/alta-world/serverclientlandmarkmanager#m-initialsync), [`ServerClientLandmarkManager.ServerClientLandmarkManager`](/game-api/types/alta-world/serverclientlandmarkmanager#m-ctor), [`ServerLandmarkManager.changeSync`](/game-api/types/alta-world/serverlandmarkmanager#m-changesync), [`ServerLandmarkManager.initialSync`](/game-api/types/alta-world/serverlandmarkmanager#m-initialsync), [`ServerLandmarkManager.ServerLandmarkManager`](/game-api/types/alta-world/serverlandmarkmanager#m-ctor).
