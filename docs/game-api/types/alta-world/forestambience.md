---
title: "ForestAmbience"
description: "class ForestAmbience in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestAmbience

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForestAmbience()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-daytimemanager" /><code>{"private "}<Link to="/game-api/types/alta-world/daytimemanager">{"DayTimeManager"}</Link>{" dayTimeManager"}</code> |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>
