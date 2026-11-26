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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteriorFogAmbience()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-basementambience" /><code>{"private Color basementAmbience"}</code> | <span className="api-desc">Ambient colour used inside, default black.</span> |
| <Link id="m-basementfogcolor" /><code>{"private Color basementFogColor"}</code> | <span className="api-desc">Fog colour used inside, default black.</span> |
| <Link id="m-fogdensity" /><code>{"private float fogDensity"}</code> | <span className="api-desc">Fog density used inside, default 0.05.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The interior ambient colour, `basementAmbience`.</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The interior fog colour, `basementFogColor`.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The interior fog density.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Calls the base disable only.</span> |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">If this plugin has priority, blends ambience (or its override), fog colour and fog density to this plugin's values.</span> |
| <Link id="m-reenabled" /><code>{"protected override void Reenabled()"}</code> | <span className="api-desc">Blends the ambient colour back to this plugin's value if it has priority and no override is set.</span> |
