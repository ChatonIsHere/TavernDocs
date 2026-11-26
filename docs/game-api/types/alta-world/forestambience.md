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

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestAmbience()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-daytimemanager" /><code>{"private "}<Link to="/game-api/types/alta-world/daytimemanager">{"DayTimeManager"}</Link>{" dayTimeManager"}</code> | Source of the day/night colours. |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | Fog density in the forest. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | The day time manager's current ambient colour. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The day time manager's current fog colour. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The forest fog density. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Disables the component. |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | Enables the component. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Starts disabled. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Empty. |

</details>
