---
title: "ProfessionsProgressShrine"
description: "Skill shrine that shows an available-points visual for every enabled profession path in an arc, plus the bought skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionsProgressShrine

A **class** in `Root.Township`, no namespace.

Skill shrine that shows an available-points visual for every enabled profession path in an arc, plus the bought skills.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`ProgressionShrine`](/game-api/types/global-p/progressionshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionsProgressShrine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepointsvisualizers" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{"> availablePointsVisualizers"}</code> | Path visuals by profession path. |
| <Link id="m-boughtskillsvisualizer" /><code>{"private "}<Link to="/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillsVisualizer"}</code> | Visual for skills already bought. |
| <Link id="m-pathvisualizerprefab" /><code>{"private "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" pathVisualizerPrefab"}</code> | Prefab made for each path. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Radius of the arc. |
| <Link id="m-spread" /><code>{"private float spread"}</code> | Angle the arc covers in degrees (default 270). |
| <Link id="m-treesvisualizerorigin" /><code>{"private Transform treesVisualizerOrigin"}</code> | Center and parent of the arc. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-visualizers" /><code>{"override IEnumerable<"}<Link to="/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | The bought skills visual, then every path visual. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | Returns the visual for a path, or null. |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> | Does nothing. |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> | Does nothing. |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> | Server: updates the visuals for the player using the shrine, starting from the Forging path. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Makes a visual per enabled profession path and places them in an arc around `treesVisualizerOrigin`. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws where the path visuals will go. |

</details>
