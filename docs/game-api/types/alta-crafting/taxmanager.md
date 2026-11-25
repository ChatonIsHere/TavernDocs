---
title: "TaxManager"
description: "class TaxManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaxManager

A **class** in `Root.Township`, `Alta.Trading`.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TaxSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TaxSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TaxSaveData`](/game-api/types/alta-crafting/taxsavedata)
- **Documented in** [Trading](/game-api/game-systems/trading#tradevendor-and-taxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaxManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nocoinsleft" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" noCoinsLeft"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> |  |
| <Link id="m-taxedamount" /><code>{"private int taxedAmount"}</code> |  |
| <Link id="m-taxentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" taxEntry"}</code> |  |
| <Link id="m-taxingtime" /><code>{"private int taxingTime"}</code> |  |
| <Link id="m-taxmeterbar" /><code>{"private "}<Link to="/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" taxMeterBar"}</code> |  |
| <Link id="m-taxmeterprogresslerpspeed" /><code>{"private float taxMeterProgressLerpSpeed"}</code> |  |
| <Link id="m-timeremaining" /><code>{"private float timeRemaining"}</code> |  |
| <Link id="m-tradevendor" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" tradeVendor"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istaxinginprogress" /><code>{"bool IsTaxingInProgress { get; private set; }"}</code> |  |
| <Link id="m-taxedamount-2" /><code>{"int TaxedAmount { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-nocoinsleft-2" /><code>{"event Action NoCoinsLeft"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canceltimer" /><code>{"void CancelTimer()"}</code> |  |
| <Link id="m-initialisetaxprocess" /><code>{"void InitialiseTaxProcess()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-animatetaxmeter" /><code>{"private void AnimateTaxMeter()"}</code> |  |
| <Link id="m-enabletimer" /><code>{"private void EnableTimer()"}</code> |  |
| <Link id="m-finishtax" /><code>{"private void FinishTax()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isTickOver)"}</code> |  |
| <Link id="m-taketax" /><code>{"private void TakeTax()"}</code> |  |
| <Link id="m-taketaxamount" /><code>{"private void TakeTaxAmount(int intervals = 1)"}</code> |  |
| <Link id="m-updatetaxmeter" /><code>{"private void UpdateTaxMeter(float deltaTime)"}</code> |  |
| <Link id="m-updatetaxtime" /><code>{"private void UpdateTaxTime()"}</code> |  |

## Used in

Members of other types that take, return or hold a `TaxManager`:

[`TradeVendor.taxManager`](/game-api/types/alta-crafting/tradevendor#m-taxmanager).
