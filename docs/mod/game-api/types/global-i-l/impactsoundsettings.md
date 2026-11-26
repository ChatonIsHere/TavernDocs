---
title: "ImpactSoundSettings"
description: "Global settings for Wwise impact sounds: the send and receive events, velocity RTPC and material sound map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSoundSettings

A **class** in `Root.Township`, the global namespace.

Global settings for Wwise impact sounds: the send and receive events, velocity RTPC and material sound map. `ImpactSoundManager` holds it, but nothing in this server build reads the values.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`GlobalSettings<ImpactSoundSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ImpactSoundSettings`](/mod/game-api/types/global-i-l/impactsoundsettings), [`ImpactSoundSettings.Create`](/mod/game-api/types/global-i-l/impactsoundsettings-create)
- **Nested types** [`Create`](/mod/game-api/types/global-i-l/impactsoundsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSoundSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultimpactsound" /><code>{"private Switch defaultImpactSound"}</code> | <span className="api-desc">Backing field for `DefaultImpactSound`: the switch used when a material isn't in the map.</span> |
| <Link id="m-impactreceiveevent" /><code>{"private Event impactReceiveEvent"}</code> | <span className="api-desc">Backing field for `ImpactRecieveEvent` (spelled that way).</span> |
| <Link id="m-impactsendevent" /><code>{"private Event impactSendEvent"}</code> | <span className="api-desc">Backing field for `ImpactSendEvent`.</span> |
| <Link id="m-impactsoundmap" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" impactSoundMap"}</code> | <span className="api-desc">Backing field for `ImpactSoundMap`.</span> |
| <Link id="m-impactvelocityrtpc" /><code>{"private RTPC impactVelocityRTPC"}</code> | <span className="api-desc">Backing field for `ImpactVelocityRTPC`, the Wwise parameter for impact speed.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultimpactsound-2" /><code>{"Switch DefaultImpactSound { get; }"}</code> | <span className="api-desc">Wwise switch used when no mapped sound fits.</span> |
| <Link id="m-impactrecieveevent" /><code>{"Event ImpactRecieveEvent { get; }"}</code> | <span className="api-desc">Wwise event for the struck side of an impact.</span> |
| <Link id="m-impactsendevent-2" /><code>{"Event ImpactSendEvent { get; }"}</code> | <span className="api-desc">Wwise event for the striking side of an impact.</span> |
| <Link id="m-impactsoundmap-2" /><code><Link to="/mod/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" "}<Link to="/mod/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" { get; }"}</code> | <span className="api-desc">Map of impact sounds per material.</span> |
| <Link id="m-impactvelocityrtpc-2" /><code>{"RTPC ImpactVelocityRTPC { get; }"}</code> | <span className="api-desc">Wwise RTPC fed with impact velocity.</span> |

## Used in

Members of other types that take, return or hold a `ImpactSoundSettings`:

<div className="api-used-in">

[`ImpactSoundManager.impactSoundSettings`](/mod/game-api/types/global-i-l/impactsoundmanager#m-impactsoundsettings), [`ImpactSoundManager.ImpactSoundSettings`](/mod/game-api/types/global-i-l/impactsoundmanager#m-impactsoundsettings-2).

</div>
