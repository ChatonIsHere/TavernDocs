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
| <Link id="m-ctor" /><code>{"AttackDirectionCore("}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Creates an `AttackDirectionCore` from `settings` and `topic`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastattackfade" /><code>{"private float lastAttackFade"}</code> | <span className="api-desc">Real time until which the current direction is held after the last attack seen.</span> |
| <Link id="m-layer" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" layer"}</code> | <span className="api-desc">Animation that turns the attack-direction layer on or off.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> | <span className="api-desc">The settings this core was made from.</span> |
| <Link id="m-side" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" side"}</code> | <span className="api-desc">Animation for a left or right attack direction.</span> |
| <Link id="m-up" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" up"}</code> | <span className="api-desc">Animation for an attack coming from above.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Disables the three animations and clears the agent's target facing if the settings made it face the target.</span> |
| <Link id="m-update" /><code>{"void Update("}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Finds the target's strongest attack above the minimum damage and sets the side or up direction from where it comes. Fades back to neutral half a second after attacks stop.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getanimation" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation("}<Link to="/mod/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> | <span className="api-desc">Makes the animation for one settings entry on the agent's network animator, or an empty one if the entry is unset.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AttackDirectionCore`:

<div className="api-used-in">

[`ActiveAttackDirectionReact.core`](/mod/game-api/types/alta-intelligence/activeattackdirectionreact#m-core), [`AttackDirectionCoreSettings.GetCore`](/mod/game-api/types/alta-intelligence/attackdirectioncoresettings#m-getcore), [`HookAction.core`](/mod/game-api/types/alta-intelligence/hookaction#m-core).

</div>
