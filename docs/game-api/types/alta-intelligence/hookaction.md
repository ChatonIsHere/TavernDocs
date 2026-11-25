---
title: "HookAction"
description: "struct HookAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HookAction

A **internal struct** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"HookAction("}<Link to="/game-api/types/alta-intelligence/attackdirectioncoresettings">{"AttackDirectionCoreSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic)"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-core" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/attackdirectioncore">{"AttackDirectionCore"}</Link>{" core"}</code> |
| <Link id="m-topic" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/iagent">{"IAgent"}</Link>{" topic"}</code> |
| <Link id="m-updateaction" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateAction"}</code> |
| <Link id="m-updatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" updateModule"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-disable" /><code>{"void Disable()"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `HookAction`:

[`AttackDirectionReactAIHook.actions`](/game-api/types/alta-intelligence/attackdirectionreactaihook#m-actions).
