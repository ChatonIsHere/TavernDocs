---
title: "PlayerInteractionRestrictor"
description: "Limits how many times each player can use something per in-game day, such as taking from CommunalStorage."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionRestrictor

A **class** in `Root.Township`, the global namespace.

Limits how many times each player can use something per in-game day, such as taking from `CommunalStorage`. The limit is scaled by the server's `CommunityStorageMultiplier`; `PlayerInteractionManager` does the tracking.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerInteractionRestrictorData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerInteractionRestrictorData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerInteractionRestrictorData`](/mod/game-api/types/global-p/playerinteractionrestrictordata)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionRestrictor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptsrefunds" /><code>{"private bool acceptsRefunds"}</code> | <span className="api-desc">If false, `RefundInteractions` does nothing.</span> |
| <Link id="m-id" /><code>{"private int id"}</code> | <span className="api-desc">Tracker ID in `PlayerInteractionManager`, saved with the entity. -1 until the server assigns one.</span> |
| <Link id="m-interactionspercharge" /><code>{"private int interactionsPerCharge"}</code> | <span className="api-desc">Base number of interactions per charge, before the server's storage multiplier. Saved.</span> |
| <Link id="m-syncid" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncID"}</code> | <span className="api-desc">Method sync on `SyncC` for the tracker ID and charge size.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactionspercharge-2" /><code>{"int InteractionsPerCharge { get; }"}</code> | <span className="api-desc">Unscaled uses per day. Clients receive the scaled number instead.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-allowanceupdated" /><code>{"event Action AllowanceUpdated"}</code> | <span className="api-desc">Fired when this restrictor's per-player allowance changes.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Uses the player has left today.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the id sync and listens for allowance changes.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: gets or refreshes its tracker id with the scaled charge count, and resyncs when server settings change.</span> |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int interactions = 1)"}</code> | <span className="api-desc">Server: uses up to that many charges and returns how many were used. On clients it only returns what is left.</span> |
| <Link id="m-interactfull" /><code>{"int InteractFull("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Uses a whole charge's worth of interactions.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the id and charge count to a joining player.</span> |
| <Link id="m-refundinteractions" /><code>{"void RefundInteractions("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int refund)"}</code> | <span className="api-desc">Server: gives uses back, if this restrictor accepts refunds.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkupdated" /><code>{"private void CheckUpdated(int id)"}</code> | <span className="api-desc">Fires `AllowanceUpdated` when the manager updates the tracker with this restrictor's ID.</span> |
| <Link id="m-destroyclean" /><code>{"private void DestroyClean("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Server: unhooks from server settings changes when the entity is destroyed.</span> |
| <Link id="m-onallowanceupdated" /><code>{"private void OnAllowanceUpdated()"}</code> | <span className="api-desc">Fires `AllowanceUpdated`.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from `PlayerInteractionManager` events.</span> |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> | <span className="api-desc">Server: reapplies the charge size with the new `CommunityStorageMultiplier` and resyncs it.</span> |
| <Link id="m-syncid-2" /><code>{"private void SyncID("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync sending the tracker ID and the charge size scaled by the server's `CommunityStorageMultiplier`. Remote clients apply them.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerInteractionRestrictor`:

<div className="api-used-in">

[`CommunalStorage.interactionRestrictor`](/mod/game-api/types/alta-items/communalstorage#m-interactionrestrictor).

</div>
