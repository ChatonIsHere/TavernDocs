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
| <Link id="m-ctor" /><code>{"AttackDirectionCoreSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationchangeduration" /><code>{"private float animationChangeDuration"}</code> | <span className="api-desc">Seconds to blend the reaction animations to a new direction.</span> |
| <Link id="m-height" /><code>{"private float height"}</code> | <span className="api-desc">Height above the target's ground position used to judge where an attack comes from.</span> |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> | <span className="api-desc">Whether the agent turns to face its target while this runs.</span> |
| <Link id="m-layer" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" layer"}</code> | <span className="api-desc">Animation that switches the reaction layer on while an attack is incoming.</span> |
| <Link id="m-mindamage" /><code>{"private float minDamage"}</code> | <span className="api-desc">Attacks at or below this damage are ignored.</span> |
| <Link id="m-side" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" side"}</code> | <span className="api-desc">Animation for attacks coming from the left or right.</span> |
| <Link id="m-up" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" up"}</code> | <span className="api-desc">Animation for attacks coming from above.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationchangeduration-2" /><code>{"float AnimationChangeDuration { get; }"}</code> | <span className="api-desc">Seconds to blend the direction animations to a new value.</span> |
| <Link id="m-height-2" /><code>{"float Height { get; }"}</code> | <span className="api-desc">Height above the target's ground position used as the reference point for attack directions.</span> |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | <span className="api-desc">If true the creature turns to face its target while the core runs.</span> |
| <Link id="m-layer-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Layer { get; }"}</code> | <span className="api-desc">Animation switched on whenever an attack above `MinDamage` is seen.</span> |
| <Link id="m-mindamage-2" /><code>{"float MinDamage { get; }"}</code> | <span className="api-desc">Target attacks with damage below this are ignored.</span> |
| <Link id="m-side-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Side { get; }"}</code> | <span className="api-desc">Animation set left or right for attacks from the side.</span> |
| <Link id="m-up-2" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Up { get; }"}</code> | <span className="api-desc">Animation set for attacks from above.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcore" /><code><Link to="/mod/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" GetCore("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Creates an `AttackDirectionCore` for the agent, which drives the three animations each update.</span> |

## Used in

Members of other types that take, return or hold a `AttackDirectionCoreSettings`:

<div className="api-used-in">

[`AgentAttackDirectionReactSettings.settings`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings), [`AgentAttackDirectionReactSettings.Settings`](/mod/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings-2), [`AttackDirectionCore.AttackDirectionCore`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-ctor), [`AttackDirectionCore.settings`](/mod/game-api/types/alta-intelligence/attackdirectioncore#m-settings), [`AttackDirectionReactAIHook.settings`](/mod/game-api/types/alta-intelligence/attackdirectionreactaihook#m-settings), [`HookAction.HookAction`](/mod/game-api/types/alta-intelligence/hookaction#m-ctor).

</div>
