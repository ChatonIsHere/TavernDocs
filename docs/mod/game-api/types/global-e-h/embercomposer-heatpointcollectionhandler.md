---
title: "EmberComposer.HeatPointCollectionHandler"
description: "Heats one pickup's HeatPointCollection for an EmberComposer skill input."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EmberComposer.HeatPointCollectionHandler

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Heats one pickup's `HeatPointCollection` for an `EmberComposer` skill input.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EmberComposer`](/mod/game-api/types/global-e-h/embercomposer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HeatPointCollectionHandler("}<Link to="/mod/game-api/types/global-e-h/embercomposer">{"EmberComposer"}</Link>{" composer, "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" input)"}</code> | <span className="api-desc">Creates an `EmberComposer.HeatPointCollectionHandler` from `composer` and `input`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-closestheatpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{" closestHeatPoint"}</code> | <span className="api-desc">Heat point being heated.</span> |
| <Link id="m-collection" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/heatpointcollection">{"HeatPointCollection"}</Link>{" collection"}</code> | <span className="api-desc">The pickup's heat point collection.</span> |
| <Link id="m-energypersecond" /><code>{"private float energyPerSecond"}</code> | <span className="api-desc">Copied from the skill.</span> |
| <Link id="m-targettemperature" /><code>{"private float targetTemperature"}</code> | <span className="api-desc">Copied from the skill.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the per-frame energy update.</span> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> | <span className="api-desc">Shared "Ember Composer" update module.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-heatpoints" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-stats-effects/heatpoint">{"HeatPoint"}</Link>{"> HeatPoints { get; }"}</code> | <span className="api-desc">The pickup's heat points.</span> |
| <Link id="m-input" /><code><Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" Input { get; }"}</code> | <span className="api-desc">The skill input this handler belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate()"}</code> | <span className="api-desc">Finds the nearest heat point, starts adding energy each frame and makes all points ignore ambient temperature.</span> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | <span className="api-desc">Stops adding energy and lets the points follow ambient temperature again.</span> |
| <Link id="m-deregister" /><code>{"void Deregister()"}</code> | <span className="api-desc">Unhooks from the pickup's interaction start.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addenergy" /><code>{"private void AddEnergy()"}</code> | <span className="api-desc">Adds energy to the nearest heat point, capped by the target, and resets the input once every point is hot enough.</span> |
| <Link id="m-assessclosestheatpoint" /><code>{"private void AssessClosestHeatPoint()"}</code> | <span className="api-desc">Picks the heat point nearest the first holding hand's grip.</span> |
| <Link id="m-reassess" /><code>{"private void Reassess("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Re-picks the nearest heat point when the pickup is grabbed.</span> |

</details>

## Used in

Members of other types that take, return or hold a `HeatPointCollectionHandler`:

<div className="api-used-in">

[`EmberComposer.collectionMap`](/mod/game-api/types/global-e-h/embercomposer#m-collectionmap).

</div>
