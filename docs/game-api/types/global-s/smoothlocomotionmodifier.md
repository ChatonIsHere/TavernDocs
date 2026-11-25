---
title: "SmoothLocomotionModifier"
description: "abstract class SmoothLocomotionModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SmoothLocomotionModifier

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`, [`ISmoothLocomotionModifier`](/game-api/types/global-i-l/ismoothlocomotionmodifier)
- **Derived types** [`Climber`](/game-api/types/global-c-d/climber)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SmoothLocomotionModifier()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-locomotion" /><code>{"protected "}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"virtual bool CanOverrideMovement { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-drawgizmos" /><code>{"abstract void DrawGizmos("}<Link to="/game-api/types/global-s/smoothlocomotion">{"SmoothLocomotion"}</Link>{" locomotion)"}</code> |  |
| <Link id="m-getfrictionmultiplier" /><code>{"abstract void GetFrictionMultiplier(ref float friction)"}</code> |  |
| <Link id="m-getheight" /><code>{"abstract void GetHeight(ref float height)"}</code> |  |
| <Link id="m-getupwardgrip" /><code>{"virtual void GetUpwardGrip(ref float upwardGrip)"}</code> |  |
| <Link id="m-isblockingteleportation" /><code>{"virtual void IsBlockingTeleportation(ref bool isBlocking)"}</code> |  |
| <Link id="m-isoverridingmovement" /><code>{"virtual bool IsOverridingMovement()"}</code> |  |
| <Link id="m-locomotionupdate" /><code>{"abstract void LocomotionUpdate()"}</code> |  |
| <Link id="m-movementoverride" /><code>{"virtual bool MovementOverride()"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-ondisable" /><code>{"protected virtual void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"protected virtual void OnEnable()"}</code> |  |
