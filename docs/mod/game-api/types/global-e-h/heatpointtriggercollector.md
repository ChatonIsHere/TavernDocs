---
title: "HeatPointTriggerCollector"
description: "Trigger helper for a temperature check skill input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointTriggerCollector

A **class** in `Root.Township`, the global namespace.

Trigger helper for a temperature check skill input. Counts hot `HeatArea` colliders inside it and toggles the input active after a set time.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointTriggerCollector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-inputmethod" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod"}</code> | <span className="api-desc">The temperature check input that gets set active.</span> |
| <Link id="m-structure" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> | <span className="api-desc">The input structure with the minimum temperature, activation time and active time.</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Time left until the next toggle.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered late update method while timing.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared late update module.</span> |
| <Link id="m-validcolliders" /><code>{"private HashSet<Collider> validColliders"}</code> | <span className="api-desc">Hot heat area colliders currently inside the trigger.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializevalues" /><code>{"void InitializeValues("}<Link to="/mod/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure, "}<Link to="/mod/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod)"}</code> | <span className="api-desc">Sets the input structure (thresholds and times) and the input method to toggle.</span> |
| <Link id="m-resettime" /><code>{"void ResetTime()"}</code> | <span className="api-desc">With no hot colliders inside, resets the timer and stops updating.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> | <span className="api-desc">When the first heat area above the minimum temperature enters, starts the activation timer.</span> |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> | <span className="api-desc">When the last hot collider leaves and the input is not active, stops the timer.</span> |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> | <span className="api-desc">Late update: counts the timer down, then activates the input, or deactivates it once its active time runs out.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointTriggerCollector`:

<div className="api-used-in">

[`TemperatureCheckInput.collector`](/mod/game-api/types/global-t-x/temperaturecheckinput#m-collector).

</div>
