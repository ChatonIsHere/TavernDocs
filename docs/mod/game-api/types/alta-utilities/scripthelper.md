---
title: "ScriptHelper"
description: "Base for helper components that only matter in the editor."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScriptHelper

An **abstract class** in `Root.Township`, `Alta.Utilities`.

Base for helper components that only matter in the editor. It destroys itself in `Awake`, so it never runs in game.

- **Listed in** [Utilities and other Alta namespaces](/mod/game-api/types/alta-utilities)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`CharacterComponentHelper<T>`](/mod/game-api/types/alta-player/charactercomponenthelper-t), [`SpineIKHelper`](/mod/game-api/types/alta-player/spineikhelper), [`CharacterShellHelper`](/mod/game-api/types/global-c-d/charactershellhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ScriptHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Destroys this component. |
