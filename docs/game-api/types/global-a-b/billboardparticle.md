---
title: "BillboardParticle"
description: "Client component for a particle system that turns it to face the main camera while it plays, for the length of the particle system."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BillboardParticle

A **class** in `Root.Township`, no namespace.

Client component for a particle system that turns it to face the main camera while it plays, for the length of the particle system.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BillboardParticle()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"private float duration"}</code> | How long to keep facing the camera, taken from the particle system. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | The local player's `HeadFollow`, watched for movement. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-billboardsystem" /><code>{"private IEnumerator BillboardSystem() (iterator)"}</code> | Coroutine: for `duration` seconds, looks at the camera whenever the player's head moved. Logs every time it turns. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops the coroutine. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Starts the billboard coroutine. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: copies the duration from the particle system on the same object, or logs an error if there is none. |

</details>
