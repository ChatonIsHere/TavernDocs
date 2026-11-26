---
title: "RequestPouchArguments"
description: "Network message from PickupContainer asking to pull a pouch of items out for a hand."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RequestPouchArguments

A **struct** in `Root.Township`, no namespace.

Network message from `PickupContainer` asking to pull a pouch of items out for a hand.

- **Listed in** [No namespace: Q to R](/game-api/types/global-q-r)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RequestPouchArguments("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" interactor, bool isFull)"}</code> | Creates a `RequestPouchArguments` from `interactor` and `isFull`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-interactorid" /><code>{"private uint interactorId"}</code> | Backing field for `InteractorId`. |
| <Link id="m-isfull" /><code>{"private bool isFull"}</code> | Backing field for `IsFull`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactorid-2" /><code>{"uint InteractorId { get; }"}</code> | Entity ID of the hand taking the pouch. |
| <Link id="m-isfull-2" /><code>{"bool IsFull { get; }"}</code> | True to take everything stored, false to take half. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the hand ID and the flag. |

## Used in

Members of other types that take, return or hold a `RequestPouchArguments`:

[`PickupContainer.NetworkSpawnPouch`](/game-api/types/global-p/pickupcontainer#m-networkspawnpouch), [`PickupContainer.spawnPouch`](/game-api/types/global-p/pickupcontainer#m-spawnpouch).
