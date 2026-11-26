---
title: "ControllerMod"
description: "Base for a developer debug mod that runs when ModHands fires, which happens on the DebugMod action while grab is held, only for users with debug_features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerMod

An **abstract class** in `Root.Township`, the global namespace.

Base for a developer debug mod that runs when `ModHands` fires, which happens on the DebugMod action while grab is held, only for users with `debug_features`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`ModBase`](/mod/game-api/types/global-m-o/modbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControllerMod()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | <span className="api-desc">Hooks `ModHands.ModCalled`.</span> |
| <Link id="m-runmod" /><code>{"protected abstract void RunMod("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">The mod's action, given the controller that triggered it.</span> |
| <Link id="m-terminate" /><code>{"protected override void Terminate()"}</code> | <span className="api-desc">Unhooks `ModHands.ModCalled`.</span> |
