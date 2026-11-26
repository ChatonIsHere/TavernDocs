---
title: "ForestAmbience"
description: "Atmosphere plugin for forests that takes its ambient and fog colours from the day/night cycle, with its own fog density."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestAmbience

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Atmosphere plugin for forests that takes its ambient and fog colours from the day/night cycle, with its own fog density.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestAmbience()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-daytimemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/daytimemanager">{"DayTimeManager"}</Link>{" dayTimeManager"}</code> | <span className="api-desc">Source of the day/night colours.</span> |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | <span className="api-desc">Fog density in the forest.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The day time manager's current ambient colour.</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The day time manager's current fog colour.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The forest fog density.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Disables the component.</span> |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">Enables the component.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Starts disabled.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Empty.</span> |

</details>
