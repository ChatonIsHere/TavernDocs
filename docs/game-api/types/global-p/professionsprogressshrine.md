---
title: "ProfessionsProgressShrine"
description: "class ProfessionsProgressShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionsProgressShrine

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProgressionShrine`](/game-api/types/global-p/progressionshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionsProgressShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-availablepointsvisualizers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{"> availablePointsVisualizers"}</code> |  |
| <Link id="m-boughtskillsvisualizer" /><code>{"private "}<Link to="/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillsVisualizer"}</code> |  |
| <Link id="m-pathvisualizerprefab" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" pathVisualizerPrefab"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |
| <Link id="m-spread" /><code>{"private float spread"}</code> |  |
| <Link id="m-treesvisualizerorigin" /><code>{"private Transform treesVisualizerOrigin"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-visualizers" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> |  |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> |  |
