---
title: "EmberComposer.HeatPointCollectionHandler"
description: "Heats one pickup's HeatPointCollection for an EmberComposer skill input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer.HeatPointCollectionHandler

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Heats one pickup's `HeatPointCollection` for an `EmberComposer` skill input.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EmberComposer`](/game-api/types/global-e-h/embercomposer)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HeatPointCollectionHandler("}<Link to="/game-api/types/global-e-h/embercomposer">{"EmberComposer"}</Link>{" composer, "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closestheatpoint" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" closestHeatPoint"}</code> | Heat point being heated. |
| <Link id="m-collection" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection"}</code> | The pickup's heat point collection. |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> | Copied from the skill. |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | Copied from the skill. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Handle of the per-frame energy update. |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | Shared "Ember Composer" update module. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heatpoints" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> HeatPoints { get; }"}</code> | The pickup's heat points. |
| <Link id="m-input" /><code><Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" Input { get; }"}</code> | The skill input this handler belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> | Finds the nearest heat point, starts adding energy each frame and makes all points ignore ambient temperature. |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | Stops adding energy and lets the points follow ambient temperature again. |
| <Link id="m-deregister" /><code>{"void Deregister()"}</code> | Unhooks from the pickup's interaction start. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addenergy" /><code>{"private void AddEnergy()"}</code> | Adds energy to the nearest heat point, capped by the target, and resets the input once every point is hot enough. |
| <Link id="m-assessclosestheatpoint" /><code>{"private void AssessClosestHeatPoint()"}</code> | Picks the heat point nearest the first holding hand's grip. |
| <Link id="m-reassess" /><code>{"private void Reassess("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Re-picks the nearest heat point when the pickup is grabbed. |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointCollectionHandler`:

[`EmberComposer.collectionMap`](/game-api/types/global-e-h/embercomposer#m-collectionmap).
