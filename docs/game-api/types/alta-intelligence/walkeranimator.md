---
title: "WalkerAnimator"
description: "Sets animator values from Walker.Updated."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WalkerAnimator

A **class** in `Root.Township`, `Alta.Pathfinding`.

Sets animator values from `Walker.Updated`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** `MonoBehaviour`
- **Documented in** [Movement and pathfinding](/game-api/creatures/movement-and-pathfinding)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WalkerAnimator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator"}</code> |  |
| <Link id="m-forwardspeed" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" forwardSpeed"}</code> |  |
| <Link id="m-forwardspeedname" /><code>{"private string forwardSpeedName"}</code> |  |
| <Link id="m-grounded" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" grounded"}</code> |  |
| <Link id="m-groundedname" /><code>{"private string groundedName"}</code> |  |
| <Link id="m-pivot" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" pivot"}</code> |  |
| <Link id="m-pivotname" /><code>{"private string pivotName"}</code> |  |
| <Link id="m-stopping" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" stopping"}</code> |  |
| <Link id="m-stoppingname" /><code>{"private string stoppingName"}</code> |  |
| <Link id="m-turnspeed" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" turnSpeed"}</code> |  |
| <Link id="m-turnspeedname" /><code>{"private string turnSpeedName"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-getbool" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedbool">{"AnimatedBool"}</Link>{" GetBool(string name)"}</code> |  |
| <Link id="m-getfloat" /><code>{"private "}<Link to="/game-api/types/alta-networking/animatedfloat">{"AnimatedFloat"}</Link>{" GetFloat(string name)"}</code> |  |
| <Link id="m-start" /><code>{"private void Start()"}</code> |  |
| <Link id="m-updateanimation" /><code>{"private void UpdateAnimation("}<Link to="/game-api/types/alta-intelligence/walkerstate">{"WalkerState"}</Link>{" state)"}</code> |  |
