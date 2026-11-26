---
title: "ForgedPoint"
description: "One point on a piece of forged metal that fills as it is hammered while hot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedPoint

A **class** in `Root.Township`, `Alta.Blacksmithing`.

One point on a piece of forged metal that fills as it is hammered while hot. Synced and saved as a child of the forged item, and drives its shape colouring.

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IColorModelPoint<ForgedPoint>`](/mod/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<ForgedPoint, ForgedPointCollectionSaveData.Element>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<ForgedPoint>`](/mod/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`ForgedModel<TB, TA>`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta), [`ForgedPoint`](/mod/game-api/types/alta-crafting/forgedpoint), [`ForgedPointCollection`](/mod/game-api/types/alta-crafting/forgedpointcollection)
- **Documented in** [Smelting and forging](/mod/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgedPoint()"}</code> | <span className="api-desc">Creates a `ForgedPoint` with default values.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-completeareatothicknessmultiplier" /><code>{"private float completeAreaToThicknessMultiplier"}</code> | <span className="api-desc">Heat conductivity multiplier when fully forged.</span> |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" heatPoint"}</code> | <span className="api-desc">Backing field for `HeatPoint`.</span> |
| <Link id="m-incompleteareatothicknessmultiplier" /><code>{"private float incompleteAreaToThicknessMultiplier"}</code> | <span className="api-desc">Heat conductivity multiplier when not forged at all.</span> |
| <Link id="m-ischangedsynclastsync" /><code>{"private bool isChangedSyncLastSync"}</code> | <span className="api-desc">True when progress changed since the last sync.</span> |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> | <span className="api-desc">True once progress reaches 1, so it syncs as finished.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Backing field for `Progress`.</span> |
| <Link id="m-progressmultiplier" /><code>{"private float progressMultiplier"}</code> | <span className="api-desc">How much hammer damage adds to progress, also scaled by the metal's glow.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The forged item's entity.</span> |
| <Link id="m-glow" /><code>{"float Glow { get; }"}</code> | <span className="api-desc">How hot the point is, from its heat point. Hammering scales with it.</span> |
| <Link id="m-heatpoint-2" /><code><Link to="/mod/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" HeatPoint { get; }"}</code> | <span className="api-desc">The `MetalHeatPoint` on the same object.</span> |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | <span className="api-desc">How forged the point is, from 0 to 1. Also changes the heat point's conductivity.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> Changed"}</code> | <span className="api-desc">Raised when progress changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> | <span className="api-desc">Copies another point's progress.</span> |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/mod/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> collection)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/mod/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> | <span className="api-desc">True if both points have the same progress.</span> |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | <span className="api-desc">True if progress changed since the last sync.</span> |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads progress, as a finished flag or a 0 to 1 value. Remote clients apply it.</span> |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> | <span className="api-desc">Server: adds damage times the multiplier times the glow. 0.99 or more counts as finished.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | <span className="api-desc">Marks the point for sync, updates the heat point's thickness conductivity from progress and fires `Changed`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ForgedPoint`:

<div className="api-used-in">

[`ForgedModel<TB, TA>.forgedPoints`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints), [`ForgedModel<TB, TA>.ForgedPoints`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints-2), [`ForgedModel<TB, TA>.GreenPoints`](/mod/game-api/types/alta-crafting/forgedmodel-tb-ta#m-greenpoints).

</div>
