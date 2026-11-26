---
title: "GestureMap"
description: "Asset that maps D-pad directions to hand gestures, plus the idle gesture."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GestureMap

A **class** in `Root.Township`, no namespace.

Asset that maps D-pad directions to hand gestures, plus the idle gesture. Used by `HandGestureController`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`GestureMap.Create`](/game-api/types/global-e-h/gesturemap-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/gesturemap-create), [`GestureMapping`](/game-api/types/global-e-h/gesturemap-gesturemapping)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GestureMap()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-gesturemap" /><code>{"private Dictionary<int, "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> gestureMap"}</code> | Cached lookup behind `Map`. |
| <Link id="m-gesturemappings" /><code>{"private "}<Link to="/game-api/types/global-e-h/gesturemap-gesturemapping">{"GestureMap.GestureMapping"}</Link>{"[] gestureMappings"}</code> | Serialized direction and gesture pairs. Directions must not exceed the D-pad's button count. |
| <Link id="m-idlegesture" /><code>{"private "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" idleGesture"}</code> | Backing field for `IdleGesture`. |
| <Link id="m-isgradualgrip" /><code>{"private bool isGradualGrip"}</code> | Backing field for `IsGradualGrip`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-idlegesture-2" /><code><Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" IdleGesture { get; }"}</code> | The gesture used when no direction is chosen. |
| <Link id="m-isgradualgrip-2" /><code>{"bool IsGradualGrip { get; }"}</code> | When true, the hand animator's grab value follows the grip axis on clients. |
| <Link id="m-map" /><code>{"Dictionary<int, "}<Link to="/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> Map { get; }"}</code> | D-pad direction to gesture lookup, built on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupdictionary" /><code>{"void SetupDictionary()"}</code> | Builds the direction to gesture lookup from the serialized mappings. Throws on duplicate directions. |

## Used in

Members of other types that take, return or hold a `GestureMap`:

[`HandGestureController.gestureMap`](/game-api/types/global-e-h/handgesturecontroller#m-gesturemap).
