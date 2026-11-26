---
title: "ExampleBehaviour"
description: "Example code showing how to set up syncs with SyncFactory."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ExampleBehaviour

A **class** in `Root.Township`, `Alta.Networking`.

Example code showing how to set up syncs with `SyncFactory`. Not a component and not used by the game.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ExampleBehaviour()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | The entity the syncs belong to. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | Transform turned by the look direction. |
| <Link id="m-health" /><code>{"private float health"}</code> | Current health value. |
| <Link id="m-healthsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" healthSync"}</code> | The health sync. |
| <Link id="m-lookdirectionsync" /><code>{"private "}<Link to="/game-api/types/alta-networking/isync">{"ISync"}</Link>{" lookDirectionSync"}</code> | The look direction sync. |
| <Link id="m-maxhealth" /><code>{"private float maxHealth"}</code> | Maximum health, used to scale the synced fraction. |

</details>

## Methods

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | Creates a health sync read by clients and a look direction sync that clients write and read. |
| <Link id="m-initializeasserver" /><code>{"private void InitializeAsServer()"}</code> | Adds the server write for health and makes the look direction sync read and relay. |
| <Link id="m-onclientreadhealth" /><code>{"private void OnClientReadHealth("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads health as a 0 to 1 fraction of `maxHealth`. |
| <Link id="m-onclientreadlookdirection" /><code>{"private void OnClientReadLookDirection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads a direction and turns the head to face it. |
| <Link id="m-onclientwritelookdirection" /><code>{"private void OnClientWriteLookDirection("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes the head's forward direction. |
| <Link id="m-onserverwritehealth" /><code>{"private void OnServerWriteHealth("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes health as a 0 to 1 fraction of `maxHealth`. |

</details>
