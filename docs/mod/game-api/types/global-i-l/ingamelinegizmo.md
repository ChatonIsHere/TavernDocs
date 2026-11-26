---
title: "InGameLineGizmo"
description: "Pooled line drawn in the game world between two points, made by InGameGizmosSettings.DrawLine."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InGameLineGizmo

A **class** in `Root.Township`, the global namespace.

Pooled line drawn in the game world between two points, made by `InGameGizmosSettings.DrawLine`. Its ends can follow transforms.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InGameLineGizmo()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private Transform from"}</code> | <span className="api-desc">Start marker transform.</span> |
| <Link id="m-lastfrom" /><code>{"private Vector3 lastFrom"}</code> | <span className="api-desc">Last known start position.</span> |
| <Link id="m-lastto" /><code>{"private Vector3 lastTo"}</code> | <span className="api-desc">Last known end position.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">The line's own material copy.</span> |
| <Link id="m-renderer" /><code>{"private LineRenderer renderer"}</code> | <span className="api-desc">The line renderer.</span> |
| <Link id="m-to" /><code>{"private Transform to"}</code> | <span className="api-desc">End marker transform.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setpositions" /><code>{"void SetPositions(Vector3 from, Vector3 to)"}</code> | <span className="api-desc">Places the ends at two world points, or parents them to two transforms with local offsets so they follow.</span> |
| <Link id="m-setpositions-2" /><code>{"void SetPositions(Transform from, Transform to, Vector3 offsetFrom, Vector3 offsetTo)"}</code> | <span className="api-desc">Places the ends at two world points, or parents them to two transforms with local offsets so they follow.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the line to two points and gives it its own material copy.</span> |
| <Link id="m-requestedsetup" /><code>{"private void RequestedSetup("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Runs when taken from the pool. Tints the line with `InGameGizmosSettings.Color`.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Draws the line between the end markers. If a followed transform was destroyed, keeps the end at its last spot.</span> |

</details>
