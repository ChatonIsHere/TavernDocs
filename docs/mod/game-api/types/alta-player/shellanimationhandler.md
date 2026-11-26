---
title: "ShellAnimationHandler"
description: "One request to show a shell effect on a player through StatEffectShellAnimator, which queues requests by priority."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShellAnimationHandler

A **class** in `Root.Township`, `Alta.PlayerEffects`.

One request to show a shell effect on a player through `StatEffectShellAnimator`, which queues requests by priority.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShellAnimationHandler("}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting, "}<Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve, float targetProgress, float priority, "}<Link to="/mod/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" animator)"}</code> | <span className="api-desc">Creates a `ShellAnimationHandler` from `setting`, `curve`, `targetProgress`, `priority` and `animator`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-deactivated" /><code>{"Action<"}<Link to="/mod/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{"> Deactivated"}</code> | <span className="api-desc">Called when `Deactivate` runs.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" animator"}</code> | <span className="api-desc">The shell animator whose material this handler sets.</span> |
| <Link id="m-setting" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting"}</code> | <span className="api-desc">The shell setting applied to the animator's material by `SetMaterial`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code><Link to="/mod/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" Curve { get; }"}</code> | <span className="api-desc">Timing curve for animating to `TargetProgress`.</span> |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True until `Deactivate` is called.</span> |
| <Link id="m-priority" /><code>{"float Priority { get; }"}</code> | <span className="api-desc">Queue priority in the animator.</span> |
| <Link id="m-targetprogress" /><code>{"float TargetProgress { get; }"}</code> | <span className="api-desc">Shell progress to animate to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | <span className="api-desc">Marks it inactive and calls `Deactivated` so the animator moves on.</span> |
| <Link id="m-setmaterial" /><code>{"void SetMaterial()"}</code> | <span className="api-desc">Applies this request's shell setting to the animator's shell material, if not already current.</span> |

## Used in

Members of other types that take, return or hold a `ShellAnimationHandler`:

<div className="api-used-in">

[`StatEffectShellAnimator.AnimateShield`](/mod/game-api/types/alta-player/stateffectshellanimator#m-animateshield), [`StatEffectShellAnimator.currentHandler`](/mod/game-api/types/alta-player/stateffectshellanimator#m-currenthandler), [`StatEffectShellAnimator.CurrentHandler`](/mod/game-api/types/alta-player/stateffectshellanimator#m-currenthandler-2), [`StatEffectShellAnimator.HandlerDeactivated`](/mod/game-api/types/alta-player/stateffectshellanimator#m-handlerdeactivated), [`StatEffectShellAnimator.ShellAnimationHandlerNode.Handler`](/mod/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode#m-handler), [`StatEffectShellAnimator.ShellAnimationHandlerNode.ShellAnimationHandlerNode`](/mod/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode#m-ctor), [`PlayerEffectManager.StatEffectApplication.handler`](/mod/game-api/types/global-p/playereffectmanager-stateffectapplication#m-handler).

</div>
