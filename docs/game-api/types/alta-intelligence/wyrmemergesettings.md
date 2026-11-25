---
title: "WyrmEmergeSettings"
description: "class WyrmEmergeSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmEmergeSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmEmergeSettings()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool" /><code>{"private string animatedBool"}</code> |  |
| <Link id="m-chance" /><code>{"private float chance"}</code> |  |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> |  |
| <Link id="m-emergedsenses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] emergedSenses"}</code> |  |
| <Link id="m-radius" /><code>{"private float radius"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool-2" /><code>{"string AnimatedBool { get; }"}</code> |  |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> |  |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> |  |
| <Link id="m-emergedsenses-2" /><code><Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] EmergedSenses { get; }"}</code> |  |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> |  |
| <Link id="m-radiussquared" /><code>{"float RadiusSquared { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> |  |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |  |

## Used in

Members of other types that take, return or hold a `WyrmEmergeSettings`:

[`ActiveEmerge.GetAction`](/game-api/types/alta-intelligence/activeemerge#m-getaction).
