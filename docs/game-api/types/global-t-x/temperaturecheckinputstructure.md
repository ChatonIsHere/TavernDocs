---
title: "TemperatureCheckInputStructure"
description: "class TemperatureCheckInputStructure in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInputStructure

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`TemperatureCheckInputStructure.Create`](/game-api/types/global-t-x/temperaturecheckinputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/temperaturecheckinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInputStructure()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> |  |
| <Link id="m-haschannels" /><code>{"private bool hasChannels"}</code> |  |
| <Link id="m-mintemperaturetoactivate" /><code>{"private float minTemperatureToActivate"}</code> |  |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> |  |
| <Link id="m-timetoactivate" /><code>{"private float timeToActivate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> |  |
| <Link id="m-mintemperaturetoactivate-2" /><code>{"float MinTemperatureToActivate { get; }"}</code> |  |
| <Link id="m-timetoactivate-2" /><code>{"float TimeToActivate { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> |  |
| <Link id="m-validatecolliderimpactors" /><code>{"bool ValidateColliderImpactors(IEnumerable<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> impactors)"}</code> |  |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TemperatureCheckInputStructure`:

[`HeatPointTriggerCollector.InitializeValues`](/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.structure`](/game-api/types/global-e-h/heatpointtriggercollector#m-structure), [`TemperatureCheckInput.structure`](/game-api/types/global-t-x/temperaturecheckinput#m-structure).
