---
title: "IndoorAmbienceBoost"
description: "Atmosphere plugin for indoors that adds a fixed amount to the day time ambience colour so interiors aren't too dark."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IndoorAmbienceBoost

A **class** in `Root.Township`, `Alta.Combat`.

Atmosphere plugin for indoors that adds a fixed amount to the day time ambience colour so interiors aren't too dark.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`AtmospherePlugin`](/mod/game-api/types/alta-world/atmosphereplugin)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IndoorAmbienceBoost()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambienceboost" /><code>{"private Color ambienceBoost"}</code> | <span className="api-desc">Colour added to the ambience. Default 0.1 grey.</span> |
| <Link id="m-daytimemanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/daytimemanager">{"DayTimeManager"}</Link>{" dayTimeManager"}</code> | <span className="api-desc">Source of the normal ambience colour.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | <span className="api-desc">The day time manager's ambience plus `ambienceBoost` (alpha unchanged).</span> |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | <span className="api-desc">The current fog colour, unchanged.</span> |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | <span className="api-desc">The current fog density, unchanged.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | <span className="api-desc">Does nothing.</span> |
