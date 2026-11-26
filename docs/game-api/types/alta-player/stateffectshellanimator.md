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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ShellAnimator`](/game-api/types/alta-player/shellanimator)
- **Nested types** [`ShellAnimationHandlerNode`](/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatEffectShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"static readonly int _ColorA"}</code> | Shader ID of `_ColorA`. |
| <Link id="m-colorb" /><code>{"static readonly int _ColorB"}</code> | Shader ID of `_ColorB`. |
| <Link id="m-progress" /><code>{"static readonly int _Progress"}</code> | Shader ID of `_Progress`. |
| <Link id="m-speed" /><code>{"static readonly int _Speed"}</code> | Shader ID of `_Speed`. |
| <Link id="m-utile" /><code>{"static readonly int _UTile"}</code> | Shader ID of `_UTile`. |
| <Link id="m-vtile" /><code>{"static readonly int _VTile"}</code> | Shader ID of `_VTile`. |
| <Link id="m-wavealpha" /><code>{"static readonly int _WaveAlpha"}</code> | Shader ID of `_WaveAlpha`. |
| <Link id="m-wavecolor" /><code>{"static readonly int _WaveColor"}</code> | Shader ID of `_WaveColor`. |
| <Link id="m-wavetexture" /><code>{"static readonly int _WaveTexture"}</code> | Shader ID of `_WaveTexture`. |
| <Link id="m-width" /><code>{"static readonly int _Width"}</code> | Shader ID of `_Width`. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationqueue" /><code>{"private "}<Link to="/game-api/types/assembly-other/fastpriorityqueue-t">{"FastPriorityQueue"}</Link>{"<"}<Link to="/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode">{"StatEffectShellAnimator.ShellAnimationHandlerNode"}</Link>{"> animationQueue"}</code> | Waiting shell effects, ordered by priority (lower value first). |
| <Link id="m-currenthandler" /><code>{"private "}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" currentHandler"}</code> | The shell effect being shown. Backing field for `CurrentHandler`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenthandler-2" /><code><Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" CurrentHandler { get; set; }"}</code> | The shield being shown. |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> | "_Stat EffectS Shell". |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateshield" /><code><Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" AnimateShield("}<Link to="/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" setting, float startProgress, float priority)"}</code> | Asks for a shield with a setting and priority (higher shows first). It plays now or queues; the returned handler ends it. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatecurrenthandler" /><code>{"private void AnimateCurrentHandler()"}</code> | Starts the current handler's expand animation, or queues it by priority if another animation is running. |
| <Link id="m-followqueue" /><code>{"private void FollowQueue()"}</code> | Takes the next still-active handler off the queue and animates it; clears the current handler if none is left. |
| <Link id="m-handlerdeactivated" /><code>{"private void HandlerDeactivated("}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler)"}</code> | When the current handler ends, animates the shell back out and then moves on to the queue. |
| <Link id="m-returntocurrent" /><code>{"private void ReturnToCurrent()"}</code> | Re-animates the current handler if still active, otherwise follows the queue. |

</details>

## Used in

Members of other types that take, return or hold a `StatEffectShellAnimator`:

[`ShellAnimationHandler.animator`](/game-api/types/alta-player/shellanimationhandler#m-animator), [`ShellAnimationHandler.ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler#m-ctor), [`PlayerEffectManager.StatEffectApplication.shellAnimator`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-shellanimator), [`PlayerEffectManager.StatEffectApplication.StatEffectApplication`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-ctor), [`PlayerSpecialEffectsController.StatEffectShellAnimator`](/game-api/types/global-p/playerspecialeffectscontroller#m-stateffectshellanimator).
