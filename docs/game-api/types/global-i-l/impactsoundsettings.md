---
title: "ImpactSoundSettings"
description: "Global settings for Wwise impact sounds: the send and receive events, velocity RTPC and material sound map."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactSoundSettings

A **class** in `Root.Township`, no namespace.

Global settings for Wwise impact sounds: the send and receive events, velocity RTPC and material sound map. `ImpactSoundManager` holds it, but nothing in this server build reads the values.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`GlobalSettings<ImpactSoundSettings>`](/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`ImpactSoundSettings`](/game-api/types/global-i-l/impactsoundsettings), [`ImpactSoundSettings.Create`](/game-api/types/global-i-l/impactsoundsettings-create)
- **Nested types** [`Create`](/game-api/types/global-i-l/impactsoundsettings-create)
- **Attributes** `GlobalSettings`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ImpactSoundSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-defaultimpactsound" /><code>{"private Switch defaultImpactSound"}</code> |  |
| <Link id="m-impactreceiveevent" /><code>{"private Event impactReceiveEvent"}</code> |  |
| <Link id="m-impactsendevent" /><code>{"private Event impactSendEvent"}</code> |  |
| <Link id="m-impactsoundmap" /><code>{"private "}<Link to="/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" impactSoundMap"}</code> |  |
| <Link id="m-impactvelocityrtpc" /><code>{"private RTPC impactVelocityRTPC"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-defaultimpactsound-2" /><code>{"Switch DefaultImpactSound { get; }"}</code> | Wwise switch used when no mapped sound fits. |
| <Link id="m-impactrecieveevent" /><code>{"Event ImpactRecieveEvent { get; }"}</code> | Wwise event for the struck side of an impact. |
| <Link id="m-impactsendevent-2" /><code>{"Event ImpactSendEvent { get; }"}</code> | Wwise event for the striking side of an impact. |
| <Link id="m-impactsoundmap-2" /><code><Link to="/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" "}<Link to="/game-api/types/global-i-l/impactsoundmap">{"ImpactSoundMap"}</Link>{" { get; }"}</code> | Map of impact sounds per material. |
| <Link id="m-impactvelocityrtpc-2" /><code>{"RTPC ImpactVelocityRTPC { get; }"}</code> | Wwise RTPC fed with impact velocity. |

## Used in

Members of other types that take, return or hold a `ImpactSoundSettings`:

[`ImpactSoundManager.impactSoundSettings`](/game-api/types/global-i-l/impactsoundmanager#m-impactsoundsettings), [`ImpactSoundManager.ImpactSoundSettings`](/game-api/types/global-i-l/impactsoundmanager#m-impactsoundsettings-2).
