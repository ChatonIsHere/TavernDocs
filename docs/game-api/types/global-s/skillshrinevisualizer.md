---
title: "SkillShrineVisualizer"
description: "Base for the display on a skill shrine that shows one progression path for the player using it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineVisualizer

An **abstract class** in `Root.Township`, no namespace.

Base for the display on a skill shrine that shows one progression path for the player using it. Server prepares the data, which is then synced to clients.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`BoughtSkillVisualizer`](/game-api/types/global-a-b/boughtskillvisualizer), [`ExperienceFillVisualizer`](/game-api/types/global-e-h/experiencefillvisualizer), [`PathModelDisplay`](/game-api/types/global-p/pathmodeldisplay), [`SkillOrbScaler`](/game-api/types/global-s/skillorbscaler)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected SkillShrineVisualizer()"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-path" /><code><Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" Path { get; private set; }"}</code> | The progression path this visualizer shows. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"abstract void Disable()"}</code> | Hides the display. |
| <Link id="m-prepareonserver" /><code>{"abstract void PrepareOnServer("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | Server: gathers what to show from the player's progression manager. |
| <Link id="m-serialize" /><code>{"abstract void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | Reads or writes the display data on a stream. |
| <Link id="m-setpath" /><code>{"virtual void SetPath("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Sets the path to show. |

## Used in

Members of other types that take, return or hold a `SkillShrineVisualizer`:

[`ProfessionsProgressShrine.Visualizers`](/game-api/types/global-p/professionsprogressshrine#m-visualizers), [`ProgressionShrine.Visualizers`](/game-api/types/global-p/progressionshrine#m-visualizers), [`SkillShrine.visualizers`](/game-api/types/global-s/skillshrine#m-visualizers), [`SkillShrine.Visualizers`](/game-api/types/global-s/skillshrine#m-visualizers-2).
