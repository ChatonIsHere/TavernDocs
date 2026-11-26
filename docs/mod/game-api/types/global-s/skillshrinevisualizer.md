---
title: "SkillShrineVisualizer"
description: "Base for the display on a skill shrine that shows one progression path for the player using it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineVisualizer

An **abstract class** in `Root.Township`, the global namespace.

Base for the display on a skill shrine that shows one progression path for the player using it. Server prepares the data, which is then synced to clients.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BoughtSkillVisualizer`](/mod/game-api/types/global-a-b/boughtskillvisualizer), [`ExperienceFillVisualizer`](/mod/game-api/types/global-e-h/experiencefillvisualizer), [`PathModelDisplay`](/mod/game-api/types/global-p/pathmodeldisplay), [`SkillOrbScaler`](/mod/game-api/types/global-s/skillorbscaler)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected SkillShrineVisualizer()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> | The progression path this visualizer shows. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> | Hides the display. |
| <Link id="m-prepareonserver" /><code>{"abstract void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | Server: gathers what to show from the player's progression manager. |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Reads or writes the display data on a stream. |
| <Link id="m-setpath" /><code>{"virtual void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Sets the path to show. |

## Used in

Members of other types that take, return or hold a `SkillShrineVisualizer`:

[`ProfessionsProgressShrine.Visualizers`](/mod/game-api/types/global-p/professionsprogressshrine#m-visualizers), [`ProgressionShrine.Visualizers`](/mod/game-api/types/global-p/progressionshrine#m-visualizers), [`SkillShrine.visualizers`](/mod/game-api/types/global-s/skillshrine#m-visualizers), [`SkillShrine.Visualizers`](/mod/game-api/types/global-s/skillshrine#m-visualizers-2).
