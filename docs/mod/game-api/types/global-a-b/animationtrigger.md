---
title: "AnimationTrigger"
description: "Fires inspector events when the object is enabled or disabled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimationTrigger

A **class** in `Root.Township`, the global namespace.

Fires inspector events when the object is enabled or disabled. The disable event is skipped while the game is quitting.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimationTrigger()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onDisable"}</code> | <span className="api-desc">Backing field for `Disabled`.</span> |
| <Link id="m-onenable" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onEnable"}</code> | <span className="api-desc">Backing field for `Enabled`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-disabled" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Disabled { get; }"}</code> | <span className="api-desc">Event fired on disable (not while quitting).</span> |
| <Link id="m-enabled" /><code><Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" Enabled { get; }"}</code> | <span className="api-desc">Event fired on enable.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondisable-2" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Invokes `onDisable` unless the application is quitting.</span> |
| <Link id="m-onenable-2" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Invokes `onEnable`.</span> |

</details>
