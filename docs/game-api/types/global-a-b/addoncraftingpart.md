---
title: "AddonCraftingPart"
description: "Crafting part that shows an extra pooled visual at a set point while something is joined into its insert."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddonCraftingPart

A **class** in `Root.Township`, no namespace.

Crafting part that shows an extra pooled visual at a set point while something is joined into its insert. Client only.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`CraftingPart`](/game-api/types/alta-crafting/craftingpart)
- **Documented in** [Crafting](/game-api/game-systems/crafting)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AddonCraftingPart()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addon" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" addon"}</code> | The add-on visual currently shown, if any. |
| <Link id="m-addonposition" /><code>{"private Transform addOnPosition"}</code> | Where the add-on visual is placed. |
| <Link id="m-jointaddon" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" jointAddon"}</code> | Pooled object definition for the add-on visual. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | On clients, hooks the insert's `Connected` and `Disconnected` events. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> | Takes the add-on visual from the pool at `addOnPosition` when the insert connects. |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> | Releases the add-on visual when the insert disconnects. |

</details>
