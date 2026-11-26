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
| <Link id="m-ctor" /><code>{"PlayerTracker(IEnumerable<"}<Link to="/mod/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> progress, IEnumerable<uint> progressFlags)"}</code> | <span className="api-desc">Creates a `PlayerTracker` from `progress` and `progressFlags`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> | <span className="api-desc">True when progress has changed since the last send.</span> |
| <Link id="m-statactions" /><code>{"private readonly Dictionary<"}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{", float> statActions"}</code> | <span className="api-desc">Progress for each action.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedachievements" /><code>{"HashSet<"}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> CompletedAchievements { get; }"}</code> | <span className="api-desc">The achievements the player had finished when the tracker was made.</span> |
| <Link id="m-completedtutorials" /><code>{"HashSet<"}<Link to="/mod/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedTutorials { get; }"}</code> | <span className="api-desc">The micro tutorials the player had finished when the tracker was made.</span> |
| <Link id="m-currentactions" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{"> CurrentActions { get; }"}</code> | <span className="api-desc">The actions with progress above zero.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Clears the stored action progress.</span> |
| <Link id="m-getvalue" /><code>{"int GetValue("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action)"}</code> | <span className="api-desc">Returns the progress for an action as a whole number, or 0.</span> |
| <Link id="m-sendtodatabase" /><code>{"void SendToDatabase("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">If anything changed, sends all action progress to the API for the player.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue("}<Link to="/mod/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action, float progress)"}</code> | <span className="api-desc">Sets the progress for an action and marks the tracker as changed.</span> |

## Used in

Members of other types that take, return or hold a `PlayerTracker`:

<div className="api-used-in">

[`GameTaskManager.playerTrackers`](/mod/game-api/types/global-e-h/gametaskmanager#m-playertrackers).

</div>
