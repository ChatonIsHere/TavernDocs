---
title: "IGetRigidbody"
description: "For components that cache a rigidbody and must refresh it when a crafting part's hierarchy changes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IGetRigidbody

An **interface** in `Root.Township`, `Alta.Crafting`.

For components that cache a rigidbody and must refresh it when a crafting part's hierarchy changes. `CraftingPart` calls it on its children.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Derived types** [`Impactor`](/mod/game-api/types/alta-items/impactor), [`ImpactTool`](/mod/game-api/types/alta-items/impacttool), [`NetworkRigidbody`](/mod/game-api/types/alta-networking/networkrigidbody), [`Pickup`](/mod/game-api/types/global-p/pickup)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updaterigidbody" /><code>{"void UpdateRigidbody()"}</code> | Finds the current rigidbody again. |
