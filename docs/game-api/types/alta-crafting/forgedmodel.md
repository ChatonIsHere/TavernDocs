---
title: "ForgedModel"
description: "Forged metal part with no colour model points: a heat model that is hammered into shape and counts as done once every forged point reaches full progress."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedModel

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Forged metal part with no colour model points: a heat model that is hammered into shape and counts as done once every forged point reaches full progress. A component on forgeable prefabs.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`ForgedModel<NullColorModelPoint, NullColorModelPoint>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`IInterfereWithDocking`](/game-api/types/alta-items/iinterferewithdocking)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForgedModel()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reevaluate" /><code>{"void Reevaluate()"}</code> | Editor context menu: re-runs the colour check on the model. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | Lets two forged parts dock together only if both are done or both are not. Assumes the other is also a `ForgedModel`. |

</details>

## Used in

Members of other types that take, return or hold a `ForgedModel`:

[`SteelSong.IdentifiedModel.IdentifiedModel`](/game-api/types/global-s/steelsong-identifiedmodel#m-ctor), [`SteelSong.IdentifiedModel.Model`](/game-api/types/global-s/steelsong-identifiedmodel#m-model).
