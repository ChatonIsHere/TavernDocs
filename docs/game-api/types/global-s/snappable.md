---
title: "Snappable"
description: "Editor helper for level building: snaps the object's local rotation to fixed steps and lists child snap points named snap_."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Snappable

A **class** in `Root.Township`, no namespace.

Editor helper for level building: snaps the object's local rotation to fixed steps and lists child snap points named `snap_`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Snappable()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issnappingrotations" /><code>{"private bool isSnappingRotations"}</code> | Whether rotation snapping is on. |
| <Link id="m-rotationsnaps" /><code>{"private float rotationSnaps"}</code> | Rotation step in degrees. |
| <Link id="m-snappoints" /><code>{"private List<Transform> snapPoints"}</code> | Backing list for `SnapPoints`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-snappoints-2" /><code>{"IEnumerable<Transform> SnapPoints { get; }"}</code> | The child transforms used as snap points. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refindsnappoints" /><code>{"void RefindSnapPoints()"}</code> | Rebuilds `snapPoints` from children whose name starts with `snap_` (any case). |
| <Link id="m-snaprotation" /><code>{"void SnapRotation()"}</code> | Rounds each local Euler angle to the nearest `rotationSnaps` step if enabled. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Snaps the rotation when values change in the editor. |

</details>
