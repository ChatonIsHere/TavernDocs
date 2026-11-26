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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DayTimeEffect()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isactiveduringday" /><code>{"private bool isActiveDuringDay"}</code> | True to play by day, false to play at night. |
| <Link id="m-particlesystem" /><code>{"private ParticleSystem particleSystem"}</code> | The particles to play. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Stops listening for night changes. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | On headless, destroys the particles and the object; otherwise listens for `GameTimeManager.NightChanged` and updates now. |
| <Link id="m-updateenabled" /><code>{"private void UpdateEnabled(bool isNight)"}</code> | Plays or stops emitting depending on whether it's night and `isActiveDuringDay`. |

</details>
