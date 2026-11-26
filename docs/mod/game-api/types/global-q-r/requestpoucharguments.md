---
title: "RequestPouchArguments"
description: "Network message from PickupContainer asking to pull a pouch of items out for a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestPouchArguments

A **struct** in `Root.Township`, the global namespace.

Network message from `PickupContainer` asking to pull a pouch of items out for a hand.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequestPouchArguments("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" interactor, bool isFull)"}</code> | <span className="api-desc">Creates a `RequestPouchArguments` from `interactor` and `isFull`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactorid" /><code>{"private uint interactorId"}</code> | <span className="api-desc">Backing field for `InteractorId`.</span> |
| <Link id="m-isfull" /><code>{"private bool isFull"}</code> | <span className="api-desc">Backing field for `IsFull`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactorid-2" /><code>{"uint InteractorId { get; }"}</code> | <span className="api-desc">Entity ID of the hand taking the pouch.</span> |
| <Link id="m-isfull-2" /><code>{"bool IsFull { get; }"}</code> | <span className="api-desc">True to take everything stored, false to take half.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the hand ID and the flag.</span> |

## Used in

Members of other types that take, return or hold a `RequestPouchArguments`:

<div className="api-used-in">

[`PickupContainer.NetworkSpawnPouch`](/mod/game-api/types/global-p/pickupcontainer#m-networkspawnpouch), [`PickupContainer.spawnPouch`](/mod/game-api/types/global-p/pickupcontainer#m-spawnpouch).

</div>
