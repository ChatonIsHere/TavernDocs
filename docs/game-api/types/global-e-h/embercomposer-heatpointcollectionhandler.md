---
title: "EmberComposer.HeatPointCollectionHandler"
description: "class EmberComposer.HeatPointCollectionHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer.HeatPointCollectionHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EmberComposer`](/game-api/types/global-e-h/embercomposer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollectionHandler("}<Link to="/game-api/types/global-e-h/embercomposer">{"EmberComposer"}</Link>{" composer, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-closestheatpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" closestHeatPoint"}</code> |  |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection"}</code> |  |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> |  |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heatpoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> HeatPoints { get; }"}</code> |  |
| <Link id="m-input" /><code><Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" Input { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> |  |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> |  |
| <Link id="m-deregister" /><code>{"void Deregister()"}</code> |  |
| <Link id="m-addenergy" /><code>{"private void AddEnergy()"}</code> |  |
| <Link id="m-assessclosestheatpoint" /><code>{"private void AssessClosestHeatPoint()"}</code> |  |
| <Link id="m-reassess" /><code>{"private void Reassess("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> |  |

## Used in

Members of other types that take, return or hold a `HeatPointCollectionHandler`:

[`EmberComposer.collectionMap`](/game-api/types/global-e-h/embercomposer#m-collectionmap).
