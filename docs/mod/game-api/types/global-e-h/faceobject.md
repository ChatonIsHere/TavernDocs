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
| <Link id="m-ctor" /><code>{"FaceObject()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastinteractorcount" /><code>{"private int lastInteractorCount"}</code> | <span className="api-desc">Hand count from the last midpoint, used to spot grab changes.</span> |
| <Link id="m-needstozero" /><code>{"private bool needsToZero"}</code> | <span className="api-desc">Set when the grab changes so `Advanced` resets its last direction.</span> |
| <Link id="m-partstorotate" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{"[] partsToRotate"}</code> | <span className="api-desc">Parts to rotate, each with its pickups, axis and settings.</span> |
| <Link id="m-sphere" /><code>{"private GameObject sphere"}</code> | <span className="api-desc">Primitive sphere created in `Start`, never used.</span> |

</details>

## Methods

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advanced" /><code>{"private void Advanced("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | <span className="api-desc">Rotates in local space around the axis towards the hands, with optional slerp, clamped to `clampDegrees` from identity.</span> |
| <Link id="m-clamparoundidentity" /><code>{"private Quaternion ClampAroundIdentity(Quaternion rotation, float degrees)"}</code> | <span className="api-desc">Limits a rotation to a number of degrees from identity.</span> |
| <Link id="m-getmidpoint" /><code>{"private Vector3 GetMidPoint("}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{"[] pickups, Vector3 baseObjectPos)"}</code> | <span className="api-desc">Averages the hand positions on the pickups, or returns the base position when none; flags a reset when the hand count crosses one.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws each part's rotation axis.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Normalises each part's rotation axis.</span> |
| <Link id="m-simple" /><code>{"private void Simple("}<Link to="/mod/game-api/types/global-q-r/rotationbucket">{"RotationBucket"}</Link>{" item)"}</code> | <span className="api-desc">Rotates the part around its world axis by the change in direction to the hands since last frame.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Creates a small primitive sphere (unused), checks references and records the starting direction for each part.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">For each part, updates the tracked hand position and rotates it; logs and stops when no linked pickup has an interactors list.</span> |

</details>
