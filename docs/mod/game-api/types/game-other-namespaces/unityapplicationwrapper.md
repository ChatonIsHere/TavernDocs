---
title: "UnityApplicationWrapper"
description: "Thin wrapper over UnityEngine.Application so code can be tested with a fake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# UnityApplicationWrapper

A **class** in `Root.Township`, `Features.Utility.UnityWrappers`.

Thin wrapper over `UnityEngine.Application` so code can be tested with a fake. Use the static `Instance`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IUnityApplicationWrapper`](/mod/game-api/types/game-other-namespaces/iunityapplicationwrapper), [`ITestUnityApplicationWrapper`](/mod/game-api/types/game-other-namespaces/itestunityapplicationwrapper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"UnityApplicationWrapper()"}</code> | Creates an `UnityApplicationWrapper` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instance" /><code>{"private static "}<Link to="/mod/game-api/types/game-other-namespaces/iunityapplicationwrapper">{"IUnityApplicationWrapper"}</Link>{" instance"}</code> | Backing field for `Instance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-instance-2" /><code>{"static "}<Link to="/mod/game-api/types/game-other-namespaces/iunityapplicationwrapper">{"IUnityApplicationWrapper"}</Link>{" Instance { get; }"}</code> | The shared wrapper, created on first use unless overridden. |
| <Link id="m-iseditor" /><code>{"bool IsEditor { get; }"}</code> | Whether the game is running in the Unity editor. |

## Methods

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-overrideinstance" /><code>{"private void Features.Utility.UnityWrappers.ITestUnityApplicationWrapper.OverrideInstance("}<Link to="/mod/game-api/types/game-other-namespaces/iunityapplicationwrapper">{"IUnityApplicationWrapper"}</Link>{" wrapper)"}</code> | Replaces the shared instance; reach it by casting to `ITestUnityApplicationWrapper`. |

</details>
