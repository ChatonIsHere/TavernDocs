---
title: "AddonCraftingPart"
description: "A part that shows an extra visual (jointAddon) while it's inserted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AddonCraftingPart

A **class** in `Root.Township`, no namespace.

A part that shows an extra visual (`jointAddon`) while it's inserted.

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

| Member |
| --- |
| <Link id="m-addon" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" addon"}</code> |
| <Link id="m-addonposition" /><code>{"private Transform addOnPosition"}</code> |
| <Link id="m-jointaddon" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" jointAddon"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-add" /><code>{"private void Add("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> |
| <Link id="m-remove" /><code>{"private void Remove("}<Link to="/game-api/types/alta-crafting/jointpoint">{"JointPoint"}</Link>{" obj)"}</code> |

</details>
