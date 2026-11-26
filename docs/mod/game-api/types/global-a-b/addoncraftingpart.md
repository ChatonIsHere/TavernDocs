---
title: "AddonCraftingPart"
description: "Crafting part that shows an extra pooled visual at a set point while something is joined into its insert."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddonCraftingPart

A **class** in `Root.Township`, the global namespace.

Crafting part that shows an extra pooled visual at a set point while something is joined into its insert. Client only.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`CraftingPart`](/mod/game-api/types/alta-crafting/craftingpart)
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AddonCraftingPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addon" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" addon"}</code> | <span className="api-desc">The add-on visual currently shown, if any.</span> |
| <Link id="m-addonposition" /><code>{"private Transform addOnPosition"}</code> | <span className="api-desc">Where the add-on visual is placed.</span> |
| <Link id="m-jointaddon" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" jointAddon"}</code> | <span className="api-desc">Pooled object definition for the add-on visual.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">On clients, hooks the insert's `Connected` and `Disconnected` events.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> | <span className="api-desc">Takes the add-on visual from the pool at `addOnPosition` when the insert connects.</span> |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/mod/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> | <span className="api-desc">Releases the add-on visual when the insert disconnects.</span> |

</details>
