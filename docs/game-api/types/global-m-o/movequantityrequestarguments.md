---
title: "MoveQuantityRequestArguments"
description: "Network arguments for a request to move a quantity to another PickupDock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MoveQuantityRequestArguments

A **struct** in `Root.Township`, no namespace.

Network arguments for a request to move a quantity to another `PickupDock`. Nothing in this build uses it.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MoveQuantityRequestArguments("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" other, int quantity)"}</code> | Creates a `MoveQuantityRequestArguments` from `other` and `quantity`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-other" /><code>{"private uint other"}</code> | Backing field for `Other`. |
| <Link id="m-quantity" /><code>{"private uint quantity"}</code> | Backing field for `Quantity`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-other-2" /><code>{"uint Other { get; }"}</code> | Entity ID of the other dock. |
| <Link id="m-quantity-2" /><code>{"uint Quantity { get; }"}</code> | How many to move. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the dock ID and a 16 bit quantity. |
