---
title: "SetupAchievements"
description: "Hooks game events to achievement unlocks."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetupAchievements

A **static class** in `Root.Township`, `Alta.Achievements`.

Hooks game events to achievement unlocks. Run once by `AchievementManager.Awake`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"static void Setup()"}</code> | <span className="api-desc">Completes the `first_play` achievement when `GeneralGameEvents.ClientStarted` fires. That is the only hook it adds.</span> |
