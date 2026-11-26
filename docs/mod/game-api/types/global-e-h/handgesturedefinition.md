---
title: "HandGestureDefinition"
description: "A hand gesture asset (such as pointing), matched to a transition on the hand animator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandGestureDefinition

A **class** in `Root.Township`, the global namespace.

A hand gesture asset (such as pointing), matched to a transition on the hand animator. All of them are loaded from `Resources/Gesture Definitions`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`HandGestureDefinition.Create`](/mod/game-api/types/global-e-h/handgesturedefinition-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/handgesturedefinition-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandGestureDefinition()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activefingers" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handfingers">{"HandFingers"}</Link>{" activeFingers"}</code> | Backing field for `ActiveFingers`, the fingers whose collisions turn on while the gesture is active. |
| <Link id="m-animatortransitionindex" /><code>{"private int animatorTransitionIndex"}</code> | Backing field for `AnimatorTransitionIndex`. Must match the transition number in the hand animator. |
| <Link id="m-gestureforanimationindex" /><code>{"private static Dictionary<int, "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> gestureForAnimationIndex"}</code> | Backing field for `GestureForAnimationIndex`, loaded from the "Gesture Definitions" resources on first use. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activefingers-2" /><code><Link to="/mod/game-api/types/global-e-h/handfingers">{"HandFingers"}</Link>{" ActiveFingers { get; }"}</code> | Fingers whose collisions are turned on while the gesture is active. |
| <Link id="m-animatortransitionindex-2" /><code>{"int AnimatorTransitionIndex { get; }"}</code> | Number of the hand animator transition this gesture uses. |
| <Link id="m-gestureforanimationindex-2" /><code>{"static Dictionary<int, "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{"> GestureForAnimationIndex { get; }"}</code> | Every gesture by animator transition index, loaded on first use. |
| <Link id="m-nogesture" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/handgesturedefinition">{"HandGestureDefinition"}</Link>{" NoGesture { get; }"}</code> | Always null, standing for no gesture. |

## Used in

Members of other types that take, return or hold a `HandGestureDefinition`:

[`BowString.arrowPullGesture`](/mod/game-api/types/global-a-b/bowstring#m-arrowpullgesture), [`GestureMap.gestureMap`](/mod/game-api/types/global-e-h/gesturemap#m-gesturemap), [`GestureMap.idleGesture`](/mod/game-api/types/global-e-h/gesturemap#m-idlegesture), [`GestureMap.IdleGesture`](/mod/game-api/types/global-e-h/gesturemap#m-idlegesture-2), [`GestureMap.Map`](/mod/game-api/types/global-e-h/gesturemap#m-map), [`GestureMap.GestureMapping.gesture`](/mod/game-api/types/global-e-h/gesturemap-gesturemapping#m-gesture), [`GestureMap.GestureMapping.Gesture`](/mod/game-api/types/global-e-h/gesturemap-gesturemapping#m-gesture-2), [`HandCollisionsController.EnabledCollidersForGesture`](/mod/game-api/types/global-e-h/handcollisionscontroller#m-enabledcollidersforgesture), [`HandCollisionsController.EnabledCollidersForIdleGesture`](/mod/game-api/types/global-e-h/handcollisionscontroller#m-enabledcollidersforidlegesture), [`HandGestureController.currentGesture`](/mod/game-api/types/global-e-h/handgesturecontroller#m-currentgesture), [`HandGestureController.GetCurrentGesture`](/mod/game-api/types/global-e-h/handgesturecontroller#m-getcurrentgesture), [`HandGestureController.OverrideGesture`](/mod/game-api/types/global-e-h/handgesturecontroller#m-overridegesture), [`HandGestureController.PerformGesture`](/mod/game-api/types/global-e-h/handgesturecontroller#m-performgesture), [`HandGestureController.previousGesture`](/mod/game-api/types/global-e-h/handgesturecontroller#m-previousgesture), [`HandGestureTrigger.definition`](/mod/game-api/types/global-e-h/handgesturetrigger#m-definition), [`HandHoverPoint.gesture`](/mod/game-api/types/global-e-h/handhoverpoint#m-gesture).
