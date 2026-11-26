---
title: "BowStringPullbackStructure"
description: "Skill input settings for pulling back a bow string; creates a BowStringPullbackInputMethod."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BowStringPullbackStructure

A **class** in `Root.Township`, the global namespace.

Skill input settings for pulling back a bow string; creates a `BowStringPullbackInputMethod`.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SkillInputStructure`](/mod/game-api/types/global-s/skillinputstructure)
- **Derived types** [`BowStringPullbackStructure.Create`](/mod/game-api/types/global-a-b/bowstringpullbackstructure-create)
- **Nested types** [`Create`](/mod/game-api/types/global-a-b/bowstringpullbackstructure-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BowStringPullbackStructure()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-istimingout" /><code>{"private bool isTimingOut"}</code> | Backing field for `IsTimingOut`. |
| <Link id="m-mintimetopullback" /><code>{"private float minTimeToPullback"}</code> | Backing field for `MinTimeToPullback`. |
| <Link id="m-pullbackvalue" /><code>{"private float pullbackValue"}</code> | Backing field for `PullbackValue`. |
| <Link id="m-timeoutduration" /><code>{"private float timeoutDuration"}</code> | Backing field for `TimeoutDuration`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istimingout-2" /><code>{"bool IsTimingOut { get; }"}</code> | Whether the input times out after `TimeoutDuration`. |
| <Link id="m-mintimetopullback-2" /><code>{"float MinTimeToPullback { get; }"}</code> | Seconds the string must be held back. Defaults to 2. |
| <Link id="m-pullbackvalue-2" /><code>{"float PullbackValue { get; }"}</code> | How far the string must be pulled, probably 0 to 1. Defaults to 0.7. |
| <Link id="m-timeoutduration-2" /><code>{"float TimeoutDuration { get; }"}</code> | Seconds before the input times out, when `IsTimingOut` is on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getnewinput" /><code>{"override "}<Link to="/mod/game-api/types/global-i-l/iskillinputmethod">{"ISkillInputMethod"}</Link>{" GetNewInput()"}</code> | Returns a new `BowStringPullbackInputMethod`. |

## Used in

Members of other types that take, return or hold a `BowStringPullbackStructure`:

[`BowStringPullbackInputMethod.pullbackStructure`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-pullbackstructure).
