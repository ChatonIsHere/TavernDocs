---
title: "TemperatureCheckInputStructure"
description: "Skill input settings that activate a skill when the held item (or its matching tool parts) is in a hot enough heat area for a set time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInputStructure

A **class** in `Root.Township`, no namespace.

Skill input settings that activate a skill when the held item (or its matching tool parts) is in a hot enough heat area for a set time.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`TemperatureCheckInputStructure.Create`](/game-api/types/global-t-x/temperaturecheckinputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-t-x/temperaturecheckinputstructure-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInputStructure()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> |
| <Link id="m-haschannels" /><code>{"private bool hasChannels"}</code> |
| <Link id="m-mintemperaturetoactivate" /><code>{"private float minTemperatureToActivate"}</code> |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> |
| <Link id="m-timetoactivate" /><code>{"private float timeToActivate"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> | Seconds the input stays active once triggered. |
| <Link id="m-mintemperaturetoactivate-2" /><code>{"float MinTemperatureToActivate { get; }"}</code> | A heat area must be hotter than this to count. |
| <Link id="m-timetoactivate-2" /><code>{"float TimeToActivate { get; }"}</code> | Seconds in the heat before the input activates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Creates a `TemperatureCheckInput`. |
| <Link id="m-validatecolliderimpactors" /><code>{"bool ValidateColliderImpactors(IEnumerable<"}<Link to="/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> impactors)"}</code> | True if no channels are set, or any impactor on the collider has one of them. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True if no channels are set, or the held tool has one of them. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureCheckInputStructure`:

[`HeatPointTriggerCollector.InitializeValues`](/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.structure`](/game-api/types/global-e-h/heatpointtriggercollector#m-structure), [`TemperatureCheckInput.structure`](/game-api/types/global-t-x/temperaturecheckinput#m-structure).
