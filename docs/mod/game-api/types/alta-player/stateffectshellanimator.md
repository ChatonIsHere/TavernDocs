---
title: "StatEffectShellAnimator"
description: "Client: the shell animator for stat effect shields around a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectShellAnimator

A **class** in `Root.Township`, `Alta.PlayerEffects`.

Client: the shell animator for stat effect shields around a player. Several shields can be asked for at once; the highest priority shows and the rest wait in a queue.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ShellAnimator`](/mod/game-api/types/alta-player/shellanimator)
- **Nested types** [`ShellAnimationHandlerNode`](/mod/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectShellAnimator("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> | <span className="api-desc">Creates a `StatEffectShellAnimator` from `character` and `shellMaterialSample`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"static readonly int _ColorA"}</code> | <span className="api-desc">Shader ID of `_ColorA`.</span> |
| <Link id="m-colorb" /><code>{"static readonly int _ColorB"}</code> | <span className="api-desc">Shader ID of `_ColorB`.</span> |
| <Link id="m-progress" /><code>{"static readonly int _Progress"}</code> | <span className="api-desc">Shader ID of `_Progress`.</span> |
| <Link id="m-speed" /><code>{"static readonly int _Speed"}</code> | <span className="api-desc">Shader ID of `_Speed`.</span> |
| <Link id="m-utile" /><code>{"static readonly int _UTile"}</code> | <span className="api-desc">Shader ID of `_UTile`.</span> |
| <Link id="m-vtile" /><code>{"static readonly int _VTile"}</code> | <span className="api-desc">Shader ID of `_VTile`.</span> |
| <Link id="m-wavealpha" /><code>{"static readonly int _WaveAlpha"}</code> | <span className="api-desc">Shader ID of `_WaveAlpha`.</span> |
| <Link id="m-wavecolor" /><code>{"static readonly int _WaveColor"}</code> | <span className="api-desc">Shader ID of `_WaveColor`.</span> |
| <Link id="m-wavetexture" /><code>{"static readonly int _WaveTexture"}</code> | <span className="api-desc">Shader ID of `_WaveTexture`.</span> |
| <Link id="m-width" /><code>{"static readonly int _Width"}</code> | <span className="api-desc">Shader ID of `_Width`.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationqueue" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/fastpriorityqueue-t">{"FastPriorityQueue"}</Link>{"<"}<Link to="/mod/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode">{"StatEffectShellAnimator.ShellAnimationHandlerNode"}</Link>{"> animationQueue"}</code> | <span className="api-desc">Waiting shell effects, ordered by priority (lower value first).</span> |
| <Link id="m-currenthandler" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" currentHandler"}</code> | <span className="api-desc">The shell effect being shown. Backing field for `CurrentHandler`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenthandler-2" /><code><Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" CurrentHandler { get; set; }"}</code> | <span className="api-desc">The shield being shown.</span> |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | <span className="api-desc">"_Stat EffectS Shell".</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateshield" /><code><Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" AnimateShield("}<Link to="/mod/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" setting, float startProgress, float priority)"}</code> | <span className="api-desc">Asks for a shield with a setting and priority (higher shows first). It plays now or queues; the returned handler ends it.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatecurrenthandler" /><code>{"private void AnimateCurrentHandler()"}</code> | <span className="api-desc">Starts the current handler's expand animation, or queues it by priority if another animation is running.</span> |
| <Link id="m-followqueue" /><code>{"private void FollowQueue()"}</code> | <span className="api-desc">Takes the next still-active handler off the queue and animates it; clears the current handler if none is left.</span> |
| <Link id="m-handlerdeactivated" /><code>{"private void HandlerDeactivated("}<Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">When the current handler ends, animates the shell back out and then moves on to the queue.</span> |
| <Link id="m-returntocurrent" /><code>{"private void ReturnToCurrent()"}</code> | <span className="api-desc">Re-animates the current handler if still active, otherwise follows the queue.</span> |

</details>

## Used in

Members of other types that take, return or hold a `StatEffectShellAnimator`:

<div className="api-used-in">

[`ShellAnimationHandler.animator`](/mod/game-api/types/alta-player/shellanimationhandler#m-animator), [`ShellAnimationHandler.ShellAnimationHandler`](/mod/game-api/types/alta-player/shellanimationhandler#m-ctor), [`PlayerEffectManager.StatEffectApplication.shellAnimator`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication#m-shellanimator), [`PlayerEffectManager.StatEffectApplication.StatEffectApplication`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication#m-ctor), [`PlayerSpecialEffectsController.StatEffectShellAnimator`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-stateffectshellanimator).

</div>
