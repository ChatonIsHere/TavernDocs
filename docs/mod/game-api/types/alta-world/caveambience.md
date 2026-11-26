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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CaveAmbience()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-caveambience" /><code>{"private Color caveAmbience"}</code> | <span className="api-desc">Ambient colour in caves.</span> |
| <Link id="m-cavefogcolor" /><code>{"private Color caveFogColor"}</code> | <span className="api-desc">Fog colour in caves.</span> |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | <span className="api-desc">Fog density in caves.</span> |
| <Link id="m-todisable" /><code>{"private GameObject[] toDisable"}</code> | <span className="api-desc">Objects hidden while the cave ambience is active.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The cave ambient colour.</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The cave fog colour.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The cave fog density.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Turns the hidden objects back on.</span> |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">If it has priority, hides `toDisable` and blends ambient, fog colour and density to the cave values.</span> |
| <Link id="m-reenabled" /><code>{"protected override void Reenabled()"}</code> | <span className="api-desc">Blends back to the cave ambient colour if nothing overrides it.</span> |
