---
title: "ForgedPoint"
description: "class ForgedPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForgedPoint

A **class** in `Root.Township`, `Alta.Blacksmithing`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** `MonoBehaviour`, [`IColorModelPoint<ForgedPoint>`](/game-api/types/global-i-l/icolormodelpoint-outt), [`IChildSyncable<ForgedPoint, ForgedPointCollectionSaveData.Element>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata), [`IChildSyncable<ForgedPoint>`](/game-api/types/global-i-l/ichildsyncable-t-telementsavedata)
- **Derived types** [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`ForgedPoint`](/game-api/types/alta-crafting/forgedpoint), [`ForgedPointCollection`](/game-api/types/alta-crafting/forgedpointcollection)
- **Documented in** [Smelting and forging](/game-api/game-systems/smelting-and-forging)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForgedPoint()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-completeareatothicknessmultiplier" /><code>{"private float completeAreaToThicknessMultiplier"}</code> |  |
| <Link id="m-heatpoint" /><code>{"private "}<Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" heatPoint"}</code> |  |
| <Link id="m-incompleteareatothicknessmultiplier" /><code>{"private float incompleteAreaToThicknessMultiplier"}</code> |  |
| <Link id="m-ischangedsynclastsync" /><code>{"private bool isChangedSyncLastSync"}</code> |  |
| <Link id="m-isfinished" /><code>{"private bool isFinished"}</code> |  |
| <Link id="m-progress" /><code>{"private float progress"}</code> |  |
| <Link id="m-progressmultiplier" /><code>{"private float progressMultiplier"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-glow" /><code>{"float Glow { get; }"}</code> |  |
| <Link id="m-heatpoint-2" /><code><Link to="/game-api/types/alta-crafting/metalheatpoint">{"MetalHeatPoint"}</Link>{" HeatPoint { get; }"}</code> |  |
| <Link id="m-progress-2" /><code>{"float Progress { get; set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-changed" /><code>{"event Action<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> Changed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-copyfrom" /><code>{"void CopyFrom("}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> |  |
| <Link id="m-initialize" /><code>{"void Initialize("}<Link to="/game-api/types/global-c-d/childsyncablecollectionbase-t">{"ChildSyncableCollectionBase"}</Link>{"<"}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{"> collection)"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-isequal" /><code>{"bool IsEqual("}<Link to="/game-api/types/alta-crafting/forgedpoint">{"ForgedPoint"}</Link>{" other)"}</code> |  |
| <Link id="m-isneedingsync" /><code>{"bool IsNeedingSync()"}</code> |  |
| <Link id="m-sync" /><code>{"void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-takedamage" /><code>{"void TakeDamage(float damage)"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ForgedPoint`:

[`ForgedModel<TB, TA>.forgedPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints), [`ForgedModel<TB, TA>.ForgedPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-forgedpoints-2), [`ForgedModel<TB, TA>.GreenPoints`](/game-api/types/alta-crafting/forgedmodel-tb-ta#m-greenpoints).
