---
title: "SplitVector3"
description: "A vector stored as a unit direction plus a length."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplitVector3

A **struct** in `Root.Township`, no namespace.

A vector stored as a unit direction plus a length. Used for hand body offsets and grip strength in climbing.

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitVector3(Vector3 original)"}</code> | Creates a `SplitVector3` from `direction` and `length`. |
| <Link id="m-ctor-2" /><code>{"SplitVector3(Vector3 direction, float length)"}</code> | Creates a `SplitVector3` from `direction` and `length`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | Unit direction. Dividing by zero length gives NaN when built from a zero vector. |
| <Link id="m-length" /><code>{"float length"}</code> | Magnitude of the original vector. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-down" /><code>{"static "}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Down { get; }"}</code> | Down direction with length 1. |
| <Link id="m-right" /><code>{"static "}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Right { get; }"}</code> | Right direction with length 1. |
| <Link id="m-up" /><code>{"static "}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Up { get; }"}</code> | Up direction with length 1. |
| <Link id="m-zero" /><code>{"static "}<Link to="/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Zero { get; }"}</code> | Zero direction with length 0. |

## Used in

Members of other types that take, return or hold a `SplitVector3`:

[`ClimberSettings.GetGripStrengthMultiplier`](/game-api/types/global-c-d/climbersettings#m-getgripstrengthmultiplier), [`ClimberSettings.GetUpwardGripMultiplier`](/game-api/types/global-c-d/climbersettings#m-getupwardgripmultiplier), [`HandHandler.BodyOffset`](/game-api/types/global-e-h/handhandler#m-bodyoffset).
