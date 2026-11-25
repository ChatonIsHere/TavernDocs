---
title: "ATMMachine"
description: "A bank teller for one player at a time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ATMMachine

A **class** in `Root.Township`, no namespace.

A bank teller for one player at a time.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Trading](/game-api/game-systems/trading#atmmachine)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ATMMachine()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-basedock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" baseDock"}</code> |
| <Link id="m-depositdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" depositDock"}</code> |
| <Link id="m-inversethrottleinteraction" /><code>{"private bool inverseThrottleInteraction"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-owner" /><code>{"private int owner"}</code> |
| <Link id="m-syncowner" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncOwner"}</code> |
| <Link id="m-throttleinteractable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" throttleInteractable"}</code> |
| <Link id="m-withdrawdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" withdrawDock"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-quantityinteller" /><code>{"int QuantityInTeller { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-changeplayer" /><code>{"async void ChangePlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-close" /><code>{"void Close()"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |
| <Link id="m-movetofromwithdraw" /><code>{"void MoveToFromWithdraw(int movement)"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-updatewhileactive" /><code>{"void UpdateWhileActive(int value)"}</code> |

<details>
<summary>13 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-addquantitytodock" /><code>{"private void AddQuantityToDock(int quantity, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> |
| <Link id="m-deposittaken" /><code>{"private void DepositTaken("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |
| <Link id="m-filterdeposit" /><code>{"private void FilterDeposit("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, ref bool result)"}</code> |
| <Link id="m-filterowner" /><code>{"private void FilterOwner("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |
| <Link id="m-loadplayerbankcontent" /><code>{"private async Task LoadPlayerBankContent()"}</code> |
| <Link id="m-logbalancechangewithconsoleevents" /><code>{"private void LogBalanceChangeWithConsoleEvents("}<Link to="/game-api/types/assembly-api-models/userinfo">{"UserInfo"}</Link>{" userInfo, int previousBalance, int newBalance)"}</code> |
| <Link id="m-movequantitybetweendocks" /><code>{"private void MoveQuantityBetweenDocks(int movement, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" fromDock, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> |
| <Link id="m-ownerisnull" /><code>{"private bool OwnerIsNull()"}</code> |
| <Link id="m-removequantityfromatm" /><code>{"private void RemoveQuantityFromATM(int quantity)"}</code> |
| <Link id="m-resetdocks" /><code>{"private void ResetDocks()"}</code> |
| <Link id="m-spawnandsetcoinsindock" /><code>{"private void SpawnAndSetCoinsInDock(int quantity, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" toDock)"}</code> |
| <Link id="m-syncowner-2" /><code>{"private void SyncOwner("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-trysave" /><code>{"private async void TrySave()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `ATMMachine`:

[`PlayerGoldBankAccountData.CurrentAtm`](/game-api/types/global-p/playergoldbankaccountdata#m-currentatm).
