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
| <Link id="m-ctor" /><code>{"AgentCrawlSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius" /><code>{"private float colliderRadius"}</code> | Backing field for `ColliderRadius`: radius used for crawl surface and obstacle checks. |
| <Link id="m-collisioncheck" /><code>{"private LayerMask collisionCheck"}</code> | Backing field for `CollisionCheck`: layers that block the crawl. |
| <Link id="m-raycasteveryxframes" /><code>{"private int raycastEveryXFrames"}</code> | Backing field for `RaycastEveryXFrames`: how many frames between surface raycasts. |
| <Link id="m-recoverfromfalling" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" recoverFromFalling"}</code> | Backing field for `RecoverFromFalling`: action set used when the crawler loses the surface. |
| <Link id="m-uprightrotationspeed" /><code>{"private float uprightRotationSpeed"}</code> | Backing field for `UprightRotationSpeed`. |
| <Link id="m-walkingspeed" /><code>{"private float walkingSpeed"}</code> | Backing field for `WalkingSpeed`. |
| <Link id="m-walkon" /><code>{"private LayerMask walkOn"}</code> | Backing field for `WalkOn`: layers the agent can crawl on. |
| <Link id="m-walkrotationspeed" /><code>{"private float walkRotationSpeed"}</code> | Backing field for `WalkRotationSpeed`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius-2" /><code>{"float ColliderRadius { get; }"}</code> | Radius used for the surface and collision checks around the body. |
| <Link id="m-collisioncheck-2" /><code>{"LayerMask CollisionCheck { get; }"}</code> | Layers that block the crawl. |
| <Link id="m-raycasteveryxframes-2" /><code>{"int RaycastEveryXFrames { get; }"}</code> | How many frames between the forward surface raycasts. |
| <Link id="m-recoverfromfalling-2" /><code><Link to="/mod/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" RecoverFromFalling { get; }"}</code> | Action set switched to when the creature loses the surface, if set. |
| <Link id="m-uprightrotationspeed-2" /><code>{"float UprightRotationSpeed { get; }"}</code> | How fast it turns to match the surface. |
| <Link id="m-walkingspeed-2" /><code>{"float WalkingSpeed { get; }"}</code> | Crawl speed in metres per second. |
| <Link id="m-walkon-2" /><code>{"LayerMask WalkOn { get; }"}</code> | Layers it can crawl on. |
| <Link id="m-walkrotationspeed-2" /><code>{"float WalkRotationSpeed { get; }"}</code> | How fast it turns while walking. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Creates the `ActiveCrawl` action without a target. |
