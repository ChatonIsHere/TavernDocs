---
title: "PlayerTracker"
description: "class PlayerTracker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerTracker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerTracker(IEnumerable<"}<Link to="/game-api/types/assembly-api-models/statprogress">{"StatProgress"}</Link>{"> progress, IEnumerable<uint> progressFlags)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-ischanged" /><code>{"private bool isChanged"}</code> |  |
| <Link id="m-statactions" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{", float> statActions"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-completedachievements" /><code>{"HashSet<"}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{"> CompletedAchievements { get; }"}</code> |  |
| <Link id="m-completedtutorials" /><code>{"HashSet<"}<Link to="/game-api/types/game-other-namespaces/microtutorialsettings">{"MicroTutorialSettings"}</Link>{"> CompletedTutorials { get; }"}</code> |  |
| <Link id="m-currentactions" /><code>{"IEnumerable<"}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{"> CurrentActions { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |  |
| <Link id="m-getvalue" /><code>{"int GetValue("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action)"}</code> |  |
| <Link id="m-sendtodatabase" /><code>{"void SendToDatabase("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-updatevalue" /><code>{"void UpdateValue("}<Link to="/game-api/types/global-e-h/gameaction">{"GameAction"}</Link>{" action, float progress)"}</code> |  |

## Used in

Members of other types that take, return or hold a `PlayerTracker`:

[`GameTaskManager.playerTrackers`](/game-api/types/global-e-h/gametaskmanager#m-playertrackers).
