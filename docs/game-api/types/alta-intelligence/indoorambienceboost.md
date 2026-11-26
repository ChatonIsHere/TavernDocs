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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`AtmospherePlugin`](/game-api/types/alta-world/atmosphereplugin)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"IndoorAmbienceBoost()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ambienceboost" /><code>{"private Color ambienceBoost"}</code> | Colour added to the ambience. Default 0.1 grey. |
| <Link id="m-daytimemanager" /><code>{"private "}<Link to="/game-api/types/alta-world/daytimemanager">{"DayTimeManager"}</Link>{" dayTimeManager"}</code> | Source of the normal ambience colour. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentambience" /><code>{"override Color CurrentAmbience { get; }"}</code> | The day time manager's ambience plus `ambienceBoost` (alpha unchanged). |
| <Link id="m-currentfog" /><code>{"override Color CurrentFog { get; }"}</code> | The current fog colour, unchanged. |
| <Link id="m-currentfogdensity" /><code>{"override float CurrentFogDensity { get; }"}</code> | The current fog density, unchanged. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-enabled" /><code>{"protected override void Enabled()"}</code> | Does nothing. |
