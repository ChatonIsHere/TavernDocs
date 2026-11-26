---
title: "TemperatureCheckInputStructure"
description: "Skill input settings that activate a skill when the held item (or its matching tool parts) is in a hot enough heat area for a set time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TemperatureCheckInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input settings that activate a skill when the held item (or its matching tool parts) is in a hot enough heat area for a set time.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`TemperatureCheckInputStructure.Create`](/mod/game-api/types/global-t-x/temperaturecheckinputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-t-x/temperaturecheckinputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TemperatureCheckInputStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> | Seconds the skill stays active once triggered (15 by default). |
| <Link id="m-haschannels" /><code>{"private bool hasChannels"}</code> | True when `targetChannels` has at least one entry. Without channels any pickup or impactor passes. |
| <Link id="m-mintemperaturetoactivate" /><code>{"private float minTemperatureToActivate"}</code> | Temperature that has to be reached to start activating (200 by default). |
| <Link id="m-targetchannels" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/impactchannel">{"ImpactChannel"}</Link>{"[] targetChannels"}</code> | Impact channels the held tool or impactor must have for the input to count. |
| <Link id="m-timetoactivate" /><code>{"private float timeToActivate"}</code> | Seconds the temperature must hold before the skill activates (1 by default). |

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
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Creates a `TemperatureCheckInput`. |
| <Link id="m-validatecolliderimpactors" /><code>{"bool ValidateColliderImpactors(IEnumerable<"}<Link to="/mod/game-api/types/alta-items/impactgenerator">{"ImpactGenerator"}</Link>{"> impactors)"}</code> | True if no channels are set, or any impactor on the collider has one of them. |
| <Link id="m-validatepickup" /><code>{"override bool ValidatePickup("}<Link to="/mod/game-api/types/global-e-h/heldpickuphandler">{"HeldPickupHandler"}</Link>{" handler)"}</code> | True if no channels are set, or the held tool has one of them. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: sets `hasChannels` when any entry in `targetChannels` is set. |

</details>

## Used in

Members of other types that take, return or hold a `TemperatureCheckInputStructure`:

[`HeatPointTriggerCollector.InitializeValues`](/mod/game-api/types/global-e-h/heatpointtriggercollector#m-initializevalues), [`HeatPointTriggerCollector.structure`](/mod/game-api/types/global-e-h/heatpointtriggercollector#m-structure), [`TemperatureCheckInput.structure`](/mod/game-api/types/global-t-x/temperaturecheckinput#m-structure).
