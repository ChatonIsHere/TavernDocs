---
title: "PlayerInteractionManager"
description: "class PlayerInteractionManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManager

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerInteractionManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerInteractionManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerInteractionManagerData`](/game-api/types/global-p/playerinteractionmanagerdata)
- **Nested types** [`Tracker`](/game-api/types/global-p/playerinteractionmanager-tracker)
- **Documented in** [Items, interaction and damage](/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-p/playerinteractionmanager">{"PlayerInteractionManager"}</Link>{" instance"}</code> |  |
| <Link id="m-maxids" /><code>{"const int maxIDs"}</code> |  |
| <Link id="m-chargesperid" /><code>{"private Dictionary<int, int> chargesPerId"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |
| <Link id="m-nextid" /><code>{"private int nextID"}</code> |  |
| <Link id="m-oldinteractionmultiplier" /><code>{"private float oldInteractionMultiplier"}</code> |  |
| <Link id="m-playerstrackers" /><code>{"private Dictionary<int, Dictionary<int, "}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{">> playersTrackers"}</code> |  |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncFull"}</code> |  |
| <Link id="m-syncmarker" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{"> syncMarker"}</code> |  |
| <Link id="m-timeofdaytorefresh" /><code>{"private float timeOfDayToRefresh"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedalltrackers" /><code>{"event Action UpdatedAllTrackers"}</code> |  |
| <Link id="m-updatedtracker" /><code>{"event Action<int> UpdatedTracker"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int id)"}</code> |  |
| <Link id="m-cleartrackers" /><code>{"void ClearTrackers()"}</code> |  |
| <Link id="m-getid" /><code>{"int GetId(int charges)"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> |  |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int interactions = 1)"}</code> |  |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |  |
| <Link id="m-refund" /><code>{"void Refund("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int refund)"}</code> |  |
| <Link id="m-setcharges" /><code>{"void SetCharges(int id, int charges)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-gettracker" /><code>{"private bool GetTracker("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, out "}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" tracker)"}</code> |  |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isClear)"}</code> |  |
| <Link id="m-syncmarker-2" /><code>{"private void SyncMarker("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" arguments)"}</code> |  |
