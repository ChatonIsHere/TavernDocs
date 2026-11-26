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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<ShoulderTwistController>`](/mod/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ShoulderTwistControllerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-issettingtwistlimit" /><code>{"private bool isSettingTwistLimit"}</code> | <span className="api-desc">Inspector button that runs `SetupTwistLimit`.</span> |
| <Link id="m-twistlimit" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bonewithtwistlimit">{"BoneWithTwistLimit"}</Link>{" twistLimit"}</code> | <span className="api-desc">Shoulder bone and twist angle to use (65 degrees by default).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shoulder" /><code>{"Transform Shoulder { set; }"}</code> | <span className="api-desc">Sets the bone in `twistLimit`. `SetupTwistLimit` reads the controller's own shoulder, not this.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptwistlimit" /><code>{"void SetupTwistLimit()"}</code> | <span className="api-desc">Adds or gets a `TwistLimit` on the controller's shoulder, sets its axis and angle, and gives it to the controller.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Runs `SetupTwistLimit` when the inspector button is pressed.</span> |

## Used in

Members of other types that take, return or hold a `ShoulderTwistControllerHelper`:

<div className="api-used-in">

[`ArmIKControllerHelper.shoulderTwistRelaxerControllerHelper`](/mod/game-api/types/alta-player/armikcontrollerhelper#m-shouldertwistrelaxercontrollerhelper).

</div>
