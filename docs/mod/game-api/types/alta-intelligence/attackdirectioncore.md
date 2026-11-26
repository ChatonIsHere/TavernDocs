---
title: "AttackDirectionCore"
description: "Drives an agent's attack-direction animations (a layer weight plus side and up directions) from where its target's attacks come from."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionCore

A **class** in `Root.Township`, `Alta.Intelligence`.

Drives an agent's attack-direction animations (a layer weight plus side and up directions) from where its target's attacks come from. Made by `AttackDirectionCoreSettings` and updated each frame.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionCore("}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Creates an `AttackDirectionCore` from `settings` and `topic`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastattackfade" /><code>{"private float lastAttackFade"}</code> | Real time until which the current direction is held after the last attack seen. |
| <Link id="m-layer" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" layer"}</code> | Animation that turns the attack-direction layer on or off. |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | The settings this core was made from. |
| <Link id="m-side" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" side"}</code> | Animation for a left or right attack direction. |
| <Link id="m-up" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" up"}</code> | Animation for an attack coming from above. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Disables the three animations and clears the agent's target facing if the settings made it face the target. |
| <Link id="m-update" /><code>{"void Update("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Finds the target's strongest attack above the minimum damage and sets the side or up direction from where it comes. Fades back to neutral half a second after attacks stop. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation("}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | Makes the animation for one settings entry on the agent's network animator, or an empty one if the entry is unset. |

</details>

## Used in

Members of other types that take, return or hold a `AttackDirectionCore`:

[`ActiveAttackDirectionReact.core`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact#m-core), [`AttackDirectionCoreSettings.GetCore`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-getcore), [`HookAction.core`](/mod/game-api/types/alta-intelligence/hookaction#m-core).
