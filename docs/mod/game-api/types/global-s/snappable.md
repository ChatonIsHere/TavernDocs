---
title: "Snappable"
description: "Editor helper for level building: snaps the object's local rotation to fixed steps and lists child snap points named snap_."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Snappable

A **class** in `Root.Township`, the global namespace.

Editor helper for level building: snaps the object's local rotation to fixed steps and lists child snap points named `snap_`.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Snappable()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issnappingrotations" /><code>{"private bool isSnappingRotations"}</code> | <span className="api-desc">Whether rotation snapping is on.</span> |
| <Link id="m-rotationsnaps" /><code>{"private float rotationSnaps"}</code> | <span className="api-desc">Rotation step in degrees.</span> |
| <Link id="m-snappoints" /><code>{"private List<Transform> snapPoints"}</code> | <span className="api-desc">Backing list for `SnapPoints`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-snappoints-2" /><code>{"IEnumerable<Transform> SnapPoints { get; }"}</code> | <span className="api-desc">The child transforms used as snap points.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refindsnappoints" /><code>{"void RefindSnapPoints()"}</code> | <span className="api-desc">Rebuilds `snapPoints` from children whose name starts with `snap_` (any case).</span> |
| <Link id="m-snaprotation" /><code>{"void SnapRotation()"}</code> | <span className="api-desc">Rounds each local Euler angle to the nearest `rotationSnaps` step if enabled.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Snaps the rotation when values change in the editor.</span> |

</details>
