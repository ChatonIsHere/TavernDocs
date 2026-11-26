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
| <Link id="m-ctor" /><code>{"TwistRelaxerControllerHelper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bonestoberelaxed" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{"> bonesToBeRelaxed"}</code> | <span className="api-desc">Backing field for `BonesToBeRelaxed`.</span> |
| <Link id="m-issettinguprelaxers" /><code>{"private bool isSettingUpRelaxers"}</code> | <span className="api-desc">Inspector button that runs `SetupTwistRelaxers`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bonestoberelaxed-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-player/twistrelaxersetting">{"TwistRelaxerSetting"}</Link>{"> BonesToBeRelaxed { get; }"}</code> | <span className="api-desc">The bones to relax, each with its weight and parent to child crossfade.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setuptwistrelaxers" /><code>{"void SetupTwistRelaxers()"}</code> | <span className="api-desc">Adds or gets a `TwistRelaxer` on each bone, sets it up so the controller updates it, and gives the list to the controller.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Runs `SetupTwistRelaxers` when the inspector button is pressed.</span> |

## Used in

Members of other types that take, return or hold a `TwistRelaxerControllerHelper`:

<div className="api-used-in">

[`ArmIKControllerHelper.twistRelaxerControllerHelper`](/mod/game-api/types/alta-player/armikcontrollerhelper#m-twistrelaxercontrollerhelper).

</div>
