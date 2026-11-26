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
| <Link id="m-ctor" /><code>{"ToggleEnemyHealthBars()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private readonly int _Progress"}</code> | Shader property ID for the bar fill. |
| <Link id="m-barscale" /><code>{"private Vector3 barScale"}</code> | Size of each bar. |
| <Link id="m-healthbarmapping" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{", "}<Link to="/mod/game-api/types/alta-player/healthbar">{"HealthBar"}</Link>{"> healthBarMapping"}</code> | Bar for each agent entity. |
| <Link id="m-healthshader" /><code>{"private Shader healthShader"}</code> | Shader used for the bars. |
| <Link id="m-rotationupdater" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" rotationUpdater"}</code> | The running rotation coroutine, null when off. |
| <Link id="m-statdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" statDefinition"}</code> | Stat shown by the bar (health). |
| <Link id="m-verticaloffset" /><code>{"private float verticalOffset"}</code> | Height of the bar above the agent. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while the bars are shown. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Turns bars on for all agents found at that moment, or removes them all. Agents spawned later get none. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkenemyneedshealthbar" /><code>{"private bool CheckEnemyNeedsHealthBar("}<Link to="/mod/game-api/types/alta-stats-effects/statmanager">{"StatManager"}</Link>{" enemy, out "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | True if the stat manager's object has an AI `Agent` and the health stat; logs an error if the stat is missing. |
| <Link id="m-managerdispose" /><code>{"private void ManagerDispose("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Removes an agent's bar when its entity is destroyed. |
| <Link id="m-updaterotations" /><code>{"private IEnumerator UpdateRotations() (iterator)"}</code> | Coroutine on the local player that turns every bar to face the head each frame. |

</details>
