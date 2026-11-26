---
title: "DownwardSwingInputStructure"
description: "Skill input settings for a downward swing: raise the hand, then bring it down in time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownwardSwingInputStructure

A **class** in `Root.Township`, no namespace.

Skill input settings for a downward swing: raise the hand, then bring it down in time. Creates a `DownwardSwingInput`.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`SkillInputStructure`](/game-api/types/global-s/skillinputstructure)
- **Derived types** [`DownwardSwingInputStructure.Create`](/game-api/types/global-c-d/downwardswinginputstructure-create)
- **Nested types** [`Create`](/game-api/types/global-c-d/downwardswinginputstructure-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DownwardSwingInputStructure()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> | Backing field for `ActiveTime`. |
| <Link id="m-hasactivetime" /><code>{"private bool hasActiveTime"}</code> | Backing field for `HasActiveTime`. |
| <Link id="m-heightdown" /><code>{"private float heightDown"}</code> | Backing field for `HeightDown`. |
| <Link id="m-heightup" /><code>{"private float heightUp"}</code> | Backing field for `HeightUp`. |
| <Link id="m-timetolowerhand" /><code>{"private float timeToLowerHand"}</code> | Backing field for `TimeToLowerHand`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> | Seconds the input stays active, when `HasActiveTime` is on. Defaults to 10. |
| <Link id="m-hasactivetime-2" /><code>{"bool HasActiveTime { get; }"}</code> | Whether the input expires after `ActiveTime`. |
| <Link id="m-heightdown-2" /><code>{"float HeightDown { get; }"}</code> | Hand height the swing must reach on the way down. Defaults to -1. |
| <Link id="m-heightup-2" /><code>{"float HeightUp { get; }"}</code> | Hand height the swing must start from. Defaults to 0. |
| <Link id="m-timetolowerhand-2" /><code>{"float TimeToLowerHand { get; }"}</code> | Seconds allowed to bring the hand down. Defaults to 0.7. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Returns a new `DownwardSwingInput`. |

## Used in

Members of other types that take, return or hold a `DownwardSwingInputStructure`:

[`DownwardSwingInput.structure`](/game-api/types/global-c-d/downwardswinginput#m-structure).
