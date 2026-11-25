---
title: "StatEffectShellAnimator"
description: "class StatEffectShellAnimator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatEffectShellAnimator

A **class** in `Root.Township`, `Alta.PlayerEffects`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`ShellAnimator`](/game-api/types/alta-player/shellanimator)
- **Nested types** [`ShellAnimationHandlerNode`](/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatEffectShellAnimator("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" character, Material shellMaterialSample)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colora" /><code>{"static readonly int _ColorA"}</code> |  |
| <Link id="m-colorb" /><code>{"static readonly int _ColorB"}</code> |  |
| <Link id="m-progress" /><code>{"static readonly int _Progress"}</code> |  |
| <Link id="m-speed" /><code>{"static readonly int _Speed"}</code> |  |
| <Link id="m-utile" /><code>{"static readonly int _UTile"}</code> |  |
| <Link id="m-vtile" /><code>{"static readonly int _VTile"}</code> |  |
| <Link id="m-wavealpha" /><code>{"static readonly int _WaveAlpha"}</code> |  |
| <Link id="m-wavecolor" /><code>{"static readonly int _WaveColor"}</code> |  |
| <Link id="m-wavetexture" /><code>{"static readonly int _WaveTexture"}</code> |  |
| <Link id="m-width" /><code>{"static readonly int _Width"}</code> |  |
| <Link id="m-animationqueue" /><code>{"private "}<Link to="/game-api/types/assembly-other/fastpriorityqueue-t">{"FastPriorityQueue"}</Link>{"<"}<Link to="/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode">{"StatEffectShellAnimator.ShellAnimationHandlerNode"}</Link>{"> animationQueue"}</code> |  |
| <Link id="m-currenthandler" /><code>{"private "}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" currentHandler"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currenthandler-2" /><code><Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" CurrentHandler { get; set; }"}</code> |  |
| <Link id="m-meshname" /><code>{"protected override string MeshName { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateshield" /><code><Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" AnimateShield("}<Link to="/game-api/types/alta-player/stateffectshellsetting">{"StatEffectShellSetting"}</Link>{" setting, float startProgress, float priority)"}</code> |  |
| <Link id="m-animatecurrenthandler" /><code>{"private void AnimateCurrentHandler()"}</code> |  |
| <Link id="m-followqueue" /><code>{"private void FollowQueue()"}</code> |  |
| <Link id="m-handlerdeactivated" /><code>{"private void HandlerDeactivated("}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{" handler)"}</code> |  |
| <Link id="m-returntocurrent" /><code>{"private void ReturnToCurrent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `StatEffectShellAnimator`:

[`ShellAnimationHandler.animator`](/game-api/types/alta-player/shellanimationhandler#m-animator), [`ShellAnimationHandler.ShellAnimationHandler`](/game-api/types/alta-player/shellanimationhandler#m-ctor), [`PlayerEffectManager.StatEffectApplication.shellAnimator`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-shellanimator), [`PlayerEffectManager.StatEffectApplication.StatEffectApplication`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-ctor), [`PlayerSpecialEffectsController.StatEffectShellAnimator`](/game-api/types/global-p/playerspecialeffectscontroller#m-stateffectshellanimator).
