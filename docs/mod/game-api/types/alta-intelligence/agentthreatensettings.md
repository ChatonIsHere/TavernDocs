---
title: "AgentThreatenSettings"
description: "Settings for ActiveThreaten: face the target for a random time, switching to another action set if it comes close and cancelling if it goes far."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentThreatenSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Settings for `ActiveThreaten`: face the target for a random time, switching to another action set if it comes close and cancelling if it goes far. Server only.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveThreaten`](/mod/game-api/types/alta-intelligence/activethreaten)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentThreatenSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canceldistance" /><code>{"private float cancelDistance"}</code> | <span className="api-desc">Backing field for `CancelDistance` (default 10).</span> |
| <Link id="m-changeto" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" changeTo"}</code> | <span className="api-desc">Backing field for `ChangeTo`.</span> |
| <Link id="m-instantdistance" /><code>{"private float instantDistance"}</code> | <span className="api-desc">Backing field for `InstantDistance` (default 0).</span> |
| <Link id="m-isfacing" /><code>{"private bool isFacing"}</code> | <span className="api-desc">Backing field for `IsFacing` (default true).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canceldistance-2" /><code>{"float CancelDistance { get; }"}</code> | <span className="api-desc">The action cancels when the target is further than this.</span> |
| <Link id="m-changeto-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" ChangeTo { get; }"}</code> | <span className="api-desc">Action set the creature switches to when the action finishes, whether by timeout or the target coming within `InstantDistance`.</span> |
| <Link id="m-instantdistance-2" /><code>{"float InstantDistance { get; }"}</code> | <span className="api-desc">The action finishes at once when the target comes closer than this.</span> |
| <Link id="m-isfacing-2" /><code>{"bool IsFacing { get; }"}</code> | <span className="api-desc">Whether the creature turns to face the target while threatening.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Builds the shared `ActiveThreaten` action, which uses a target.</span> |
