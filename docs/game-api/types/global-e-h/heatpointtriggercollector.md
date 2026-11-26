---
title: "HeatPointTriggerCollector"
description: "Trigger helper for a temperature check skill input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointTriggerCollector

A **class** in `Root.Township`, no namespace.

Trigger helper for a temperature check skill input. Counts hot `HeatArea` colliders inside it and toggles the input active after a set time.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatPointTriggerCollector()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputmethod" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod"}</code> | The temperature check input that gets set active. |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> | The input structure with the minimum temperature, activation time and active time. |
| <Link id="m-timer" /><code>{"private float timer"}</code> | Time left until the next toggle. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered late update method while timing. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared late update module. |
| <Link id="m-validcolliders" /><code>{"private HashSet<Collider> validColliders"}</code> | Hot heat area colliders currently inside the trigger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializevalues" /><code>{"void InitializeValues("}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod)"}</code> | Sets the input structure (thresholds and times) and the input method to toggle. |
| <Link id="m-resettime" /><code>{"void ResetTime()"}</code> | With no hot colliders inside, resets the timer and stops updating. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | When the first heat area above the minimum temperature enters, starts the activation timer. |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | When the last hot collider leaves and the input is not active, stops the timer. |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> | Late update: counts the timer down, then activates the input, or deactivates it once its active time runs out. |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointTriggerCollector`:

[`TemperatureCheckInput.collector`](/game-api/types/global-t-x/temperaturecheckinput#m-collector).
