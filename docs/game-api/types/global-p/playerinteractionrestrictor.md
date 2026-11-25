---
title: "PlayerInteractionRestrictor"
description: "class PlayerInteractionRestrictor in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionRestrictor

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerInteractionRestrictorData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerInteractionRestrictorData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerInteractionRestrictorData`](/game-api/types/global-p/playerinteractionrestrictordata)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionRestrictor()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-acceptsrefunds" /><code>{"private bool acceptsRefunds"}</code> |  |
| <Link id="m-id" /><code>{"private int id"}</code> |  |
| <Link id="m-interactionspercharge" /><code>{"private int interactionsPerCharge"}</code> |  |
| <Link id="m-syncid" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncID"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interactionspercharge-2" /><code>{"int InteractionsPerCharge { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-allowanceupdated" /><code>{"event Action AllowanceUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int interactions = 1)"}</code> |  |
| <Link id="m-interactfull" /><code>{"int InteractFull("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-refundinteractions" /><code>{"void RefundInteractions("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int refund)"}</code> |  |
| <Link id="m-checkupdated" /><code>{"private void CheckUpdated(int id)"}</code> |  |
| <Link id="m-destroyclean" /><code>{"private void DestroyClean("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-onallowanceupdated" /><code>{"private void OnAllowanceUpdated()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> |  |
| <Link id="m-syncid-2" /><code>{"private void SyncID("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerInteractionRestrictor`:

[`CommunalStorage.interactionRestrictor`](/game-api/types/alta-items/communalstorage#m-interactionrestrictor).
