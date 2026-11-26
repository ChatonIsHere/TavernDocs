---
title: "MeltingModelModifier"
description: "Base class for ScriptableObject rules a MeltingModel runs on the server, for example to change melting yield or whether melting is allowed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MeltingModelModifier

An **abstract class** in `Root.Township`, `Alta.Blacksmithing`.

Base class for ScriptableObject rules a `MeltingModel` runs on the server, for example to change melting yield or whether melting is allowed.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`CraftingMeltingAllowedModifier`](/game-api/types/alta-crafting/craftingmeltingallowedmodifier), [`DurabilityMeltingYieldModifier`](/game-api/types/alta-crafting/durabilitymeltingyieldmodifier)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected MeltingModelModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"abstract void Initialize("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Called by the model in `InitializeAsServer`; subclasses hook the model's filter events here. |
| <Link id="m-terminate" /><code>{"abstract void Terminate("}<Link to="/game-api/types/alta-crafting/meltingmodel">{"MeltingModel"}</Link>{" model)"}</code> | Called when the model is destroyed by the scene or, on the server, by `OnDestroy`; subclasses unhook here. |

## Used in

Members of other types that take, return or hold a `MeltingModelModifier`:

[`MeltingModel.modifiers`](/game-api/types/alta-crafting/meltingmodel#m-modifiers).
