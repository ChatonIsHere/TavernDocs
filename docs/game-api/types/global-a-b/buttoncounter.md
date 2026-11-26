---
title: "ButtonCounter"
description: "A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter

A **class** in `Root.Township`, no namespace.

A networked number set with up and down buttons (or a throttle) and shown on text labels, such as a quantity picker. Either the server or a single active player owns the changes; the value is saved.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ButtonCounterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ButtonCounterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ButtonCounterSaveData`](/game-api/types/global-a-b/buttoncountersavedata)
- **Nested types** [`AmountChangedHandler`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler), [`CounterMode`](/game-api/types/global-a-b/buttoncounter-countermode), [`CountSyncMode`](/game-api/types/global-a-b/buttoncounter-countsyncmode), [`TextRendererSettings`](/game-api/types/global-a-b/buttoncounter-textrenderersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonCounter()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>18 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" activePlayer"}</code> | The player allowed to change the counter in single client mode. Backing field for `ActivePlayer`. |
| <Link id="m-amount" /><code>{"private int amount"}</code> | The current count; saved. Backing field for `Amount`. |
| <Link id="m-cap" /><code>{"private int cap"}</code> | Extra upper limit below `maximum`, set by code. Backing field for `Cap`. |
| <Link id="m-changingfinished" /><code>{"private float changingFinished"}</code> | Time after which the delayed sync can go out. |
| <Link id="m-changingwaitduration" /><code>{"private float changingWaitDuration"}</code> | Seconds without a change before a delayed sync is sent. |
| <Link id="m-down" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" down"}</code> | Physical button that decrements. |
| <Link id="m-downbuttonpressed" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" downButtonPressed"}</code> | Unused. |
| <Link id="m-labels" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-textrenderersettings">{"ButtonCounter.TextRendererSettings"}</Link>{"[] labels"}</code> | Text renderers that show the amount, each hidden below its own minimum. |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> | Highest amount. Backing field for `Maximum`. |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> | Lowest amount. Backing field for `Minimum`. |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" mode"}</code> | Who owns the count: the server or a single client. Backing field for `Mode`. |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the amount. |
| <Link id="m-syncmode" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" syncMode"}</code> | Whether to sync on every change or once changes stop. Backing field for `SyncMode`. |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | Method sync for the active player. |
| <Link id="m-throttlecounter" /><code>{"private "}<Link to="/game-api/types/global-t-x/throttlecounter">{"ThrottleCounter"}</Link>{" throttleCounter"}</code> | Optional throttle input that changes the amount by a delta. |
| <Link id="m-up" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" up"}</code> | Physical button that increments. |
| <Link id="m-upbuttonpressed" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" upButtonPressed"}</code> | Unused. |
| <Link id="m-waitingforchangetofinish" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitingForChangeToFinish"}</code> | The running `WaitWhileChanging` coroutine, if any. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer-2" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ActivePlayer { get; set; }"}</code> | The player allowed to change it in single client mode. The server syncs it. |
| <Link id="m-amount-2" /><code>{"int Amount { get; set; }"}</code> | The current value. Setting it clamps it, updates the labels and raises `AmountChanged`. |
| <Link id="m-cap-2" /><code>{"int Cap { get; set; }"}</code> | Extra upper limit on top of `Maximum`. |
| <Link id="m-maximum-2" /><code>{"int Maximum { get; }"}</code> | Highest allowed value (250 by default). |
| <Link id="m-minimum-2" /><code>{"int Minimum { get; }"}</code> | Lowest allowed value (1 by default). |
| <Link id="m-mode-2" /><code><Link to="/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" Mode { get; }"}</code> | Who owns changes: the server, or a single client (the active player). |
| <Link id="m-syncmode-2" /><code><Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" SyncMode { get; }"}</code> | Whether changes sync at once or after the buttons stop being pressed for a moment. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-amountchanged" /><code>{"event "}<Link to="/game-api/types/global-a-b/buttoncounter-amountchangedhandler">{"ButtonCounter.AmountChangedHandler"}</Link>{" AmountChanged"}</code> | Raised whenever the amount changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrement" /><code>{"void Decrement()"}</code> | Lowers the amount by one, if this side owns changes. |
| <Link id="m-forceamount" /><code>{"void ForceAmount(int amount)"}</code> | Sets the amount and syncs it, if this side owns changes (or on the server with no active player). |
| <Link id="m-increment" /><code>{"void Increment()"}</code> | Raises the amount by one, if this side owns changes. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Hooks the buttons and throttle and sets up the sync messages. |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Restores the saved amount. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the amount and active player to a joining player. |
| <Link id="m-save" /><code><Link to="/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> | Saves the amount. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changeby" /><code>{"private void ChangeBy(int delta)"}</code> | Adds a delta from the throttle counter, if this side may change the amount. |
| <Link id="m-checksync" /><code>{"private void CheckSync("}<Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" mode)"}</code> | Sends the amount to chunks when the given mode matches the sync mode. |
| <Link id="m-iscorrectmode" /><code>{"private bool IsCorrectMode()"}</code> | Whether this side owns the counter: the server in server mode, or the active player in single client mode. |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> | Clamps the amount, updates labels, raises `AmountChanged` and syncs now or after changes stop. |
| <Link id="m-playerchanged" /><code>{"private void PlayerChanged()"}</code> | Server: syncs the active player; on clients, enables the throttle only for the active player. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler for the amount; the server accepts changes only from the active player in single client mode. |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Network handler for the active player's ID. |
| <Link id="m-updatetext" /><code>{"private void UpdateText()"}</code> | Writes the amount to every label. |
| <Link id="m-waitwhilechanging" /><code>{"private IEnumerator WaitWhileChanging() (iterator)"}</code> | Coroutine that waits until no change has happened for `changingWaitDuration`, then syncs in delayed mode. |

</details>

## Used in

Members of other types that take, return or hold a `ButtonCounter`:

[`TradeVendor.coinCounter`](/game-api/types/alta-crafting/tradevendor#m-coincounter), [`TradeVendor.itemCounter`](/game-api/types/alta-crafting/tradevendor#m-itemcounter), [`TradeVendor.UpdateStatus`](/game-api/types/alta-crafting/tradevendor#m-updatestatus), [`ButtonCounter.AmountChangedHandler.BeginInvoke`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-begininvoke), [`ButtonCounter.AmountChangedHandler.Invoke`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-invoke).
