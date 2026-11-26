---
title: "InteriorFogAmbience"
description: "Atmosphere plugin for interiors such as basements: while it has priority, it blends the ambient light, fog colour and fog density to its own values."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteriorFogAmbience

A **class** in `Root.Township`, `Features.World.Environmental.Atmosphere`.

Atmosphere plugin for interiors such as basements: while it has priority, it blends the ambient light, fog colour and fog density to its own values. Client visuals.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteriorFogAmbience()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basementambience" /><code>{"private Color basementAmbience"}</code> | Ambient colour used inside, default black. |
| <Link id="m-basementfogcolor" /><code>{"private Color basementFogColor"}</code> | Fog colour used inside, default black. |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | Fog density used inside, default 0.05. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | The interior ambient colour, `basementAmbience`. |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The interior fog colour, `basementFogColor`. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The interior fog density. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | Calls the base disable only. |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | If this plugin has priority, blends ambience (or its override), fog colour and fog density to this plugin's values. |
| <Link id="m-reenabled" /><code>{"protected override void Reenabled()"}</code> | Blends the ambient colour back to this plugin's value if it has priority and no override is set. |
