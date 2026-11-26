---
title: "GeneratedPositioning.Module"
description: "Base asset for a step that changes a generated position or rotation, such as RandomYRotation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GeneratedPositioning.Module

An **abstract class** in `Root.Township`, the global namespace.

Base asset for a step that changes a generated position or rotation, such as `RandomYRotation`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`GeneratedPositioning`](/mod/game-api/types/global-e-h/generatedpositioning)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`RandomYRotation`](/mod/game-api/types/global-q-r/randomyrotation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected Module()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-modify" /><code>{"abstract void Modify(ref Vector3 position, ref Quaternion rotation)"}</code> | <span className="api-desc">Changes the position and rotation in place.</span> |

## Used in

Members of other types that take, return or hold a `Module`:

<div className="api-used-in">

[`GeneratedPositioning.positionModule`](/mod/game-api/types/global-e-h/generatedpositioning#m-positionmodule), [`GeneratedPositioning.rotationModule`](/mod/game-api/types/global-e-h/generatedpositioning#m-rotationmodule).

</div>
