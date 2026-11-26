---
title: "GestureMap.GestureMapping"
description: "One serialized D-pad direction and gesture pair in a GestureMap."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GestureMap.GestureMapping

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One serialized D-pad direction and gesture pair in a `GestureMap`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`GestureMap`](/mod/game-api/types/global-e-h/gesturemap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GestureMapping()"}</code> | <span className="api-desc">Creates a `GestureMap.GestureMapping` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dpaddirection" /><code>{"private int dPadDirection"}</code> | <span className="api-desc">Backing field for `DPadDirection`.</span> |
| <Link id="m-gesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" gesture"}</code> | <span className="api-desc">Backing field for `Gesture`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dpaddirection-2" /><code>{"int DPadDirection { get; }"}</code> | <span className="api-desc">The D-pad direction index.</span> |
| <Link id="m-gesture-2" /><code><Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" Gesture { get; }"}</code> | <span className="api-desc">The hand gesture for that direction.</span> |

## Used in

Members of other types that take, return or hold a `GestureMapping`:

<div className="api-used-in">

[`GestureMap.gestureMappings`](/mod/game-api/types/global-e-h/gesturemap#m-gesturemappings).

</div>
