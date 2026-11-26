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
| <Link id="m-ctor" /><code>{"DeadPlugin()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fogcolor" /><code>{"private Color fogColor"}</code> | Fog and ambience colour. Default black. |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | Fog density to fade to. Default 0.5. |
| <Link id="m-isupdatingfogcolor" /><code>{"private bool isUpdatingFogColor"}</code> | Whether to also fade the fog colour. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Speed of the fade. Default 1. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | The plugin's fog colour, used as ambience. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The plugin's fog colour. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The plugin's fog density. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | When turned on, takes priority, stops other fog density control and lerps density (and colour if set) to its values. |
