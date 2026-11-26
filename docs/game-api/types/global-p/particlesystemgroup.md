---
title: "ParticleSystemGroup"
description: "Component that scales emission rate and start size of all child particle systems together and works out the longest particle lifetime."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleSystemGroup

A **class** in `Root.Township`, no namespace.

Component that scales emission rate and start size of all child particle systems together and works out the longest particle lifetime.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ParticleSystemGroup()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-systemsinitialsystems" /><code>{"private Dictionary<ParticleSystem, Vector2> systemsInitialSystems"}</code> | Each child system's original emission rate (x) and start size (y). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-duration" /><code>{"float Duration { get; private set; }"}</code> | Longest start lifetime among the child particle systems, in seconds. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-updatemultiplier" /><code>{"void UpdateMultiplier(float multiplier)"}</code> | Sets each child system's emission rate and start size to its original value times the multiplier. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Records each child system's starting emission rate and size, and sets `Duration` to the longest start lifetime. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Puts the multiplier back to 1. |

</details>
