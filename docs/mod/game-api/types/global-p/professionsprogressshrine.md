---
title: "ProfessionsProgressShrine"
description: "Skill shrine that shows an available-points visual for every enabled profession path in an arc, plus the bought skills."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ProfessionsProgressShrine

A **class** in `Root.Township`, the global namespace.

Skill shrine that shows an available-points visual for every enabled profession path in an arc, plus the bought skills.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`ProgressionShrine`](/mod/game-api/types/global-p/progressionshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ProfessionsProgressShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-availablepointsvisualizers" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{", "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{"> availablePointsVisualizers"}</code> | <span className="api-desc">Path visuals by profession path.</span> |
| <Link id="m-boughtskillsvisualizer" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boughtskillvisualizer">{"BoughtSkillVisualizer"}</Link>{" boughtSkillsVisualizer"}</code> | <span className="api-desc">Visual for skills already bought.</span> |
| <Link id="m-pathvisualizerprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" pathVisualizerPrefab"}</code> | <span className="api-desc">Prefab made for each path.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Radius of the arc.</span> |
| <Link id="m-spread" /><code>{"private float spread"}</code> | <span className="api-desc">Angle the arc covers in degrees (default 270).</span> |
| <Link id="m-treesvisualizerorigin" /><code>{"private Transform treesVisualizerOrigin"}</code> | <span className="api-desc">Center and parent of the arc.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-visualizers" /><code>{"override IEnumerable<"}<Link to="/mod/game-api/types/global-s/skillshrinevisualizer">{"SkillShrineVisualizer"}</Link>{"> Visualizers { get; }"}</code> | <span className="api-desc">The bought skills visual, then every path visual.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvisualizer" /><code>{"override "}<Link to="/mod/game-api/types/global-e-h/experiencefillvisualizer">{"ExperienceFillVisualizer"}</Link>{" GetVisualizer("}<Link to="/mod/game-api/types/global-p/progressionpath">{"ProgressionPath"}</Link>{" path)"}</code> | <span className="api-desc">Returns the visual for a path, or null.</span> |
| <Link id="m-closeinternal" /><code>{"protected override void CloseInternal()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-openonclient" /><code>{"protected override void OpenOnClient()"}</code> | <span className="api-desc">Does nothing.</span> |
| <Link id="m-openonserver" /><code>{"protected override void OpenOnServer()"}</code> | <span className="api-desc">Server: updates the visuals for the player using the shrine, starting from the Forging path.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Makes a visual per enabled profession path and places them in an arc around `treesVisualizerOrigin`.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws where the path visuals will go.</span> |

</details>
