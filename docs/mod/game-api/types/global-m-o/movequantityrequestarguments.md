---
title: "MoveQuantityRequestArguments"
description: "Network arguments for a request to move a quantity to another PickupDock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveQuantityRequestArguments

A **struct** in `Root.Township`, the global namespace.

Network arguments for a request to move a quantity to another `PickupDock`. Nothing in this build uses it.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MoveQuantityRequestArguments("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" other, int quantity)"}</code> | <span className="api-desc">Creates a `MoveQuantityRequestArguments` from `other` and `quantity`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-other" /><code>{"private uint other"}</code> | <span className="api-desc">Backing field for `Other`.</span> |
| <Link id="m-quantity" /><code>{"private uint quantity"}</code> | <span className="api-desc">Backing field for `Quantity`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-other-2" /><code>{"uint Other { get; }"}</code> | <span className="api-desc">Entity ID of the other dock.</span> |
| <Link id="m-quantity-2" /><code>{"uint Quantity { get; }"}</code> | <span className="api-desc">How many to move.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the dock ID and a 16 bit quantity.</span> |
