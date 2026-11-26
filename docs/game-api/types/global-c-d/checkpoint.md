---
title: "CheckPoint"
description: "Networked race checkpoint: marking a player here starts or ends timing for its leaderboards through LeaderboardManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CheckPoint

A **class** in `Root.Township`, no namespace.

Networked race checkpoint: marking a player here starts or ends timing for its leaderboards through `LeaderboardManager`. The server does the marking; a client sends a message for its own player.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<CheckPointData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<CheckPointData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`CheckPointData`](/game-api/types/global-c-d/checkpointdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CheckPoint()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-beginningdatas" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> beginningDatas"}</code> | Leaderboards that start timing here. Saved. |
| <Link id="m-beginnings" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] beginnings"}</code> | Leaderboard definitions that start here. Overwritten from save data on load. |
| <Link id="m-btndebug" /><code>{"private bool btnDebug"}</code> | Inspector button that runs `DebugMark`. |
| <Link id="m-endingdatas" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> endingDatas"}</code> | Leaderboards that stop timing here. Saved. |
| <Link id="m-endings" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] endings"}</code> | Leaderboard definitions that end here. Overwritten from save data on load. |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> | Message a client sends when its player reaches the checkpoint. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-adddefinition" /><code>{"void AddDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData, bool isBeginning)"}</code> | Adds a leaderboard this checkpoint begins or ends. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Sets up the sync message clients use to report reaching the checkpoint. |
| <Link id="m-mark" /><code>{"void Mark("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Marks a player at this checkpoint. Server: updates the leaderboards. Client: sends a message for the local player only. |
| <Link id="m-removedefinition" /><code>{"void RemoveDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData, bool isBeginning)"}</code> | Removes a leaderboard this checkpoint begins or ends. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-adddata" /><code>{"private void AddData(List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> datas, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> | Adds a leaderboard data entry to a list unless one with the same hash is already there. |
| <Link id="m-copyarray" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] CopyArray("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] from)"}</code> | Turns saved leaderboard data into definitions; entries with no definition are registered with `LeaderboardDefinitionData.AddData` instead. |
| <Link id="m-debugmark" /><code>{"private void DebugMark()"}</code> | Inspector button: marks the current local player. |
| <Link id="m-removedata" /><code>{"private void RemoveData(List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> datas, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> | Removes the first entry with the same hash from a list. |
| <Link id="m-serializearray" /><code>{"private void SerializeArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] array)"}</code> | Writes or reads a leaderboard definition array by hash (up to 15). Not called in this class. |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Server: on a client's message, marks that player on the leaderboards. |

</details>
