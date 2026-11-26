---
title: "SplatPaintSet"
description: "A FillSet asset whose spawn modifiers are PaintModifiers, used to paint splat rather than spawn objects."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplatPaintSet

A **class** in `Root.Township`, `Alta.Forests`.

A `FillSet` asset whose spawn modifiers are `PaintModifiers`, used to paint splat rather than spawn objects.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`FillSet`](/mod/game-api/types/alta-world-generation/fillset)
- **Derived types** [`SplatPaintSet.Create`](/mod/game-api/types/alta-world-generation/splatpaintset-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/splatpaintset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplatPaintSet()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-paintmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" paintModifiers"}</code> | <span className="api-desc">Backing field for `PaintModifiers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-paintmodifiers-2" /><code><Link to="/mod/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" { get; }"}</code> | <span className="api-desc">The paint modifiers for this set.</span> |
| <Link id="m-spawnmodifiers" /><code>{"override "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | <span className="api-desc">Returns `PaintModifiers`.</span> |

## Used in

Members of other types that take, return or hold a `SplatPaintSet`:

<div className="api-used-in">

[`SplatPainter.paintSet`](/mod/game-api/types/alta-world-generation/splatpainter#m-paintset).

</div>
