---
title: "LocomotionModifierAction"
description: "abstract class LocomotionModifierAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionModifierAction

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SendToSafetyLocoAction`](/game-api/types/global-s/sendtosafetylocoaction), [`SetStepSoundOverrideLocoAction`](/game-api/types/global-s/setstepsoundoverridelocoaction), [`SpeedModifierLocoAction`](/game-api/types/global-s/speedmodifierlocoaction)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LocomotionModifierAction()"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-begin" /><code>{"abstract void Begin("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-finish" /><code>{"abstract void Finish("}<Link to="/game-api/types/global-s/smoothlocomotionplayercontroller">{"SmoothLocomotionPlayerController"}</Link>{" player)"}</code> |  |

## Used in

Members of other types that take, return or hold a `LocomotionModifierAction`:

[`DepthCheckLocoCheck.deepActions`](/game-api/types/global-c-d/depthchecklococheck#m-deepactions), [`DepthCheckLocoCheck.shallowActions`](/game-api/types/global-c-d/depthchecklococheck#m-shallowactions), [`EnterLocomotionCheck.actions`](/game-api/types/global-e-h/enterlocomotioncheck#m-actions).
