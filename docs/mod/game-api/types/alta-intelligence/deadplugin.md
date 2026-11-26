---
title: "DeadPlugin"
description: "Atmosphere plugin used while the player is dead: fades the fog to a set density and, optionally, colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DeadPlugin

A **class** in `Root.Township`, `Alta.Combat`.

Atmosphere plugin used while the player is dead: fades the fog to a set density and, optionally, colour.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DeadPlugin()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fogcolor" /><code>{"private Color fogColor"}</code> | <span className="api-desc">Fog and ambience colour. Default black.</span> |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | <span className="api-desc">Fog density to fade to. Default 0.5.</span> |
| <Link id="m-isupdatingfogcolor" /><code>{"private bool isUpdatingFogColor"}</code> | <span className="api-desc">Whether to also fade the fog colour.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Speed of the fade. Default 1.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The plugin's fog colour, used as ambience.</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The plugin's fog colour.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The plugin's fog density.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">When turned on, takes priority, stops other fog density control and lerps density (and colour if set) to its values.</span> |
