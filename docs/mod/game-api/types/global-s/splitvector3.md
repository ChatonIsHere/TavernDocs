---
title: "SplitVector3"
description: "A vector stored as a unit direction plus a length."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SplitVector3

A **struct** in `Root.Township`, the global namespace.

A vector stored as a unit direction plus a length. Used for hand body offsets and grip strength in climbing.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SplitVector3(Vector3 original)"}</code> | <span className="api-desc">Creates a `SplitVector3` from `direction` and `length`.</span> |
| <Link id="m-ctor-2" /><code>{"SplitVector3(Vector3 direction, float length)"}</code> | <span className="api-desc">Creates a `SplitVector3` from `direction` and `length`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-direction" /><code>{"Vector3 direction"}</code> | <span className="api-desc">Unit direction. Dividing by zero length gives NaN when built from a zero vector.</span> |
| <Link id="m-length" /><code>{"float length"}</code> | <span className="api-desc">Magnitude of the original vector.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-down" /><code>{"static "}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Down { get; }"}</code> | <span className="api-desc">Down direction with length 1.</span> |
| <Link id="m-right" /><code>{"static "}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Right { get; }"}</code> | <span className="api-desc">Right direction with length 1.</span> |
| <Link id="m-up" /><code>{"static "}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Up { get; }"}</code> | <span className="api-desc">Up direction with length 1.</span> |
| <Link id="m-zero" /><code>{"static "}<Link to="/mod/game-api/types/global-s/splitvector3">{"SplitVector3"}</Link>{" Zero { get; }"}</code> | <span className="api-desc">Zero direction with length 0.</span> |

## Used in

Members of other types that take, return or hold a `SplitVector3`:

<div className="api-used-in">

[`ClimberSettings.GetGripStrengthMultiplier`](/mod/game-api/types/global-c-d/climbersettings#m-getgripstrengthmultiplier), [`ClimberSettings.GetUpwardGripMultiplier`](/mod/game-api/types/global-c-d/climbersettings#m-getupwardgripmultiplier), [`HandHandler.BodyOffset`](/mod/game-api/types/global-e-h/handhandler#m-bodyoffset).

</div>
