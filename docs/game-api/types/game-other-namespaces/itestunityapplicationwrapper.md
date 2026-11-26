---
title: "ITestUnityApplicationWrapper"
description: "Test hook for swapping the UnityApplicationWrapper singleton for a fake."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ITestUnityApplicationWrapper

An **interface** in `Root.Township`, `Features.Utility.UnityWrappers`.

Test hook for swapping the `UnityApplicationWrapper` singleton for a fake.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Derived types** [`UnityApplicationWrapper`](/game-api/types/game-other-namespaces/unityapplicationwrapper)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-overrideinstance" /><code>{"void OverrideInstance("}<Link to="/game-api/types/game-other-namespaces/iunityapplicationwrapper">{"IUnityApplicationWrapper"}</Link>{" wrapper)"}</code> | Replaces the shared `IUnityApplicationWrapper` instance. |
