---
title: "IDigable"
description: "Something a digging tool can dig, like BasicDigable."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IDigable

An **interface** in `Root.Township`, the global namespace.

Something a digging tool can dig, like `BasicDigable`. `DiggingImpactor` finds it on rigidbodies in range.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Derived types** [`BasicDigable`](/mod/game-api/types/global-a-b/basicdigable), [`SpawnBuried`](/mod/game-api/types/global-s/spawnburied)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-dig" /><code>{"void Dig(float diggingDamage)"}</code> | <span className="api-desc">Applies a dig with the given damage, from the tool's settings and efficiency.</span> |
| <Link id="m-diggingtoolhit" /><code>{"void DiggingToolHit()"}</code> | <span className="api-desc">Called when a digging tool hits it, before or without a full dig.</span> |

## Used in

Members of other types that take, return or hold a `IDigable`:

<div className="api-used-in">

[`DiggingImpactor.FoundDigables`](/mod/game-api/types/global-c-d/diggingimpactor#m-founddigables).

</div>
