---
title: "ControllerMod"
description: "Base for a developer debug mod that runs when ModHands fires, which happens on the DebugMod action while grab is held, only for users with debug_features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ControllerMod

An **abstract class** in `Root.Township`, no namespace.

Base for a developer debug mod that runs when `ModHands` fires, which happens on the DebugMod action while grab is held, only for users with `debug_features`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`ModBase`](/game-api/types/global-m-o/modbase)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ControllerMod()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected override void Initialize()"}</code> | Hooks `ModHands.ModCalled`. |
| <Link id="m-runmod" /><code>{"protected abstract void RunMod("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | The mod's action, given the controller that triggered it. |
| <Link id="m-terminate" /><code>{"protected override void Terminate()"}</code> | Unhooks `ModHands.ModCalled`. |
