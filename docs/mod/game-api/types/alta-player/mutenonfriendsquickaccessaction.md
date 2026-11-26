---
title: "MuteNonFriendsQuickAccessAction"
description: "Quick access menu action that cycles the voice chat audible scope (everyone, friends and so on)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MuteNonFriendsQuickAccessAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access menu action that cycles the voice chat audible scope (everyone, friends and so on). Client only.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MuteNonFriendsQuickAccessAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-voicechat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | <span className="api-desc">Voice chat used by `IsActive`. Never assigned in this code, so `IsActive` always reads true.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True unless the audible scope is `Everyone`. Also true when `voiceChat` is null, which it always is in this build since nothing assigns it.</span> |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">Always true.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Calls `CycleAudibleScope` on the resolved voice chat to move to the next audible scope.</span> |

## Used in

Members of other types that take, return or hold a `MuteNonFriendsQuickAccessAction`:

<div className="api-used-in">

[`MuteNonFriendsActionIcon.action`](/mod/game-api/types/alta-player/mutenonfriendsactionicon#m-action).

</div>
