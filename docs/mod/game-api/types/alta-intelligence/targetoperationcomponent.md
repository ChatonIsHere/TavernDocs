---
title: "TargetOperationComponent"
description: "Base component that supplies a TargetOperation for AI target scoring."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetOperationComponent

An **abstract class** in `Root.Township`, `Alta.Intelligence`.

Base component that supplies a `TargetOperation` for AI target scoring. Its object is renamed to match the operation in the editor.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ChanceOperation`](/mod/game-api/types/alta-intelligence/chanceoperation), [`DistanceOperation`](/mod/game-api/types/alta-intelligence/distanceoperation), [`FacingOperation`](/mod/game-api/types/alta-intelligence/facingoperation), [`GroundedOperation`](/mod/game-api/types/alta-intelligence/groundedoperation), [`LifetimeOperation`](/mod/game-api/types/alta-intelligence/lifetimeoperation), [`OldSenseOperation`](/mod/game-api/types/alta-intelligence/oldsenseoperation), [`RaycastGroundedOperation`](/mod/game-api/types/alta-intelligence/raycastgroundedoperation), [`RVOBlockedOperation`](/mod/game-api/types/alta-intelligence/rvoblockedoperation), [`SameTargetOperation`](/mod/game-api/types/alta-intelligence/sametargetoperation), [`SchmeecheeOperation`](/mod/game-api/types/alta-intelligence/schmeecheeoperation), [`SenseOperation`](/mod/game-api/types/alta-intelligence/senseoperation), [`StatOperation`](/mod/game-api/types/alta-intelligence/statoperation), [`VelocityLimitOperation`](/mod/game-api/types/alta-intelligence/velocitylimitoperation), [`ViewConeOperation`](/mod/game-api/types/alta-intelligence/viewconeoperation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TargetOperationComponent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"abstract "}<Link to="/mod/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | <span className="api-desc">Builds the target operation.</span> |
| <Link id="m-getname" /><code>{"protected abstract string GetName()"}</code> | <span className="api-desc">Name for the operation, also used as the object name.</span> |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | <span className="api-desc">Renames the object to `GetName` in the editor.</span> |
