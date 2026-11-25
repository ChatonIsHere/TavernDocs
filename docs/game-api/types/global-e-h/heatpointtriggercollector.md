---
title: "HeatPointTriggerCollector"
description: "class HeatPointTriggerCollector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HeatPointTriggerCollector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointTriggerCollector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-inputmethod" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod"}</code> |  |
| <Link id="m-structure" /><code>{"private "}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure"}</code> |  |
| <Link id="m-timer" /><code>{"private float timer"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |
| <Link id="m-validcolliders" /><code>{"private HashSet<Collider> validColliders"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializevalues" /><code>{"void InitializeValues("}<Link to="/game-api/types/global-t-x/temperaturecheckinputstructure">{"TemperatureCheckInputStructure"}</Link>{" structure, "}<Link to="/game-api/types/global-t-x/temperaturecheckinput">{"TemperatureCheckInput"}</Link>{" inputMethod)"}</code> |  |
| <Link id="m-resettime" /><code>{"void ResetTime()"}</code> |  |
| <Link id="m-ontriggerenter" /><code>{"private void OnTriggerEnter(Collider other)"}</code> |  |
| <Link id="m-ontriggerexit" /><code>{"private void OnTriggerExit(Collider other)"}</code> |  |
| <Link id="m-updatecount" /><code>{"private void UpdateCount()"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatPointTriggerCollector`:

[`TemperatureCheckInput.collector`](/game-api/types/global-t-x/temperaturecheckinput#m-collector).
