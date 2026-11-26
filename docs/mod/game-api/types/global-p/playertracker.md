---
title: "PlayerTracker"
description: "Server: one player's achievement action progress, completed achievements and completed tutorials, kept by GameTaskManager and sent to the API."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTracker

A **class** in `Root.Township`, the global namespace.

Server: one player's achievement action progress, completed achievements and completed tutorials, kept by `GameTaskManager` and sent to the API.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTracker(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> progress, IEnumerable<uint> progressFlags)"}</code> | Creates a `PlayerTracker` from `progress` and `progressFlags`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | True when progress has changed since the last send. |
| <Link id="m-statactions" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{", float> statActions"}</code> | Progress for each action. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedachievements" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> CompletedAchievements { get; }"}</code> | The achievements the player had finished when the tracker was made. |
| <Link id="m-completedtutorials" /><code>{"HashSet<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedTutorials { get; }"}</code> | The micro tutorials the player had finished when the tracker was made. |
| <Link id="m-currentactions" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{"> CurrentActions { get; }"}</code> | The actions with progress above zero. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | Clears the stored action progress. |
| <Link id="m-getvalue" /><code>{"int GetValue("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action)"}</code> | Returns the progress for an action as a whole number, or 0. |
| <Link id="m-sendtodatabase" /><code>{"void SendToDatabase("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | If anything changed, sends all action progress to the API for the player. |
| <Link id="m-updatevalue" /><code>{"void UpdateValue("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action, float progress)"}</code> | Sets the progress for an action and marks the tracker as changed. |

## Used in

Members of other types that take, return or hold a `PlayerTracker`:

[`GameTaskManager.playerTrackers`](/mod/game-api/types/global-e-h/gametaskmanager#m-playertrackers).
