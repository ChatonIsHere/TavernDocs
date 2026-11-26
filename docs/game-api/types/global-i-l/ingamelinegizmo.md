---
title: "InGameLineGizmo"
description: "Pooled line drawn in the game world between two points, made by InGameGizmosSettings.DrawLine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameLineGizmo

A **class** in `Root.Township`, no namespace.

Pooled line drawn in the game world between two points, made by `InGameGizmosSettings.DrawLine`. Its ends can follow transforms.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Attributes** `RequireComponent`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"InGameLineGizmo()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private Transform from"}</code> | Start marker transform. |
| <Link id="m-lastfrom" /><code>{"private Vector3 lastFrom"}</code> | Last known start position. |
| <Link id="m-lastto" /><code>{"private Vector3 lastTo"}</code> | Last known end position. |
| <Link id="m-material" /><code>{"private Material material"}</code> | The line's own material copy. |
| <Link id="m-renderer" /><code>{"private LineRenderer renderer"}</code> | The line renderer. |
| <Link id="m-to" /><code>{"private Transform to"}</code> | End marker transform. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpositions" /><code>{"void SetPositions(Vector3 from, Vector3 to)"}</code> | Places the ends at two world points, or parents them to two transforms with local offsets so they follow. |
| <Link id="m-setpositions-2" /><code>{"void SetPositions(Transform from, Transform to, Vector3 offsetFrom, Vector3 offsetTo)"}</code> | Places the ends at two world points, or parents them to two transforms with local offsets so they follow. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the line to two points and gives it its own material copy. |
| <Link id="m-requestedsetup" /><code>{"private void RequestedSetup("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | Runs when taken from the pool. Tints the line with `InGameGizmosSettings.Color`. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Draws the line between the end markers. If a followed transform was destroyed, keeps the end at its last spot. |

</details>
