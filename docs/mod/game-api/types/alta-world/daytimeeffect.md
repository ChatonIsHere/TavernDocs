---
title: "DayTimeEffect"
description: "Plays a particle system only by day or only by night."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DayTimeEffect

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Plays a particle system only by day or only by night. Client only: on a headless server it destroys itself.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DayTimeEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveduringday" /><code>{"private bool isActiveDuringDay"}</code> | <span className="api-desc">True to play by day, false to play at night.</span> |
| <Link id="m-particlesystem" /><code>{"private ParticleSystem particleSystem"}</code> | <span className="api-desc">The particles to play.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Stops listening for night changes.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">On headless, destroys the particles and the object; otherwise listens for `GameTimeManager.NightChanged` and updates now.</span> |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled(bool isNight)"}</code> | <span className="api-desc">Plays or stops emitting depending on whether it's night and `isActiveDuringDay`.</span> |

</details>
