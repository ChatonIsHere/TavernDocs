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

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ExampleBehaviour()"}</code> | <span className="api-desc">Creates an `ExampleBehaviour` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">The entity the syncs belong to.</span> |
| <Link id="m-head" /><code>{"private Transform head"}</code> | <span className="api-desc">Transform turned by the look direction.</span> |
| <Link id="m-health" /><code>{"private float health"}</code> | <span className="api-desc">Current health value.</span> |
| <Link id="m-healthsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" healthSync"}</code> | <span className="api-desc">The health sync.</span> |
| <Link id="m-lookdirectionsync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/isync">{"ISync"}</Link>{" lookDirectionSync"}</code> | <span className="api-desc">The look direction sync.</span> |
| <Link id="m-maxhealth" /><code>{"private float maxHealth"}</code> | <span className="api-desc">Maximum health, used to scale the synced fraction.</span> |

</details>

## Methods

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | <span className="api-desc">Creates a health sync read by clients and a look direction sync that clients write and read.</span> |
| <Link id="m-initializeasserver" /><code>{"private void InitializeAsServer()"}</code> | <span className="api-desc">Adds the server write for health and makes the look direction sync read and relay.</span> |
| <Link id="m-onclientreadhealth" /><code>{"private void OnClientReadHealth("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads health as a 0 to 1 fraction of `maxHealth`.</span> |
| <Link id="m-onclientreadlookdirection" /><code>{"private void OnClientReadLookDirection("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads a direction and turns the head to face it.</span> |
| <Link id="m-onclientwritelookdirection" /><code>{"private void OnClientWriteLookDirection("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes the head's forward direction.</span> |
| <Link id="m-onserverwritehealth" /><code>{"private void OnServerWriteHealth("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes health as a 0 to 1 fraction of `maxHealth`.</span> |

</details>
