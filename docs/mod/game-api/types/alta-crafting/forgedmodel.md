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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`ForgedModel<NullColorModelPoint, NullColorModelPoint>`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta), [`IInterfereWithDocking`](/mod/game-api/types/alta-items/iinterferewithdocking)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgedModel()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-reevaluate" /><code>{"void Reevaluate()"}</code> | <span className="api-desc">Editor context menu: re-runs the colour check on the model.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkallowed" /><code>{"private bool Alta.Inventory.IInterfereWithDocking.CheckAllowed("}<Link to="/mod/game-api/types/alta-items/iinterferewithdocking">{"IInterfereWithDocking"}</Link>{" other)"}</code> | <span className="api-desc">Lets two forged parts dock together only if both are done or both are not. Assumes the other is also a `ForgedModel`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForgedModel`:

<div className="api-used-in">

[`SteelSong.IdentifiedModel.IdentifiedModel`](/mod/game-api/types/global-s/steelsong-identifiedmodel#m-ctor), [`SteelSong.IdentifiedModel.Model`](/mod/game-api/types/global-s/steelsong-identifiedmodel#m-model).

</div>
