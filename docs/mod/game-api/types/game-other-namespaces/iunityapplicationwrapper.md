---
title: "IUnityApplicationWrapper"
description: "Wraps Unity's Application so tests can swap it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IUnityApplicationWrapper

An **interface** in `Root.Township`, `Features.Utility.UnityWrappers`.

Wraps Unity's `Application` so tests can swap it. Get it from `UnityApplicationWrapper.Instance`.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`UnityApplicationWrapper`](/mod/game-api/types/game-other-namespaces/unityapplicationwrapper)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-iseditor" /><code>{"bool IsEditor { get; }"}</code> | Whether the game is running in the Unity editor. |

## Used in

Members of other types that take, return or hold a `IUnityApplicationWrapper`:

[`ITestUnityApplicationWrapper.OverrideInstance`](/mod/game-api/types/game-other-namespaces/itestunityapplicationwrapper#m-overrideinstance), [`UnityApplicationWrapper.instance`](/mod/game-api/types/game-other-namespaces/unityapplicationwrapper#m-instance), [`UnityApplicationWrapper.Instance`](/mod/game-api/types/game-other-namespaces/unityapplicationwrapper#m-instance-2), [`UnityApplicationWrapper.OverrideInstance`](/mod/game-api/types/game-other-namespaces/unityapplicationwrapper#m-overrideinstance).
