---
title: "CharacterComponentHelper<T>"
description: "Base for editor helper scripts that sit next to a CharacterComponentController of type T."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterComponentHelper&lt;T&gt;

An **abstract class** in `Root.Township`, `Alta.Character`.

Base for editor helper scripts that sit next to a `CharacterComponentController` of type `T`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`ScriptHelper`](/mod/game-api/types/alta-utilities/scripthelper)
- **Derived types** [`ArmIKControllerHelper`](/mod/game-api/types/alta-player/armikcontrollerhelper), [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper), [`NeckIKControllerHelper`](/mod/game-api/types/alta-player/neckikcontrollerhelper), [`ShoulderTwistControllerHelper`](/mod/game-api/types/alta-player/shouldertwistcontrollerhelper), [`TwistRelaxerControllerHelper`](/mod/game-api/types/alta-player/twistrelaxercontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected CharacterComponentHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-componentcontroller" /><code>{"private T componentController"}</code> | Cached `T` component on the same object, filled on first use of `ComponentController`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-componentcontroller-2" /><code>{"protected T ComponentController { get; }"}</code> | The `T` component on the same object, found on first use. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidate" /><code>{"protected abstract void OnValidate()"}</code> | Editor validation hook each helper must implement. |
