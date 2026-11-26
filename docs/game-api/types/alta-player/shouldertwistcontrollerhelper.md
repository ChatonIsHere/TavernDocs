---
title: "ShoulderTwistControllerHelper"
description: "Editor helper for ShoulderTwistController that adds a twist limit to the shoulder bone."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShoulderTwistControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor helper for `ShoulderTwistController` that adds a twist limit to the shoulder bone.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<ShoulderTwistController>`](/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShoulderTwistControllerHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issettingtwistlimit" /><code>{"private bool isSettingTwistLimit"}</code> | Inspector button that runs `SetupTwistLimit`. |
| <Link id="m-twistlimit" /><code>{"private "}<Link to="/game-api/types/alta-player/bonewithtwistlimit">{"BoneWithTwistLimit"}</Link>{" twistLimit"}</code> | Shoulder bone and twist angle to use (65 degrees by default). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shoulder" /><code>{"Transform Shoulder { set; }"}</code> | Sets the bone in `twistLimit`. `SetupTwistLimit` reads the controller's own shoulder, not this. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptwistlimit" /><code>{"void SetupTwistLimit()"}</code> | Adds or gets a `TwistLimit` on the controller's shoulder, sets its axis and angle, and gives it to the controller. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Runs `SetupTwistLimit` when the inspector button is pressed. |

## Used in

Members of other types that take, return or hold a `ShoulderTwistControllerHelper`:

[`ArmIKControllerHelper.shoulderTwistRelaxerControllerHelper`](/game-api/types/alta-player/armikcontrollerhelper#m-shouldertwistrelaxercontrollerhelper).
