---
title: "ArrowFlightSettingsModifier"
description: "Base asset for something that changes how an arrow flies."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ArrowFlightSettingsModifier

An **abstract class** in `Root.Township`, no namespace.

Base asset for something that changes how an arrow flies. Nothing in this build uses it.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`ArrowFlightSettingsDevianceMultiplierModifier`](/game-api/types/global-a-b/arrowflightsettingsdeviancemultipliermodifier)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ArrowFlightSettingsModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-deviancemultiplier" /><code>{"virtual float DevianceMultiplier { get; }"}</code> | Multiplier on arrow deviance; 1 by default. |

## Used in

Members of other types that take, return or hold a `ArrowFlightSettingsModifier`:

[`Arrow.FlightModifiers`](/game-api/types/global-a-b/arrow#m-flightmodifiers), [`ArrowFlightModifierComponent.modifier`](/game-api/types/global-a-b/arrowflightmodifiercomponent#m-modifier), [`ArrowFlightModifierComponent.Modifier`](/game-api/types/global-a-b/arrowflightmodifiercomponent#m-modifier-2), [`ArrowFlightSettings.GetDeviance`](/game-api/types/global-a-b/arrowflightsettings#m-getdeviance), [`ArrowFlightSettings.GetVelocity`](/game-api/types/global-a-b/arrowflightsettings#m-getvelocity).
