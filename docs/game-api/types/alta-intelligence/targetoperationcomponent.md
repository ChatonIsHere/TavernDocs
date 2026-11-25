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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ChanceOperation`](/game-api/types/alta-intelligence/chanceoperation), [`DistanceOperation`](/game-api/types/alta-intelligence/distanceoperation), [`FacingOperation`](/game-api/types/alta-intelligence/facingoperation), [`GroundedOperation`](/game-api/types/alta-intelligence/groundedoperation), [`LifetimeOperation`](/game-api/types/alta-intelligence/lifetimeoperation), [`OldSenseOperation`](/game-api/types/alta-intelligence/oldsenseoperation), [`RaycastGroundedOperation`](/game-api/types/alta-intelligence/raycastgroundedoperation), [`RVOBlockedOperation`](/game-api/types/alta-intelligence/rvoblockedoperation), [`SameTargetOperation`](/game-api/types/alta-intelligence/sametargetoperation), [`SchmeecheeOperation`](/game-api/types/alta-intelligence/schmeecheeoperation), [`SenseOperation`](/game-api/types/alta-intelligence/senseoperation), [`StatOperation`](/game-api/types/alta-intelligence/statoperation), [`VelocityLimitOperation`](/game-api/types/alta-intelligence/velocitylimitoperation), [`ViewConeOperation`](/game-api/types/alta-intelligence/viewconeoperation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected TargetOperationComponent()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoperation" /><code>{"abstract "}<Link to="/game-api/types/alta-intelligence/targetoperation">{"TargetOperation"}</Link>{" GetOperation()"}</code> | Builds the target operation. |
| <Link id="m-getname" /><code>{"protected abstract string GetName()"}</code> | Name for the operation, also used as the object name. |
| <Link id="m-onvalidate" /><code>{"protected virtual void OnValidate()"}</code> | Renames the object to `GetName` in the editor. |
