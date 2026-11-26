---
title: "PlayerInteractionRestrictor"
description: "Limits how many times each player can use something per in-game day, such as taking from CommunalStorage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionRestrictor

A **class** in `Root.Township`, no namespace.

Limits how many times each player can use something per in-game day, such as taking from `CommunalStorage`. The limit is scaled by the server's `CommunityStorageMultiplier`; `PlayerInteractionManager` does the tracking.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerInteractionRestrictorData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerInteractionRestrictorData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerInteractionRestrictorData`](/game-api/types/global-p/playerinteractionrestrictordata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionRestrictor()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptsrefunds" /><code>{"private bool acceptsRefunds"}</code> | If false, `RefundInteractions` does nothing. |
| <Link id="m-id" /><code>{"private int id"}</code> | Tracker ID in `PlayerInteractionManager`, saved with the entity. -1 until the server assigns one. |
| <Link id="m-interactionspercharge" /><code>{"private int interactionsPerCharge"}</code> | Base number of interactions per charge, before the server's storage multiplier. Saved. |
| <Link id="m-syncid" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncID"}</code> | Method sync on `SyncC` for the tracker ID and charge size. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactionspercharge-2" /><code>{"int InteractionsPerCharge { get; }"}</code> | Unscaled uses per day. Clients receive the scaled number instead. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-allowanceupdated" /><code>{"event Action AllowanceUpdated"}</code> | Fired when this restrictor's per-player allowance changes. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Uses the player has left today. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the id sync and listens for allowance changes. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: gets or refreshes its tracker id with the scaled charge count, and resyncs when server settings change. |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int interactions = 1)"}</code> | Server: uses up to that many charges and returns how many were used. On clients it only returns what is left. |
| <Link id="m-interactfull" /><code>{"int InteractFull("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Uses a whole charge's worth of interactions. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the id and charge count to a joining player. |
| <Link id="m-refundinteractions" /><code>{"void RefundInteractions("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int refund)"}</code> | Server: gives uses back, if this restrictor accepts refunds. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdated" /><code>{"private void CheckUpdated(int id)"}</code> | Fires `AllowanceUpdated` when the manager updates the tracker with this restrictor's ID. |
| <Link id="m-destroyclean" /><code>{"private void DestroyClean("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Server: unhooks from server settings changes when the entity is destroyed. |
| <Link id="m-onallowanceupdated" /><code>{"private void OnAllowanceUpdated()"}</code> | Fires `AllowanceUpdated`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from `PlayerInteractionManager` events. |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> | Server: reapplies the charge size with the new `CommunityStorageMultiplier` and resyncs it. |
| <Link id="m-syncid-2" /><code>{"private void SyncID("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync sending the tracker ID and the charge size scaled by the server's `CommunityStorageMultiplier`. Remote clients apply them. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerInteractionRestrictor`:

[`CommunalStorage.interactionRestrictor`](/game-api/types/alta-items/communalstorage#m-interactionrestrictor).
