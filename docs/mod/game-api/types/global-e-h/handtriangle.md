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
| <Link id="m-ctor" /><code>{"HandTriangle()"}</code> | Creates a `HandTriangle` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-a" /><code>{"Transform a"}</code> | First corner. |
| <Link id="m-b" /><code>{"Transform b"}</code> | Second corner. |
| <Link id="m-c" /><code>{"Transform c"}</code> | Third corner. |

## Used in

Members of other types that take, return or hold a `HandTriangle`:

[`FingerTipSettings.leftHandTriangle`](/mod/game-api/types/global-e-h/fingertipsettings#m-lefthandtriangle), [`FingerTipSettings.rightHandTriangle`](/mod/game-api/types/global-e-h/fingertipsettings#m-righthandtriangle), [`WorldSpaceTriangle.WorldSpaceTriangle`](/mod/game-api/types/global-t-x/worldspacetriangle#m-ctor).
