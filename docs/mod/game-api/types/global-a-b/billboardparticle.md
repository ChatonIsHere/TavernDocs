---
title: "BillboardParticle"
description: "Client component for a particle system that turns it to face the main camera while it plays, for the length of the particle system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BillboardParticle

A **class** in `Root.Township`, the global namespace.

Client component for a particle system that turns it to face the main camera while it plays, for the length of the particle system.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BillboardParticle()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | <span className="api-desc">How long to keep facing the camera, taken from the particle system.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">The local player's `HeadFollow`, watched for movement.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-billboardsystem" /><code>{"private IEnumerator BillboardSystem() (iterator)"}</code> | <span className="api-desc">Coroutine: for `duration` seconds, looks at the camera whenever the player's head moved. Logs every time it turns.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops the coroutine.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Starts the billboard coroutine.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: copies the duration from the particle system on the same object, or logs an error if there is none.</span> |

</details>
