---
title: "AttackDirectionCore"
description: "class AttackDirectionCore in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttackDirectionCore

A **class** in `Root.Township`, `Alta.Intelligence`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AttackDirectionCore("}<Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-lastattackfade" /><code>{"private float lastAttackFade"}</code> |  |
| <Link id="m-layer" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" layer"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-side" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" side"}</code> |  |
| <Link id="m-up" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" up"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-disable" /><code>{"void Disable("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |
| <Link id="m-update" /><code>{"void Update("}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |
| <Link id="m-getanimation" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iattackdirectionanimation">{"IAttackDirectionAnimation"}</Link>{" GetAnimation("}<Link to="/game-api/types/alta-intelligence/attackdirectionanimationsettings">{"AttackDirectionAnimationSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AttackDirectionCore`:

[`ActiveAttackDirectionReact.core`](/game-api/types/alta-intelligence/activeattackdirectionreact#m-core), [`AttackDirectionCoreSettings.GetCore`](/game-api/types/alta-intelligence/attackdirectioncoresettings#m-getcore), [`HookAction.core`](/game-api/types/alta-intelligence/hookaction#m-core).
