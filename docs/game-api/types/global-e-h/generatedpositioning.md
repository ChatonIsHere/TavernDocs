---
title: "GeneratedPositioning"
description: "Asset that adjusts a generated object's position and rotation through position and rotation modules."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedPositioning

A **class** in `Root.Township`, no namespace.

Asset that adjusts a generated object's position and rotation through position and rotation modules. Used by `StaticGeneration` and `StaticDynamicSpawner`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GeneratedPositioning.Create`](/game-api/types/global-e-h/generatedpositioning-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/generatedpositioning-create), [`Module`](/game-api/types/global-e-h/generatedpositioning-module), [`PositionModule`](/game-api/types/global-e-h/generatedpositioning-positionmodule), [`RotationModule`](/game-api/types/global-e-h/generatedpositioning-rotationmodule)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GeneratedPositioning()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatedpositioning-positionmodule">{"GeneratedPositioning.PositionModule"}</Link>{" position"}</code> | Which position module type is picked in the inspector. |
| <Link id="m-positionmodule" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatedpositioning-module">{"GeneratedPositioning.Module"}</Link>{" positionModule"}</code> | Module that changes the position, or null for none. |
| <Link id="m-positiontypes" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-e-h/generatedpositioning-positionmodule">{"GeneratedPositioning.PositionModule"}</Link>{", Type> positionTypes"}</code> | Maps each position module choice to its class (Static has none). |
| <Link id="m-rotation" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatedpositioning-rotationmodule">{"GeneratedPositioning.RotationModule"}</Link>{" rotation"}</code> | Which rotation module type is picked in the inspector. |
| <Link id="m-rotationmodule" /><code>{"private "}<Link to="/game-api/types/global-e-h/generatedpositioning-module">{"GeneratedPositioning.Module"}</Link>{" rotationModule"}</code> | Module that changes the rotation, or null for none. |
| <Link id="m-rotationtypes" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-e-h/generatedpositioning-rotationmodule">{"GeneratedPositioning.RotationModule"}</Link>{", Type> rotationTypes"}</code> | Maps each rotation module choice to its class; `RandomY` uses `RandomYRotation`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"void Modify(ref Vector3 position, ref Quaternion rotation)"}</code> | Runs the position module then the rotation module on the given position and rotation. |

## Used in

Members of other types that take, return or hold a `GeneratedPositioning`:

[`StaticDynamicSpawner.positioning`](/game-api/types/global-s/staticdynamicspawner#m-positioning), [`StaticGeneration.positioning`](/game-api/types/global-s/staticgeneration#m-positioning).
