---
title: "FaceObject"
description: "Rotates parts around an axis to follow the average position of the hands holding linked pickups, like a crank or lever."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FaceObject

A **class** in `Root.Township`, the global namespace.

Rotates parts around an axis to follow the average position of the hands holding linked pickups, like a crank or lever. Looks like test code: it spawns a stray sphere in `Start`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FaceObject()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorcount" /><code>{"private int lastInteractorCount"}</code> | Hand count from the last midpoint, used to spot grab changes. |
| <Link id="m-needstozero" /><code>{"private bool needsToZero"}</code> | Set when the grab changes so `Advanced` resets its last direction. |
| <Link id="m-partstorotate" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{"[] partsToRotate"}</code> | Parts to rotate, each with its pickups, axis and settings. |
| <Link id="m-sphere" /><code>{"private GameObject sphere"}</code> | Primitive sphere created in `Start`, never used. |

</details>

## Methods

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advanced" /><code>{"private void Advanced("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | Rotates in local space around the axis towards the hands, with optional slerp, clamped to `clampDegrees` from identity. |
| <Link id="m-clamparoundidentity" /><code>{"private Quaternion ClampAroundIdentity(Quaternion rotation, float degrees)"}</code> | Limits a rotation to a number of degrees from identity. |
| <Link id="m-getmidpoint" /><code>{"private Vector3 GetMidPoint("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups, Vector3 baseObjectPos)"}</code> | Averages the hand positions on the pickups, or returns the base position when none; flags a reset when the hand count crosses one. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws each part's rotation axis. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Normalises each part's rotation axis. |
| <Link id="m-simple" /><code>{"private void Simple("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | Rotates the part around its world axis by the change in direction to the hands since last frame. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Creates a small primitive sphere (unused), checks references and records the starting direction for each part. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | For each part, updates the tracked hand position and rotates it; logs and stops when no linked pickup has an interactors list. |

</details>
