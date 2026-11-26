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
| <Link id="m-ctor" /><code>{"MouldRack()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-frames" /><code>{"private Transform[] frames"}</code> | The mould frame transforms that move. |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> | Curve from slide progress to the time used for the position and rotation curves. |
| <Link id="m-seperation" /><code>{"private float seperation"}</code> | Spacing between frames along the progress curve. |
| <Link id="m-slide" /><code>{"private float slide"}</code> | Backing field for `Slide`. |
| <Link id="m-snapweight" /><code>{"private float snapWeight"}</code> | How strongly the slide snaps to frame steps. 1 means no snapping. |
| <Link id="m-xrotation" /><code>{"private AnimationCurve xRotation"}</code> | Curve for each frame's X rotation, in degrees. |
| <Link id="m-yposition" /><code>{"private AnimationCurve yPosition"}</code> | Curve for each frame's local Y position. |
| <Link id="m-zposition" /><code>{"private AnimationCurve zPosition"}</code> | Curve for each frame's local Z position. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-slide-2" /><code>{"float Slide { get; set; }"}</code> | Rack position from 0 to 1. Setting it moves the frames. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Places the frames for the starting slide. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Places the frames when edited in the inspector. |
| <Link id="m-updatepositions" /><code>{"private void UpdatePositions()"}</code> | Snaps the slide toward the nearest frame step, then sets each frame's position and rotation from the curves. |

</details>
