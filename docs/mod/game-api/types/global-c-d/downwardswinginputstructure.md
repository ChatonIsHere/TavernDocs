---
title: "DownwardSwingInputStructure"
description: "Skill input settings for a downward swing: raise the hand, then bring it down in time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DownwardSwingInputStructure

A **class** in `Root.Township`, the global namespace.

Skill input settings for a downward swing: raise the hand, then bring it down in time. Creates a `DownwardSwingInput`.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`DownwardSwingInputStructure.Create`](/mod/game-api/types/global-c-d/downwardswinginputstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-c-d/downwardswinginputstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DownwardSwingInputStructure()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activetime" /><code>{"private float activeTime"}</code> | <span className="api-desc">Backing field for `ActiveTime`.</span> |
| <Link id="m-hasactivetime" /><code>{"private bool hasActiveTime"}</code> | <span className="api-desc">Backing field for `HasActiveTime`.</span> |
| <Link id="m-heightdown" /><code>{"private float heightDown"}</code> | <span className="api-desc">Backing field for `HeightDown`.</span> |
| <Link id="m-heightup" /><code>{"private float heightUp"}</code> | <span className="api-desc">Backing field for `HeightUp`.</span> |
| <Link id="m-timetolowerhand" /><code>{"private float timeToLowerHand"}</code> | <span className="api-desc">Backing field for `TimeToLowerHand`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-activetime-2" /><code>{"float ActiveTime { get; }"}</code> | <span className="api-desc">Seconds the input stays active, when `HasActiveTime` is on. Defaults to 10.</span> |
| <Link id="m-hasactivetime-2" /><code>{"bool HasActiveTime { get; }"}</code> | <span className="api-desc">Whether the input expires after `ActiveTime`.</span> |
| <Link id="m-heightdown-2" /><code>{"float HeightDown { get; }"}</code> | <span className="api-desc">Hand height the swing must reach on the way down. Defaults to -1.</span> |
| <Link id="m-heightup-2" /><code>{"float HeightUp { get; }"}</code> | <span className="api-desc">Hand height the swing must start from. Defaults to 0.</span> |
| <Link id="m-timetolowerhand-2" /><code>{"float TimeToLowerHand { get; }"}</code> | <span className="api-desc">Seconds allowed to bring the hand down. Defaults to 0.7.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | <span className="api-desc">Returns a new `DownwardSwingInput`.</span> |

## Used in

Members of other types that take, return or hold a `DownwardSwingInputStructure`:

<div className="api-used-in">

[`DownwardSwingInput.structure`](/mod/game-api/types/global-c-d/downwardswinginput#m-structure).

</div>
