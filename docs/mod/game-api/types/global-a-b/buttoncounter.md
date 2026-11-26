---
title: "ButtonCounter"
description: "A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter

A **class** in `Root.Township`, the global namespace.

A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker. Either the server or a single active player owns the changes; the value is saved.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ButtonCounterSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<ButtonCounterSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ButtonCounterSaveData`](/mod/game-api/types/global-a-b/buttoncountersavedata)
- **Nested types** [`AmountChangedHandler`](/mod/game-api/types/global-a-b/buttoncounter-amountchangedhandler), [`CounterMode`](/mod/game-api/types/global-a-b/buttoncounter-countermode), [`CountSyncMode`](/mod/game-api/types/global-a-b/buttoncounter-countsyncmode), [`TextRendererSettings`](/mod/game-api/types/global-a-b/buttoncounter-textrenderersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonCounter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" activePlayer"}</code> | <span className="api-desc">The player allowed to change the counter in single client mode. Backing field for `ActivePlayer`.</span> |
| <Link id="m-amount" /><code>{"private int amount"}</code> | <span className="api-desc">The current count; saved. Backing field for `Amount`.</span> |
| <Link id="m-cap" /><code>{"private int cap"}</code> | <span className="api-desc">Extra upper limit below `maximum`, set by code. Backing field for `Cap`.</span> |
| <Link id="m-changingfinished" /><code>{"private float changingFinished"}</code> | <span className="api-desc">Time after which the delayed sync can go out.</span> |
| <Link id="m-changingwaitduration" /><code>{"private float changingWaitDuration"}</code> | <span className="api-desc">Seconds without a change before a delayed sync is sent.</span> |
| <Link id="m-down" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" down"}</code> | <span className="api-desc">Physical button that decrements.</span> |
| <Link id="m-downbuttonpressed" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" downButtonPressed"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-labels" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttoncounter-textrenderersettings">{"ButtonCounter.TextRendererSettings"}</Link>{"[] labels"}</code> | <span className="api-desc">Text renderers that show the amount, each hidden below its own minimum.</span> |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | <span className="api-desc">Highest amount. Backing field for `Maximum`.</span> |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | <span className="api-desc">Lowest amount. Backing field for `Minimum`.</span> |
| <Link id="m-mode" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" mode"}</code> | <span className="api-desc">Who owns the count: the server or a single client. Backing field for `Mode`.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the amount.</span> |
| <Link id="m-syncmode" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" syncMode"}</code> | <span className="api-desc">Whether to sync on every change or once changes stop. Backing field for `SyncMode`.</span> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | <span className="api-desc">Method sync for the active player.</span> |
| <Link id="m-throttlecounter" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/throttlecounter">{"ThrottleCounter"}</Link>{" throttleCounter"}</code> | <span className="api-desc">Optional throttle input that changes the amount by a delta.</span> |
| <Link id="m-up" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" up"}</code> | <span className="api-desc">Physical button that increments.</span> |
| <Link id="m-upbuttonpressed" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" upButtonPressed"}</code> | <span className="api-desc">Unused.</span> |
| <Link id="m-waitingforchangetofinish" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitingForChangeToFinish"}</code> | <span className="api-desc">The running `WaitWhileChanging` coroutine, if any.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer-2" /><code><Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ActivePlayer { get; set; }"}</code> | <span className="api-desc">The player allowed to change it in single client mode. The server syncs it.</span> |
| <Link id="m-amount-2" /><code>{"int Amount { get; set; }"}</code> | <span className="api-desc">The current value. Setting it clamps it, updates the labels and raises `AmountChanged`.</span> |
| <Link id="m-cap-2" /><code>{"int Cap { get; set; }"}</code> | <span className="api-desc">Extra upper limit on top of `Maximum`.</span> |
| <Link id="m-maximum-2" /><code>{"int Maximum { get; }"}</code> | <span className="api-desc">Highest allowed value (250 by default).</span> |
| <Link id="m-minimum-2" /><code>{"int Minimum { get; }"}</code> | <span className="api-desc">Lowest allowed value (1 by default).</span> |
| <Link id="m-mode-2" /><code><Link to="/mod/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" Mode { get; }"}</code> | <span className="api-desc">Who owns changes: the server, or a single client (the active player).</span> |
| <Link id="m-syncmode-2" /><code><Link to="/mod/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" SyncMode { get; }"}</code> | <span className="api-desc">Whether changes sync at once or after the buttons stop being pressed for a moment.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-amountchanged" /><code>{"event "}<Link to="/mod/game-api/types/global-a-b/buttoncounter-amountchangedhandler">{"ButtonCounter.AmountChangedHandler"}</Link>{" AmountChanged"}</code> | <span className="api-desc">Raised whenever the amount changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrement" /><code>{"void Decrement()"}</code> | <span className="api-desc">Lowers the amount by one, if this side owns changes.</span> |
| <Link id="m-forceamount" /><code>{"void ForceAmount(int amount)"}</code> | <span className="api-desc">Sets the amount and syncs it, if this side owns changes (or on the server with no active player).</span> |
| <Link id="m-increment" /><code>{"void Increment()"}</code> | <span className="api-desc">Raises the amount by one, if this side owns changes.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Hooks the buttons and throttle and sets up the sync messages.</span> |
| <Link id="m-load" /><code>{"void Load("}<Link to="/mod/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" data, "}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Restores the saved amount.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the amount and active player to a joining player.</span> |
| <Link id="m-save" /><code><Link to="/mod/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" Save("}<Link to="/mod/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | <span className="api-desc">Saves the amount.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeby" /><code>{"private void ChangeBy(int delta)"}</code> | <span className="api-desc">Adds a delta from the throttle counter, if this side may change the amount.</span> |
| <Link id="m-checksync" /><code>{"private void CheckSync("}<Link to="/mod/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" mode)"}</code> | <span className="api-desc">Sends the amount to chunks when the given mode matches the sync mode.</span> |
| <Link id="m-iscorrectmode" /><code>{"private bool IsCorrectMode()"}</code> | <span className="api-desc">Whether this side owns the counter: the server in server mode, or the active player in single client mode.</span> |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | <span className="api-desc">Clamps the amount, updates labels, raises `AmountChanged` and syncs now or after changes stop.</span> |
| <Link id="m-playerchanged" /><code>{"private void PlayerChanged()"}</code> | <span className="api-desc">Server: syncs the active player; on clients, enables the throttle only for the active player.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler for the amount; the server accepts changes only from the active player in single client mode.</span> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Network handler for the active player's ID.</span> |
| <Link id="m-updatetext" /><code>{"private void UpdateText()"}</code> | <span className="api-desc">Writes the amount to every label.</span> |
| <Link id="m-waitwhilechanging" /><code>{"private IEnumerator WaitWhileChanging() (iterator)"}</code> | <span className="api-desc">Coroutine that waits until no change has happened for `changingWaitDuration`, then syncs in delayed mode.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ButtonCounter`:

<div className="api-used-in">

[`TradeVendor.coinCounter`](/mod/game-api/types/alta-crafting/tradevendor#m-coincounter), [`TradeVendor.itemCounter`](/mod/game-api/types/alta-crafting/tradevendor#m-itemcounter), [`TradeVendor.UpdateStatus`](/mod/game-api/types/alta-crafting/tradevendor#m-updatestatus), [`ButtonCounter.AmountChangedHandler.BeginInvoke`](/mod/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-begininvoke), [`ButtonCounter.AmountChangedHandler.Invoke`](/mod/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-invoke).

</div>
