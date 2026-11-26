---
title: "AttackDirectionCoreSettings"
description: "Settings asset that makes a creature animate in response to where its target is attacking from (above or either side)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionCoreSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings asset that makes a creature animate in response to where its target is attacking from (above or either side). `GetCore` makes the runtime `AttackDirectionCore`.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionCoreSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationchangeduration" /><code>{"private float animationChangeDuration"}</code> | Seconds to blend the reaction animations to a new direction. |
| <Link id="m-height" /><code>{"private float height"}</code> | Height above the target's ground position used to judge where an attack comes from. |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> | Whether the agent turns to face its target while this runs. |
| <Link id="m-layer" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" layer"}</code> | Animation that switches the reaction layer on while an attack is incoming. |
| <Link id="m-mindamage" /><code>{"private float minDamage"}</code> | Attacks at or below this damage are ignored. |
| <Link id="m-side" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" side"}</code> | Animation for attacks coming from the left or right. |
| <Link id="m-up" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" up"}</code> | Animation for attacks coming from above. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationchangeduration-2" /><code>{"float AnimationChangeDuration { get; }"}</code> | Seconds to blend the direction animations to a new value. |
| <Link id="m-height-2" /><code>{"float Height { get; }"}</code> | Height above the target's ground position used as the reference point for attack directions. |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | If true the creature turns to face its target while the core runs. |
| <Link id="m-layer-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Layer { get; }"}</code> | Animation switched on whenever an attack above `MinDamage` is seen. |
| <Link id="m-mindamage-2" /><code>{"float MinDamage { get; }"}</code> | Target attacks with damage below this are ignored. |
| <Link id="m-side-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Side { get; }"}</code> | Animation set left or right for attacks from the side. |
| <Link id="m-up-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Up { get; }"}</code> | Animation set for attacks from above. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcore" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" GetCore("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Creates an `AttackDirectionCore` for the agent, which drives the three animations each update. |

## Used in

Members of other types that take, return or hold a `AttackDirectionCoreSettings`:

[`AgentAttackDirectionReactSettings.settings`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings), [`AgentAttackDirectionReactSettings.Settings`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings-2), [`AttackDirectionCore.AttackDirectionCore`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-ctor), [`AttackDirectionCore.settings`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-settings), [`AttackDirectionReactAIHook.settings`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-settings), [`HookAction.HookAction`](/mod/game-api/types/alta-intelligence/hookaction#m-ctor).
