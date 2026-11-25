---
title: "ISmoothLocomotionModifier"
description: "interface ISmoothLocomotionModifier in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISmoothLocomotionModifier

An **interface** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Derived types** [`SmoothLocomotionModifier`](/game-api/types/global-s/smoothlocomotionmodifier)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canoverridemovement" /><code>{"bool CanOverrideMovement { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getfrictionmultiplier" /><code>{"void GetFrictionMultiplier(ref float friction)"}</code> |  |
| <Link id="m-getheight" /><code>{"void GetHeight(ref float height)"}</code> |  |
| <Link id="m-getupwardgrip" /><code>{"void GetUpwardGrip(ref float upwardGrip)"}</code> |  |
| <Link id="m-isblockingteleportation" /><code>{"void IsBlockingTeleportation(ref bool isBlocking)"}</code> |  |
| <Link id="m-isoverridingmovement" /><code>{"bool IsOverridingMovement()"}</code> |  |
| <Link id="m-locomotionupdate" /><code>{"void LocomotionUpdate()"}</code> |  |
| <Link id="m-movementoverride" /><code>{"bool MovementOverride()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ISmoothLocomotionModifier`:

[`SmoothLocomotion.InitializeModifier`](/game-api/types/global-s/smoothlocomotion#m-initializemodifier), [`SmoothLocomotion.RemoveModifier`](/game-api/types/global-s/smoothlocomotion#m-removemodifier).
