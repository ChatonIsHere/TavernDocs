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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShellAnimationHandler("}<Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting, "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" curve, float targetProgress, float priority, "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" animator)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-deactivated" /><code>{"Action<"}<Link to="/game-api/types/alta-player/shellanimationhandler">{"ShellAnimationHandler"}</Link>{"> Deactivated"}</code> | Called when `Deactivate` runs. |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-player/stateffectshellanimator">{"StatEffectShellAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-setting" /><code>{"private "}<Link to="/game-api/types/alta-player/shellsetting">{"ShellSetting"}</Link>{" setting"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-curve" /><code><Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" Curve { get; }"}</code> | Timing curve for animating to `TargetProgress`. |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True until `Deactivate` is called. |
| <Link id="m-priority" /><code>{"float Priority { get; }"}</code> | Queue priority in the animator. |
| <Link id="m-targetprogress" /><code>{"float TargetProgress { get; }"}</code> | Shell progress to animate to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | Marks it inactive and calls `Deactivated` so the animator moves on. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial()"}</code> | Applies this request's shell setting to the animator's shell material, if not already current. |

## Used in

Members of other types that take, return or hold a `ShellAnimationHandler`:

[`StatEffectShellAnimator.AnimateShield`](/game-api/types/alta-player/stateffectshellanimator#m-animateshield), [`StatEffectShellAnimator.currentHandler`](/game-api/types/alta-player/stateffectshellanimator#m-currenthandler), [`StatEffectShellAnimator.CurrentHandler`](/game-api/types/alta-player/stateffectshellanimator#m-currenthandler-2), [`StatEffectShellAnimator.HandlerDeactivated`](/game-api/types/alta-player/stateffectshellanimator#m-handlerdeactivated), [`StatEffectShellAnimator.ShellAnimationHandlerNode.Handler`](/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode#m-handler), [`StatEffectShellAnimator.ShellAnimationHandlerNode.ShellAnimationHandlerNode`](/game-api/types/alta-player/stateffectshellanimator-shellanimationhandlernode#m-ctor), [`PlayerEffectManager.StatEffectApplication.handler`](/game-api/types/global-p/playereffectmanager-stateffectapplication#m-handler).
