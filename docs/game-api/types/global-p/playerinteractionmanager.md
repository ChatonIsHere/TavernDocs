---
title: "PlayerInteractionManager"
description: "Server-owned, saved per-player charge counters for limited interactions (\"you can take 3 of these\"), reset daily at a set time of day."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManager

A **class** in `Root.Township`, no namespace.

Server-owned, saved per-player charge counters for limited interactions ("you can take 3 of these"), reset daily at a set time of day. Get it with the static `instance`.

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
| <Link id="m-instance" /><code>{"static "}<Link to="/game-api/types/global-p/playerinteractionmanager">{"PlayerInteractionManager"}</Link>{" instance"}</code> | The last created manager, set in `Awake`. |
| <Link id="m-maxids" /><code>{"const int maxIDs"}</code> | 2048, the ID range the sync messages can carry. |
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
| <Link id="m-updatedalltrackers" /><code>{"event Action UpdatedAllTrackers"}</code> | Raised when all counters are cleared. |
| <Link id="m-updatedtracker" /><code>{"event Action<int> UpdatedTracker"}</code> | Raised with the ID when one counter changes for the local player. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int id)"}</code> | Charges the player has left for an ID, or the full charge count if they have not used it yet. |
| <Link id="m-cleartrackers" /><code>{"void ClearTrackers()"}</code> | Resets every player's counters and tells clients. Runs daily, when the community storage multiplier setting changes, and from a progress console command. |
| <Link id="m-getid" /><code>{"int GetId(int charges)"}</code> | Registers a new counter ID with its charge count and returns the ID. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the full sync and single counter sync messages. |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Server: schedules the daily reset and watches the server's community storage multiplier. |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int interactions = 1)"}</code> | Server: uses up to `interactions` charges and returns how many were used. On a client it only returns the charges left. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the joining player their counters. |
| <Link id="m-refund" /><code>{"void Refund("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int refund)"}</code> | Server: gives charges back to a player for an ID. |
| <Link id="m-setcharges" /><code>{"void SetCharges(int id, int charges)"}</code> | Changes the charge count of a registered ID. Players who already have a counter keep theirs. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-gettracker" /><code>{"private bool GetTracker("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, out "}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" tracker)"}</code> |  |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> |  |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isClear)"}</code> |  |
| <Link id="m-syncmarker-2" /><code>{"private void SyncMarker("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" arguments)"}</code> |  |
