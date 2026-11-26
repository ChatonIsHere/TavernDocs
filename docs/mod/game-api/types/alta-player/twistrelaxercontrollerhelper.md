---
title: "TwistRelaxerControllerHelper"
description: "Editor helper for TwistRelaxerController that adds twist relaxers to a list of bones."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistRelaxerControllerHelper

A **class** in `Root.Township`, `Alta.Character`.

Editor helper for `TwistRelaxerController` that adds twist relaxers to a list of bones.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentHelper<TwistRelaxerController>`](/mod/game-api/types/alta-player/charactercomponenthelper-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwistRelaxerControllerHelper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bonestoberelaxed" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{"> bonesToBeRelaxed"}</code> | Backing field for `BonesToBeRelaxed`. |
| <Link id="m-issettinguprelaxers" /><code>{"private bool isSettingUpRelaxers"}</code> | Inspector button that runs `SetupTwistRelaxers`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bonestoberelaxed-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{"> BonesToBeRelaxed { get; }"}</code> | The bones to relax, each with its weight and parent to child crossfade. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptwistrelaxers" /><code>{"void SetupTwistRelaxers()"}</code> | Adds or gets a `TwistRelaxer` on each bone, sets it up so the controller updates it, and gives the list to the controller. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Runs `SetupTwistRelaxers` when the inspector button is pressed. |

## Used in

Members of other types that take, return or hold a `TwistRelaxerControllerHelper`:

[`ArmIKControllerHelper.twistRelaxerControllerHelper`](/mod/game-api/types/alta-player/armikcontrollerhelper#m-twistrelaxercontrollerhelper).
