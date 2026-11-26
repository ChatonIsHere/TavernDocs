---
title: "LocomotionModifierCheck"
description: "Asset with rules for a LocomotionModifier area: what happens when a player enters or leaves, and where they may teleport."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifierCheck

An **abstract class** in `Root.Township`, no namespace.

Asset with rules for a `LocomotionModifier` area: what happens when a player enters or leaves, and where they may teleport. Examples are `DepthCheckLocoCheck` and `EnterLocomotionCheck`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`DepthCheckLocoCheck`](/game-api/types/global-c-d/depthchecklococheck), [`EnterLocomotionCheck`](/game-api/types/global-e-h/enterlocomotioncheck)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LocomotionModifierCheck()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enter" /><code>{"abstract void Enter("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | Called when a player enters the area. |
| <Link id="m-isvalidteleportationposition" /><code>{"abstract bool IsValidTeleportationPosition(Vector3 position, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Bounds bounds)"}</code> | Whether a player may teleport to this position inside the area. |
| <Link id="m-leave" /><code>{"abstract void Leave("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player, Bounds bounds)"}</code> | Called when a player leaves the area. |

## Used in

Members of other types that take, return or hold a `LocomotionModifierCheck`:

[`LocomotionModifier.check`](/game-api/types/global-i-l/locomotionmodifier#m-check), [`LocomotionModifierVolumeTrigger.check`](/game-api/types/global-i-l/locomotionmodifiervolumetrigger#m-check).
