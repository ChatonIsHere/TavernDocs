---
title: "ModBase"
description: "Old in-game base class for a mod component: subclass it, add it to a GameObject, and it calls Initialize on start and Terminate on destroy, logging each."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModBase

An **abstract class** in `Root.Township`, the global namespace.

Old in-game base class for a mod component: subclass it, add it to a GameObject, and it calls `Initialize` on start and `Terminate` on destroy, logging each. Used by the game's own debug mods such as `FixMod`.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`ControllerMod`](/mod/game-api/types/global-c-d/controllermod), [`FixMod`](/mod/game-api/types/global-e-h/fixmod)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ModBase()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"abstract string Name { get; }"}</code> | <span className="api-desc">Display name used in the load and unload log lines.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"protected abstract void Initialize()"}</code> | <span className="api-desc">Your mod's setup. If it throws, the error is logged and the component destroys itself.</span> |
| <Link id="m-ondestroy" /><code>{"protected void OnDestroy()"}</code> | <span className="api-desc">Calls `Terminate` and logs that the mod unloaded, or logs the error.</span> |
| <Link id="m-start" /><code>{"protected void Start()"}</code> | <span className="api-desc">Destroys any other component on the GameObject with the same type name (a reload), then calls `Initialize`.</span> |
| <Link id="m-terminate" /><code>{"protected abstract void Terminate()"}</code> | <span className="api-desc">Your mod's cleanup, called when the component is destroyed.</span> |
