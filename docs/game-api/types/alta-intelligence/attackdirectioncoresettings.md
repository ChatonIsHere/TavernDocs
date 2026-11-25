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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AttackDirectionCoreSettings()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-animationchangeduration" /><code>{"private float animationChangeDuration"}</code> |
| <Link id="m-height" /><code>{"private float height"}</code> |
| <Link id="m-isfacingtarget" /><code>{"private bool isFacingTarget"}</code> |
| <Link id="m-layer" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" layer"}</code> |
| <Link id="m-mindamage" /><code>{"private float minDamage"}</code> |
| <Link id="m-side" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" side"}</code> |
| <Link id="m-up" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" up"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animationchangeduration-2" /><code>{"float AnimationChangeDuration { get; }"}</code> | Seconds to blend the direction animations to a new value. |
| <Link id="m-height-2" /><code>{"float Height { get; }"}</code> | Height above the target's ground position used as the reference point for attack directions. |
| <Link id="m-isfacingtarget-2" /><code>{"bool IsFacingTarget { get; }"}</code> | If true the creature turns to face its target while the core runs. |
| <Link id="m-layer-2" /><code><Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Layer { get; }"}</code> | Animation switched on whenever an attack above `MinDamage` is seen. |
| <Link id="m-mindamage-2" /><code>{"float MinDamage { get; }"}</code> | Target attacks with damage below this are ignored. |
| <Link id="m-side-2" /><code><Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Side { get; }"}</code> | Animation set left or right for attacks from the side. |
| <Link id="m-up-2" /><code><Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" Up { get; }"}</code> | Animation set for attacks from above. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcore" /><code><Link to="/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" GetCore("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Creates an `AttackDirectionCore` for the agent, which drives the three animations each update. |

## Used in

Members of other types that take, return or hold a `AttackDirectionCoreSettings`:

[`AgentAttackDirectionReactSettings.settings`](/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings), [`AgentAttackDirectionReactSettings.Settings`](/game-api/types/alta-intelligence/agentattackdirectionreactsettings#m-settings-2), [`AttackDirectionCore.AttackDirectionCore`](/game-api/types/alta-intelligence/attackdirectioncore#m-ctor), [`AttackDirectionCore.settings`](/game-api/types/alta-intelligence/attackdirectioncore#m-settings), [`AttackDirectionReactAIHook.settings`](/game-api/types/alta-intelligence/attackdirectionreactaihook#m-settings), [`HookAction.HookAction`](/game-api/types/alta-intelligence/hookaction#m-ctor).
