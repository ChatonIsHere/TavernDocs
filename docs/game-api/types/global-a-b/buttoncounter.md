---
title: "ButtonCounter"
description: "class ButtonCounter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonCounter

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<ButtonCounterSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<ButtonCounterSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`ButtonCounterSaveData`](/game-api/types/global-a-b/buttoncountersavedata)
- **Nested types** [`AmountChangedHandler`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler), [`CounterMode`](/game-api/types/global-a-b/buttoncounter-countermode), [`CountSyncMode`](/game-api/types/global-a-b/buttoncounter-countsyncmode), [`TextRendererSettings`](/game-api/types/global-a-b/buttoncounter-textrenderersettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonCounter()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" activePlayer"}</code> |  |
| <Link id="m-amount" /><code>{"private int amount"}</code> |  |
| <Link id="m-cap" /><code>{"private int cap"}</code> |  |
| <Link id="m-changingfinished" /><code>{"private float changingFinished"}</code> |  |
| <Link id="m-changingwaitduration" /><code>{"private float changingWaitDuration"}</code> |  |
| <Link id="m-down" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" down"}</code> |  |
| <Link id="m-downbuttonpressed" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" downButtonPressed"}</code> |  |
| <Link id="m-labels" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-textrenderersettings">{"ButtonCounter.TextRendererSettings"}</Link>{"[] labels"}</code> |  |
| <Link id="m-maximum" /><code>{"private int maximum"}</code> |  |
| <Link id="m-minimum" /><code>{"private int minimum"}</code> |  |
| <Link id="m-mode" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" mode"}</code> |  |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |  |
| <Link id="m-syncmode" /><code>{"private "}<Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" syncMode"}</code> |  |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> |  |
| <Link id="m-throttlecounter" /><code>{"private "}<Link to="/game-api/types/global-t-x/throttlecounter">{"ThrottleCounter"}</Link>{" throttleCounter"}</code> |  |
| <Link id="m-up" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" up"}</code> |  |
| <Link id="m-upbuttonpressed" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" upButtonPressed"}</code> |  |
| <Link id="m-waitingforchangetofinish" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" waitingForChangeToFinish"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activeplayer-2" /><code><Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" ActivePlayer { get; set; }"}</code> |  |
| <Link id="m-amount-2" /><code>{"int Amount { get; set; }"}</code> |  |
| <Link id="m-cap-2" /><code>{"int Cap { get; set; }"}</code> |  |
| <Link id="m-maximum-2" /><code>{"int Maximum { get; }"}</code> |  |
| <Link id="m-minimum-2" /><code>{"int Minimum { get; }"}</code> |  |
| <Link id="m-mode-2" /><code><Link to="/game-api/types/global-a-b/buttoncounter-countermode">{"ButtonCounter.CounterMode"}</Link>{" Mode { get; }"}</code> |  |
| <Link id="m-syncmode-2" /><code><Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" SyncMode { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-amountchanged" /><code>{"event "}<Link to="/game-api/types/global-a-b/buttoncounter-amountchangedhandler">{"ButtonCounter.AmountChangedHandler"}</Link>{" AmountChanged"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-decrement" /><code>{"void Decrement()"}</code> |  |
| <Link id="m-forceamount" /><code>{"void ForceAmount(int amount)"}</code> |  |
| <Link id="m-increment" /><code>{"void Increment()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-load" /><code>{"void Load("}<Link to="/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" data, "}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-save" /><code><Link to="/game-api/types/global-a-b/buttoncountersavedata">{"ButtonCounterSaveData"}</Link>{" Save("}<Link to="/game-api/types/alta-networking/iserializechildren">{"ISerializeChildren"}</Link>{" childSerializer)"}</code> |  |
| <Link id="m-changeby" /><code>{"private void ChangeBy(int delta)"}</code> |  |
| <Link id="m-checksync" /><code>{"private void CheckSync("}<Link to="/game-api/types/global-a-b/buttoncounter-countsyncmode">{"ButtonCounter.CountSyncMode"}</Link>{" mode)"}</code> |  |
| <Link id="m-iscorrectmode" /><code>{"private bool IsCorrectMode()"}</code> |  |
| <Link id="m-onchanged" /><code>{"private void OnChanged()"}</code> |  |
| <Link id="m-playerchanged" /><code>{"private void PlayerChanged()"}</code> |  |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updatetext" /><code>{"private void UpdateText()"}</code> |  |
| <Link id="m-waitwhilechanging" /><code>{"private IEnumerator WaitWhileChanging() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ButtonCounter`:

[`TradeVendor.coinCounter`](/game-api/types/alta-crafting/tradevendor#m-coincounter), [`TradeVendor.itemCounter`](/game-api/types/alta-crafting/tradevendor#m-itemcounter), [`TradeVendor.UpdateStatus`](/game-api/types/alta-crafting/tradevendor#m-updatestatus), [`ButtonCounter.AmountChangedHandler.BeginInvoke`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-begininvoke), [`ButtonCounter.AmountChangedHandler.Invoke`](/game-api/types/global-a-b/buttoncounter-amountchangedhandler#m-invoke).
