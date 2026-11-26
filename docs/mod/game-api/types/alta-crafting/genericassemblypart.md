---
title: "GenericAssemblyPart"
description: "Marks a crafting part that can hang on a GenericAssemblyStation, with the local poses for hanging up or down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenericAssemblyPart

A **class** in `Root.Township`, `Alta.Crafting`.

Marks a crafting part that can hang on a `GenericAssemblyStation`, with the local poses for hanging up or down.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Crafting](/mod/game-api/game-systems/crafting)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenericAssemblyPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepositions" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/genericassemblystation-assemblyposition">{"GenericAssemblyStation.AssemblyPosition"}</Link>{" availablePositions"}</code> | <span className="api-desc">Backing field for `AvailablePositions`.</span> |
| <Link id="m-craftingpart" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" craftingPart"}</code> | <span className="api-desc">Backing field for `CraftingPart`.</span> |
| <Link id="m-downhangingposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" downHangingPosition"}</code> | <span className="api-desc">Local position and rotation when hanging down.</span> |
| <Link id="m-uphangingposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/serializedtransform">{"SerializedTransform"}</Link>{" upHangingPosition"}</code> | <span className="api-desc">Local position and rotation when hanging up.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-availablepositions-2" /><code><Link to="/mod/game-api/types/alta-crafting/genericassemblystation-assemblyposition">{"GenericAssemblyStation.AssemblyPosition"}</Link>{" AvailablePositions { get; }"}</code> | <span className="api-desc">Flags for which station positions (up, down) this part can hang in.</span> |
| <Link id="m-craftingpart-2" /><code><Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" "}<Link to="/mod/game-api/types/alta-crafting/craftingpart">{"CraftingPart"}</Link>{" { get; }"}</code> | <span className="api-desc">The crafting part this component belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpositionlocal" /><code>{"void SetPositionLocal("}<Link to="/mod/game-api/types/alta-crafting/genericassemblystation-assemblyposition">{"GenericAssemblyStation.AssemblyPosition"}</Link>{" position)"}</code> | <span className="api-desc">Moves the part to its up pose for `Up`, or its down pose otherwise.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws the up pose in blue and the down pose in red.</span> |

</details>

## Used in

Members of other types that take, return or hold a `GenericAssemblyPart`:

<div className="api-used-in">

[`GenericAssemblyStation.dockedPart`](/mod/game-api/types/alta-crafting/genericassemblystation#m-dockedpart).

</div>
