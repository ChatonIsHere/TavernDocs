---
title: "CheckPoint"
description: "class CheckPoint in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CheckPoint

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-beginningdatas" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> beginningDatas"}</code> |
| <Link id="m-beginnings" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] beginnings"}</code> |
| <Link id="m-btndebug" /><code>{"private bool btnDebug"}</code> |
| <Link id="m-endingdatas" /><code>{"private List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> endingDatas"}</code> |
| <Link id="m-endings" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] endings"}</code> |
| <Link id="m-syncplayer" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlayer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-adddefinition" /><code>{"void AddDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData, bool isBeginning)"}</code> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-mark" /><code>{"void Mark("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-removedefinition" /><code>{"void RemoveDefinition("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" definitionData, bool isBeginning)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-adddata" /><code>{"private void AddData(List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> datas, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> |
| <Link id="m-copyarray" /><code>{"private "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] CopyArray("}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"[] from)"}</code> |
| <Link id="m-debugmark" /><code>{"private void DebugMark()"}</code> |
| <Link id="m-removedata" /><code>{"private void RemoveData(List<"}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{"> datas, "}<Link to="/game-api/types/global-i-l/leaderboarddefinitiondata">{"LeaderboardDefinitionData"}</Link>{" newData)"}</code> |
| <Link id="m-serializearray" /><code>{"private void SerializeArray("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, ref "}<Link to="/game-api/types/global-i-l/leaderboarddefinition">{"LeaderboardDefinition"}</Link>{"[] array)"}</code> |
| <Link id="m-syncplayer-2" /><code>{"private void SyncPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
