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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`FillSet`](/game-api/types/alta-world-generation/fillset)
- **Derived types** [`SplatPaintSet.Create`](/game-api/types/alta-world-generation/splatpaintset-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/splatpaintset-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SplatPaintSet()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-paintmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" paintModifiers"}</code> | Backing field for `PaintModifiers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-paintmodifiers-2" /><code><Link to="/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/paintmodifiers">{"PaintModifiers"}</Link>{" { get; }"}</code> | The paint modifiers for this set. |
| <Link id="m-spawnmodifiers" /><code>{"override "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | Returns `PaintModifiers`. |

## Used in

Members of other types that take, return or hold a `SplatPaintSet`:

[`SplatPainter.paintSet`](/game-api/types/alta-world-generation/splatpainter#m-paintset).
