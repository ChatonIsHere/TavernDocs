---
title: "CaveAmbience"
description: "Atmosphere plugin for caves: a fixed ambient colour, fog colour and density, and objects (such as the sky) hidden while it's active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CaveAmbience

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Atmosphere plugin for caves: a fixed ambient colour, fog colour and density, and objects (such as the sky) hidden while it's active.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CaveAmbience()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caveambience" /><code>{"private Color caveAmbience"}</code> | Ambient colour in caves. |
| <Link id="m-cavefogcolor" /><code>{"private Color caveFogColor"}</code> | Fog colour in caves. |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | Fog density in caves. |
| <Link id="m-todisable" /><code>{"private GameObject[] toDisable"}</code> | Objects hidden while the cave ambience is active. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | The cave ambient colour. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The cave fog colour. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The cave fog density. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Turns the hidden objects back on. |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | If it has priority, hides `toDisable` and blends ambient, fog colour and density to the cave values. |
| <Link id="m-reenabled" /><code>{"protected override void Reenabled()"}</code> | Blends back to the cave ambient colour if nothing overrides it. |
