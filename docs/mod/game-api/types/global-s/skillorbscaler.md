---
title: "SkillOrbScaler"
description: "Skill shrine visualizer that grows or shrinks the shrine's orbs by how close the shrine's player's hands are."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillOrbScaler

A **class** in `Root.Township`, the global namespace.

Skill shrine visualizer that grows or shrinks the shrine's orbs by how close the shrine's player's hands are. Client side.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SkillShrineVisualizer`](/mod/game-api/types/global-s/skillshrinevisualizer)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkillOrbScaler()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-scaleoverdistance" /><code>{"private AnimationCurve scaleOverDistance"}</code> | <span className="api-desc">Orb scale by distance in metres to the nearest hand.</span> |
| <Link id="m-shrine" /><code>{"private "}<Link to="/mod/game-api/types/global-s/skillshrine">{"SkillShrine"}</Link>{" shrine"}</code> | <span className="api-desc">The shrine whose spawned orbs are scaled.</span> |
| <Link id="m-targetplayer" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" targetPlayer"}</code> | <span className="api-desc">The player whose hands are measured.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Handle of the budgeted update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"override void Disable()"}</code> | <span className="api-desc">Stops the scaling update.</span> |
| <Link id="m-prepareonserver" /><code>{"override void PrepareOnServer("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" progressionManager)"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, "}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" manager)"}</code> | <span className="api-desc">Takes the player from the progression manager and starts the scaling update when reading.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the scaling update, except in headless builds.</span> |
| <Link id="m-updatehandposition" /><code>{"private void UpdateHandPosition()"}</code> | <span className="api-desc">Scales each free orb by `scaleOverDistance` from the nearest grip point; held or locked orbs stay at full size.</span> |

</details>
