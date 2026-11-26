---
title: "MouldRack"
description: "Visual rack that slides a set of mould frames along curves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MouldRack

A **class** in `Root.Township`, `Alta.Blacksmithing`.

Visual rack that slides a set of mould frames along curves. Setting `Slide` moves the frames, snapping toward one frame per step.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MouldRack()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-frames" /><code>{"private Transform[] frames"}</code> | <span className="api-desc">The mould frame transforms that move.</span> |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | <span className="api-desc">Curve from slide progress to the time used for the position and rotation curves.</span> |
| <Link id="m-seperation" /><code>{"private float seperation"}</code> | <span className="api-desc">Spacing between frames along the progress curve.</span> |
| <Link id="m-slide" /><code>{"private float slide"}</code> | <span className="api-desc">Backing field for `Slide`.</span> |
| <Link id="m-snapweight" /><code>{"private float snapWeight"}</code> | <span className="api-desc">How strongly the slide snaps to frame steps. 1 means no snapping.</span> |
| <Link id="m-xrotation" /><code>{"private AnimationCurve xRotation"}</code> | <span className="api-desc">Curve for each frame's X rotation, in degrees.</span> |
| <Link id="m-yposition" /><code>{"private AnimationCurve yPosition"}</code> | <span className="api-desc">Curve for each frame's local Y position.</span> |
| <Link id="m-zposition" /><code>{"private AnimationCurve zPosition"}</code> | <span className="api-desc">Curve for each frame's local Z position.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slide-2" /><code>{"float Slide { get; set; }"}</code> | <span className="api-desc">Rack position from 0 to 1. Setting it moves the frames.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Places the frames for the starting slide.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Places the frames when edited in the inspector.</span> |
| <Link id="m-updatepositions" /><code>{"private void UpdatePositions()"}</code> | <span className="api-desc">Snaps the slide toward the nearest frame step, then sets each frame's position and rotation from the curves.</span> |

</details>
