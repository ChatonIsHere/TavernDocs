---
title: "ArrowFlightSettingsModifier"
description: "Base asset for something that changes how an arrow flies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettingsModifier

An **abstract class** in `Root.Township`, the global namespace.

Base asset for something that changes how an arrow flies. Nothing in this build uses it.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ArrowFlightSettingsDevianceMultiplierModifier`](/mod/game-api/types/global-a-b/arrowflightsettingsdeviancemultipliermodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ArrowFlightSettingsModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier" /><code>{"virtual float DevianceMultiplier { get; }"}</code> | <span className="api-desc">Multiplier on arrow deviance; 1 by default.</span> |

## Used in

Members of other types that take, return or hold a `ArrowFlightSettingsModifier`:

<div className="api-used-in">

[`Arrow.FlightModifiers`](/mod/game-api/types/global-a-b/arrow#m-flightmodifiers), [`ArrowFlightModifierComponent.modifier`](/mod/game-api/types/global-a-b/arrowflightmodifiercomponent#m-modifier), [`ArrowFlightModifierComponent.Modifier`](/mod/game-api/types/global-a-b/arrowflightmodifiercomponent#m-modifier-2), [`ArrowFlightSettings.GetDeviance`](/mod/game-api/types/global-a-b/arrowflightsettings#m-getdeviance), [`ArrowFlightSettings.GetVelocity`](/mod/game-api/types/global-a-b/arrowflightsettings#m-getvelocity).

</div>
