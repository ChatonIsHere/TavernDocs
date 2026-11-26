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

- **Listed in** [Crafting and making](/mod/game-api/types/alta-crafting)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<TaxSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<TaxSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`TaxSaveData`](/mod/game-api/types/alta-crafting/taxsavedata)
- **Documented in** [Trading](/mod/game-api/game-systems/trading#tradevendor-and-taxmanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaxManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nocoinsleft" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" noCoinsLeft"}</code> | <span className="api-desc">Event fired when taxing ends because the tax dock is empty or the vendor has no stock. Exposed as `NoCoinsLeft`.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> sync"}</code> | <span className="api-desc">Method sync on `SyncD` that carries the tax tick state to clients.</span> |
| <Link id="m-taxedamount" /><code>{"private int taxedAmount"}</code> | <span className="api-desc">Coins taken from the tax dock each interval. Defaults to 1.</span> |
| <Link id="m-taxentry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" taxEntry"}</code> | <span className="api-desc">The repeating `Timeline` entry that calls `TakeTax`. Saved and reloaded with the vendor.</span> |
| <Link id="m-taxingtime" /><code>{"private int taxingTime"}</code> | <span className="api-desc">Length of one tax interval, in seconds.</span> |
| <Link id="m-taxmeterbar" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gaugeprogressbar">{"GaugeProgressBar"}</Link>{" taxMeterBar"}</code> | <span className="api-desc">Gauge bar that shows how much of the current tax interval is left.</span> |
| <Link id="m-taxmeterprogresslerpspeed" /><code>{"private float taxMeterProgressLerpSpeed"}</code> | <span className="api-desc">How fast the tax meter bar moves toward its target value, per second.</span> |
| <Link id="m-timeremaining" /><code>{"private float timeRemaining"}</code> | <span className="api-desc">Seconds left in the current tax interval, used to drive the meter.</span> |
| <Link id="m-tradevendor" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/tradevendor">{"TradeVendor"}</Link>{" tradeVendor"}</code> | <span className="api-desc">The trade vendor whose tax dock and stock this manager reads.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle for the registered `UpdateTaxTime` update method, null when the meter isn't animating.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istaxinginprogress" /><code>{"bool IsTaxingInProgress { get; private set; }"}</code> | <span className="api-desc">True while the stall is being taxed.</span> |
| <Link id="m-taxedamount-2" /><code>{"int TaxedAmount { get; }"}</code> | <span className="api-desc">Coins taken each interval.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-nocoinsleft-2" /><code>{"event Action NoCoinsLeft"}</code> | <span className="api-desc">Fired when tax can't be paid (or stock runs out while taxing).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-canceltimer" /><code>{"void CancelTimer()"}</code> | <span className="api-desc">Stops taxing and resets the meter.</span> |
| <Link id="m-initialisetaxprocess" /><code>{"void InitialiseTaxProcess()"}</code> | <span className="api-desc">Server: starts the repeating tax and takes the first payment now.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the meter sync.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the tax timer and takes any payments missed while unloaded.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends a joining player the time left if taxing.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/alta-crafting/taxsavedata">{"TaxSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves whether it is taxing and the time to the next payment.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatetaxmeter" /><code>{"private void AnimateTaxMeter()"}</code> | <span className="api-desc">Client: registers `UpdateTaxTime` with the update loop (once) so the tax meter bar counts down.</span> |
| <Link id="m-enabletimer" /><code>{"private void EnableTimer()"}</code> | <span className="api-desc">Server: schedules `TakeTax` on the `Timeline` to repeat every `taxingTime` seconds.</span> |
| <Link id="m-finishtax" /><code>{"private void FinishTax()"}</code> | <span className="api-desc">Ends taxing: cancels the timer, zeroes the remaining time and fires `noCoinsLeft`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cancels the tax timer on the server and stops the meter update on clients.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isTickOver)"}</code> | <span className="api-desc">Method sync for the tax tick. Sends whether a tick just finished, plus the seconds left; clients restart the meter animation.</span> |
| <Link id="m-taketax" /><code>{"private void TakeTax()"}</code> | <span className="api-desc">Timeline callback that takes one interval of tax.</span> |
| <Link id="m-taketaxamount" /><code>{"private void TakeTaxAmount(int intervals = 1)"}</code> | <span className="api-desc">Server: removes `taxedAmount` coins per interval from the vendor's tax dock, or finishes taxing when coins or stock run out.</span> |
| <Link id="m-updatetaxmeter" /><code>{"private void UpdateTaxMeter(float deltaTime)"}</code> | <span className="api-desc">Counts down `timeRemaining` and eases the meter bar toward the remaining fraction; deregisters itself at zero.</span> |
| <Link id="m-updatetaxtime" /><code>{"private void UpdateTaxTime()"}</code> | <span className="api-desc">Per-frame update that calls `UpdateTaxMeter` with the frame's delta time.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TaxManager`:

<div className="api-used-in">

[`TradeVendor.taxManager`](/mod/game-api/types/alta-crafting/tradevendor#m-taxmanager).

</div>
