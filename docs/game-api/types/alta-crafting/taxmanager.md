---
title: "TaxManager"
description: "Part of a TradeVendor that takes TaxedAmount coins from the tax dock every taxingTime seconds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaxManager

A **class** in `Root.Township`, `Alta.Trading`.

Part of a `TradeVendor` that takes `TaxedAmount` coins from the tax dock every `taxingTime` seconds. When coins run out it fires `NoCoinsLeft` and the stall closes. Server side; clients show a tax meter.

- **Listed in** [Crafting and making](/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TaxSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TaxSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TaxSaveData`](/game-api/types/alta-crafting/taxsavedata)
- **Documented in** [Trading](/game-api/game-systems/trading#tradevendor-and-taxmanager)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TaxManager()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-nocoinsleft" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" noCoinsLeft"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> |
| <Link id="m-taxedamount" /><code>{"private int taxedAmount"}</code> |
| <Link id="m-taxentry" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" taxEntry"}</code> |
| <Link id="m-taxingtime" /><code>{"private int taxingTime"}</code> |
| <Link id="m-taxmeterbar" /><code>{"private "}<Link to="/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" taxMeterBar"}</code> |
| <Link id="m-taxmeterprogresslerpspeed" /><code>{"private float taxMeterProgressLerpSpeed"}</code> |
| <Link id="m-timeremaining" /><code>{"private float timeRemaining"}</code> |
| <Link id="m-tradevendor" /><code>{"private "}<Link to="/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" tradeVendor"}</code> |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istaxinginprogress" /><code>{"bool IsTaxingInProgress { get; private set; }"}</code> | True while the stall is being taxed. |
| <Link id="m-taxedamount-2" /><code>{"int TaxedAmount { get; }"}</code> | Coins taken each interval. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-nocoinsleft-2" /><code>{"event Action NoCoinsLeft"}</code> | Fired when tax can't be paid (or stock runs out while taxing). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canceltimer" /><code>{"void CancelTimer()"}</code> | Stops taxing and resets the meter. |
| <Link id="m-initialisetaxprocess" /><code>{"void InitialiseTaxProcess()"}</code> | Server: starts the repeating tax and takes the first payment now. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the meter sync. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the tax timer and takes any payments missed while unloaded. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends a joining player the time left if taxing. |
| <Link id="m-save" /><code><Link to="/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves whether it is taxing and the time to the next payment. |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animatetaxmeter" /><code>{"private void AnimateTaxMeter()"}</code> |
| <Link id="m-enabletimer" /><code>{"private void EnableTimer()"}</code> |
| <Link id="m-finishtax" /><code>{"private void FinishTax()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isTickOver)"}</code> |
| <Link id="m-taketax" /><code>{"private void TakeTax()"}</code> |
| <Link id="m-taketaxamount" /><code>{"private void TakeTaxAmount(int intervals = 1)"}</code> |
| <Link id="m-updatetaxmeter" /><code>{"private void UpdateTaxMeter(float deltaTime)"}</code> |
| <Link id="m-updatetaxtime" /><code>{"private void UpdateTaxTime()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TaxManager`:

[`TradeVendor.taxManager`](/game-api/types/alta-crafting/tradevendor#m-taxmanager).
