---
title: "GestureMap"
description: "Asset that maps D-pad directions to hand gestures, plus the idle gesture."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GestureMap

A **class** in `Root.Township`, the global namespace.

Asset that maps D-pad directions to hand gestures, plus the idle gesture. Used by `HandGestureController`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GestureMap.Create`](/mod/game-api/types/global-e-h/gesturemap-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/gesturemap-create), [`GestureMapping`](/mod/game-api/types/global-e-h/gesturemap-gesturemapping)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GestureMap()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gesturemap" /><code>{"private Dictionary<int, "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> gestureMap"}</code> | <span className="api-desc">Cached lookup behind `Map`.</span> |
| <Link id="m-gesturemappings" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gesturemap-gesturemapping">{"GestureMap.GestureMapping"}</Link>{"[] gestureMappings"}</code> | <span className="api-desc">Serialized direction and gesture pairs. Directions must not exceed the D-pad's button count.</span> |
| <Link id="m-idlegesture" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture"}</code> | <span className="api-desc">Backing field for `IdleGesture`.</span> |
| <Link id="m-isgradualgrip" /><code>{"private bool isGradualGrip"}</code> | <span className="api-desc">Backing field for `IsGradualGrip`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-idlegesture-2" /><code><Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" IdleGesture { get; }"}</code> | <span className="api-desc">The gesture used when no direction is chosen.</span> |
| <Link id="m-isgradualgrip-2" /><code>{"bool IsGradualGrip { get; }"}</code> | <span className="api-desc">When true, the hand animator's grab value follows the grip axis on clients.</span> |
| <Link id="m-map" /><code>{"Dictionary<int, "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> Map { get; }"}</code> | <span className="api-desc">D-pad direction to gesture lookup, built on first use.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> | <span className="api-desc">Builds the direction to gesture lookup from the serialized mappings. Throws on duplicate directions.</span> |

## Used in

Members of other types that take, return or hold a `GestureMap`:

<div className="api-used-in">

[`HandGestureController.gestureMap`](/mod/game-api/types/global-e-h/handgesturecontroller#m-gesturemap).

</div>
