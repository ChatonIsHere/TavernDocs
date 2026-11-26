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
| <Link id="m-ctor" /><code>{"protected SkillShrineVisualizer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> | <span className="api-desc">The progression path this visualizer shows.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> | <span className="api-desc">Hides the display.</span> |
| <Link id="m-prepareonserver" /><code>{"abstract void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | <span className="api-desc">Server: gathers what to show from the player's progression manager.</span> |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Reads or writes the display data on a stream.</span> |
| <Link id="m-setpath" /><code>{"virtual void SetPath("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Sets the path to show.</span> |

## Used in

Members of other types that take, return or hold a `SkillShrineVisualizer`:

<div className="api-used-in">

[`ProfessionsProgressShrine.Visualizers`](/mod/game-api/types/global-p/professionsprogressshrine#m-visualizers), [`ProgressionShrine.Visualizers`](/mod/game-api/types/global-p/progressionshrine#m-visualizers), [`SkillShrine.visualizers`](/mod/game-api/types/global-s/skillshrine#m-visualizers), [`SkillShrine.Visualizers`](/mod/game-api/types/global-s/skillshrine#m-visualizers-2).

</div>
