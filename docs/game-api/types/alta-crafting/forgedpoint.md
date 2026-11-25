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

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IColorModelPoint<ForgedPoint>`](/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<ForgedPoint, ForgedPointCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<ForgedPoint>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint), [`ForgedPointCollection`](/game-api/types/alta-crafting/forgedpointcollection)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ForgedPoint()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-completeareatothicknessmultiplier" /><code>{"private float completeAreaToThicknessMultiplier"}</code> |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" heatPoint"}</code> |
| <Link id="m-incompleteareatothicknessmultiplier" /><code>{"private float incompleteAreaToThicknessMultiplier"}</code> |
| <Link id="m-ischangedsynclastsync" /><code>{"private bool isChangedSyncLastSync"}</code> |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-progressmultiplier" /><code>{"private float progressMultiplier"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The forged item's entity. |
| <Link id="m-glow" /><code>{"float Glow { get; }"}</code> | How hot the point is, from its heat point. Hammering scales with it. |
| <Link id="m-heatpoint-2" /><code><Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" HeatPoint { get; }"}</code> | The `MetalHeatPoint` on the same object. |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> | How forged the point is, from 0 to 1. Also changes the heat point's conductivity. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> Changed"}</code> | Raised when progress changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> | Copies another point's progress. |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> collection)"}</code> | Does nothing. |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Does nothing. |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> | True if both points have the same progress. |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> | True if progress changed since the last sync. |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads progress, as a finished flag or a 0 to 1 value. Remote clients apply it. |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> | Server: adds damage times the multiplier times the glow. 0.99 or more counts as finished. |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ForgedPoint`:

[`ForgedModel<TB, TA>.forgedPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints), [`ForgedModel<TB, TA>.ForgedPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints-2), [`ForgedModel<TB, TA>.GreenPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-greenpoints).
