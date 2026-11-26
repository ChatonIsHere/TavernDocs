---
title: "PlayerInteractionManager"
description: "Server-owned, saved per-player charge counters for limited interactions (\"you can take 3 of these\"), reset daily at a set time of day."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerInteractionManager

A **class** in `Root.Township`, the global namespace.

Server-owned, saved per-player charge counters for limited interactions ("you can take 3 of these"), reset daily at a set time of day. Get it with the static `instance`.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerInteractionManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerInteractionManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerInteractionManagerData`](/mod/game-api/types/global-p/playerinteractionmanagerdata)
- **Nested types** [`Tracker`](/mod/game-api/types/global-p/playerinteractionmanager-tracker)
- **Documented in** [Items, interaction and damage](/mod/game-api/items/overview)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerInteractionManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-p/playerinteractionmanager">{"PlayerInteractionManager"}</Link>{" instance"}</code> | <span className="api-desc">The last created manager, set in `Awake`.</span> |
| <Link id="m-maxids" /><code>{"const int maxIDs"}</code> | <span className="api-desc">2048, the ID range the sync messages can carry.</span> |

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chargesperid" /><code>{"private Dictionary<int, int> chargesPerId"}</code> | <span className="api-desc">Starting charges for each registered id.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-nextid" /><code>{"private int nextID"}</code> | <span className="api-desc">Next id `GetId` will hand out. Saved.</span> |
| <Link id="m-oldinteractionmultiplier" /><code>{"private float oldInteractionMultiplier"}</code> | <span className="api-desc">Last seen community storage multiplier, to spot changes.</span> |
| <Link id="m-playerstrackers" /><code>{"private Dictionary<int, Dictionary<int, "}<Link to="/mod/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{">> playersTrackers"}</code> | <span className="api-desc">Trackers by user id, then by interaction id. Saved, and cleared once per game day.</span> |
| <Link id="m-syncfull" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncFull"}</code> | <span className="api-desc">Method sync for a full or clear update.</span> |
| <Link id="m-syncmarker" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncclass-t">{"MethodSyncClass"}</Link>{"<"}<Link to="/mod/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{"> syncMarker"}</code> | <span className="api-desc">Method sync for one tracker.</span> |
| <Link id="m-timeofdaytorefresh" /><code>{"private float timeOfDayToRefresh"}</code> | <span className="api-desc">Time of day (0 to 1) when all trackers reset.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-updatedalltrackers" /><code>{"event Action UpdatedAllTrackers"}</code> | <span className="api-desc">Raised when all counters are cleared.</span> |
| <Link id="m-updatedtracker" /><code>{"event Action<int> UpdatedTracker"}</code> | <span className="api-desc">Raised with the ID when one counter changes for the local player.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkavailableinteractions" /><code>{"int CheckAvailableInteractions("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, int id)"}</code> | <span className="api-desc">Charges the player has left for an ID, or the full charge count if they have not used it yet.</span> |
| <Link id="m-cleartrackers" /><code>{"void ClearTrackers()"}</code> | <span className="api-desc">Resets every player's counters and tells clients. Runs daily, when the community storage multiplier setting changes, and from a progress console command.</span> |
| <Link id="m-getid" /><code>{"int GetId(int charges)"}</code> | <span className="api-desc">Registers a new counter ID with its charge count and returns the ID.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Sets up the full sync and single counter sync messages.</span> |
| <Link id="m-initializeasserver" /><code>{"override void InitializeAsServer("}<Link to="/mod/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | <span className="api-desc">Server: schedules the daily reset and watches the server's community storage multiplier.</span> |
| <Link id="m-interact" /><code>{"int Interact("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int interactions = 1)"}</code> | <span className="api-desc">Server: uses up to `interactions` charges and returns how many were used. On a client it only returns the charges left.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the joining player their counters.</span> |
| <Link id="m-refund" /><code>{"void Refund("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, int refund)"}</code> | <span className="api-desc">Server: gives charges back to a player for an ID.</span> |
| <Link id="m-setcharges" /><code>{"void SetCharges(int id, int charges)"}</code> | <span className="api-desc">Changes the charge count of a registered ID. Players who already have a counter keep theirs.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the static `instance`.</span> |
| <Link id="m-gettracker" /><code>{"private bool GetTracker("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, int id, out "}<Link to="/mod/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" tracker)"}</code> | <span className="api-desc">Server: gets or creates a player's tracker for an id, starting with that id's registered charges. False if the id isn't registered.</span> |
| <Link id="m-settingschanged" /><code>{"private void SettingsChanged(Settings obj)"}</code> | <span className="api-desc">Server: clears all trackers when the community storage multiplier changes.</span> |
| <Link id="m-syncfull-2" /><code>{"private void SyncFull("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isClear)"}</code> | <span className="api-desc">Sends a clear to everyone, or a player's whole tracker list on connect. Client: applies it.</span> |
| <Link id="m-syncmarker-2" /><code>{"private void SyncMarker("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerinteractionmanager-tracker">{"PlayerInteractionManager.Tracker"}</Link>{" arguments)"}</code> | <span className="api-desc">Sends one tracker's id and charges left. Client: stores it under the logged-in user and raises `UpdatedTracker`.</span> |

</details>
