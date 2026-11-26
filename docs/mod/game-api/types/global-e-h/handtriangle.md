---
title: "HandTriangle"
description: "Three transforms on a hand that form a triangle, used by FingerTipSettings to build a WorldSpaceTriangle."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTriangle

A **class** in `Root.Township`, the global namespace.

Three transforms on a hand that form a triangle, used by `FingerTipSettings` to build a `WorldSpaceTriangle`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTriangle()"}</code> | <span className="api-desc">Creates a `HandTriangle` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"Transform a"}</code> | <span className="api-desc">First corner.</span> |
| <Link id="m-b" /><code>{"Transform b"}</code> | <span className="api-desc">Second corner.</span> |
| <Link id="m-c" /><code>{"Transform c"}</code> | <span className="api-desc">Third corner.</span> |

## Used in

Members of other types that take, return or hold a `HandTriangle`:

<div className="api-used-in">

[`FingerTipSettings.leftHandTriangle`](/mod/game-api/types/global-e-h/fingertipsettings#m-lefthandtriangle), [`FingerTipSettings.rightHandTriangle`](/mod/game-api/types/global-e-h/fingertipsettings#m-righthandtriangle), [`WorldSpaceTriangle.WorldSpaceTriangle`](/mod/game-api/types/global-t-x/worldspacetriangle#m-ctor).

</div>
