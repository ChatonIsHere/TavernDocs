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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ControlledWriteSync("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" handler)"}</code> | Creates a `ControlledWriteSync` from `entity`, `type` and `handler`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity whose message handler carries the messages. |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/entitymessagetype">{"EntityMessageType"}</Link>{" type"}</code> | The entity message type this sync uses. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-sendtochunks" /><code>{"void SendToChunks("}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" sendMethod, params "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"[] except)"}</code> | Sends the message, written by the given method, to every player in range of the entity's chunks, minus any listed. |
| <Link id="m-sendtoplayer" /><code>{"void SendToPlayer("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-networking/serializemethod">{"SerializeMethod"}</Link>{" sendMethod)"}</code> | Sends the message, written by the given method, to one player. |

## Used in

Members of other types that take, return or hold a `ControlledWriteSync`:

[`LandmarkManager.changeSync`](/mod/game-api/types/alta-world/landmarkmanager#m-changesync), [`LandmarkManager.initialSync`](/mod/game-api/types/alta-world/landmarkmanager#m-initialsync), [`ServerClientLandmarkManager.changeSync`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-changesync), [`ServerClientLandmarkManager.initialSync`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-initialsync), [`ServerClientLandmarkManager.ServerClientLandmarkManager`](/mod/game-api/types/alta-world/serverclientlandmarkmanager#m-ctor), [`ServerLandmarkManager.changeSync`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-changesync), [`ServerLandmarkManager.initialSync`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-initialsync), [`ServerLandmarkManager.ServerLandmarkManager`](/mod/game-api/types/alta-world/serverlandmarkmanager#m-ctor).
