---
title: "AgentCrawlSettings"
description: "Action settings for a creature crawling over surfaces for a random duration (ActiveCrawl)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AgentCrawlSettings

A **class** in `Root.Township`, `Alta.Intelligence`.

Action settings for a creature crawling over surfaces for a random duration (`ActiveCrawl`). Sits under an action set on the creature prefab.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/mod/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveCrawl`](/mod/game-api/types/alta-intelligence/activecrawl)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCrawlSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius" /><code>{"private float colliderRadius"}</code> | <span className="api-desc">Backing field for `ColliderRadius`: radius used for crawl surface and obstacle checks.</span> |
| <Link id="m-collisioncheck" /><code>{"private LayerMask collisionCheck"}</code> | <span className="api-desc">Backing field for `CollisionCheck`: layers that block the crawl.</span> |
| <Link id="m-raycasteveryxframes" /><code>{"private int raycastEveryXFrames"}</code> | <span className="api-desc">Backing field for `RaycastEveryXFrames`: how many frames between surface raycasts.</span> |
| <Link id="m-recoverfromfalling" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" recoverFromFalling"}</code> | <span className="api-desc">Backing field for `RecoverFromFalling`: action set used when the crawler loses the surface.</span> |
| <Link id="m-uprightrotationspeed" /><code>{"private float uprightRotationSpeed"}</code> | <span className="api-desc">Backing field for `UprightRotationSpeed`.</span> |
| <Link id="m-walkingspeed" /><code>{"private float walkingSpeed"}</code> | <span className="api-desc">Backing field for `WalkingSpeed`.</span> |
| <Link id="m-walkon" /><code>{"private LayerMask walkOn"}</code> | <span className="api-desc">Backing field for `WalkOn`: layers the agent can crawl on.</span> |
| <Link id="m-walkrotationspeed" /><code>{"private float walkRotationSpeed"}</code> | <span className="api-desc">Backing field for `WalkRotationSpeed`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius-2" /><code>{"float ColliderRadius { get; }"}</code> | <span className="api-desc">Radius used for the surface and collision checks around the body.</span> |
| <Link id="m-collisioncheck-2" /><code>{"LayerMask CollisionCheck { get; }"}</code> | <span className="api-desc">Layers that block the crawl.</span> |
| <Link id="m-raycasteveryxframes-2" /><code>{"int RaycastEveryXFrames { get; }"}</code> | <span className="api-desc">How many frames between the forward surface raycasts.</span> |
| <Link id="m-recoverfromfalling-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" RecoverFromFalling { get; }"}</code> | <span className="api-desc">Action set switched to when the creature loses the surface, if set.</span> |
| <Link id="m-uprightrotationspeed-2" /><code>{"float UprightRotationSpeed { get; }"}</code> | <span className="api-desc">How fast it turns to match the surface.</span> |
| <Link id="m-walkingspeed-2" /><code>{"float WalkingSpeed { get; }"}</code> | <span className="api-desc">Crawl speed in metres per second.</span> |
| <Link id="m-walkon-2" /><code>{"LayerMask WalkOn { get; }"}</code> | <span className="api-desc">Layers it can crawl on.</span> |
| <Link id="m-walkrotationspeed-2" /><code>{"float WalkRotationSpeed { get; }"}</code> | <span className="api-desc">How fast it turns while walking.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Creates the `ActiveCrawl` action without a target.</span> |
