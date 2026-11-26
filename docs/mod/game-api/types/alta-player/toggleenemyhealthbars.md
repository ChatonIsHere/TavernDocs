---
title: "ToggleEnemyHealthBars"
description: "Debug quick access action that shows health bars over every AI agent in the scene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ToggleEnemyHealthBars

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Debug quick access action that shows health bars over every AI agent in the scene. Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ToggleEnemyHealthBars()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for the bar fill.</span> |
| <Link id="m-barscale" /><code>{"private Vector3 barScale"}</code> | <span className="api-desc">Size of each bar.</span> |
| <Link id="m-healthbarmapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/healthbar">{"HealthBar"}</Link>{"> healthBarMapping"}</code> | <span className="api-desc">Bar for each agent entity.</span> |
| <Link id="m-healthshader" /><code>{"private Shader healthShader"}</code> | <span className="api-desc">Shader used for the bars.</span> |
| <Link id="m-rotationupdater" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" rotationUpdater"}</code> | <span className="api-desc">The running rotation coroutine, null when off.</span> |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | <span className="api-desc">Stat shown by the bar (health).</span> |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | <span className="api-desc">Height of the bar above the agent.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while the bars are shown.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Turns bars on for all agents found at that moment, or removes them all. Agents spawned later get none.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkenemyneedshealthbar" /><code>{"private bool CheckEnemyNeedsHealthBar("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" enemy, out "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | <span className="api-desc">True if the stat manager's object has an AI `Agent` and the health stat; logs an error if the stat is missing.</span> |
| <Link id="m-managerdispose" /><code>{"private void ManagerDispose("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Removes an agent's bar when its entity is destroyed.</span> |
| <Link id="m-updaterotations" /><code>{"private IEnumerator UpdateRotations() (iterator)"}</code> | <span className="api-desc">Coroutine on the local player that turns every bar to face the head each frame.</span> |

</details>
