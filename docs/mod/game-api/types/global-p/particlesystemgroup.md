---
title: "ParticleSystemGroup"
description: "Component that scales emission rate and start size of all child particle systems together and works out the longest particle lifetime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleSystemGroup

A **class** in `Root.Township`, the global namespace.

Component that scales emission rate and start size of all child particle systems together and works out the longest particle lifetime.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleSystemGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, Vector2> systemsInitialSystems"}</code> | <span className="api-desc">Each child system's original emission rate (x) and start size (y).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | <span className="api-desc">Longest start lifetime among the child particle systems, in seconds.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemultiplier" /><code>{"void UpdateMultiplier(float multiplier)"}</code> | <span className="api-desc">Sets each child system's emission rate and start size to its original value times the multiplier.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Records each child system's starting emission rate and size, and sets `Duration` to the longest start lifetime.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Puts the multiplier back to 1.</span> |

</details>
