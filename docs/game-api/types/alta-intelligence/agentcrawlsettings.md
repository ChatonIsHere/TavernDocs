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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`RandomTimedActionComponent`](/game-api/types/alta-intelligence/randomtimedactioncomponent)
- **Derived types** [`ActiveCrawl`](/game-api/types/alta-intelligence/activecrawl)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AgentCrawlSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius" /><code>{"private float colliderRadius"}</code> |  |
| <Link id="m-collisioncheck" /><code>{"private LayerMask collisionCheck"}</code> |  |
| <Link id="m-raycasteveryxframes" /><code>{"private int raycastEveryXFrames"}</code> |  |
| <Link id="m-recoverfromfalling" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" recoverFromFalling"}</code> |  |
| <Link id="m-uprightrotationspeed" /><code>{"private float uprightRotationSpeed"}</code> |  |
| <Link id="m-walkingspeed" /><code>{"private float walkingSpeed"}</code> |  |
| <Link id="m-walkon" /><code>{"private LayerMask walkOn"}</code> |  |
| <Link id="m-walkrotationspeed" /><code>{"private float walkRotationSpeed"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderradius-2" /><code>{"float ColliderRadius { get; }"}</code> | Radius used for the surface and collision checks around the body. |
| <Link id="m-collisioncheck-2" /><code>{"LayerMask CollisionCheck { get; }"}</code> | Layers that block the crawl. |
| <Link id="m-raycasteveryxframes-2" /><code>{"int RaycastEveryXFrames { get; }"}</code> | How many frames between the forward surface raycasts. |
| <Link id="m-recoverfromfalling-2" /><code><Link to="/game-api/types/alta-intelligence/actioncomponentset">{"ActionComponentSet"}</Link>{" RecoverFromFalling { get; }"}</code> | Action set switched to when the creature loses the surface, if set. |
| <Link id="m-uprightrotationspeed-2" /><code>{"float UprightRotationSpeed { get; }"}</code> | How fast it turns to match the surface. |
| <Link id="m-walkingspeed-2" /><code>{"float WalkingSpeed { get; }"}</code> | Crawl speed in metres per second. |
| <Link id="m-walkon-2" /><code>{"LayerMask WalkOn { get; }"}</code> | Layers it can crawl on. |
| <Link id="m-walkrotationspeed-2" /><code>{"float WalkRotationSpeed { get; }"}</code> | How fast it turns while walking. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Creates the `ActiveCrawl` action without a target. |
