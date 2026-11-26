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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MuteNonFriendsQuickAccessAction()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-voicechat" /><code>{"private "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | Voice chat used by `IsActive`. Never assigned in this code, so `IsActive` always reads true. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True unless the audible scope is `Everyone`. Also true when `voiceChat` is null, which it always is in this build since nothing assigns it. |
| <Link id="m-isvalid" /><code>{"override bool IsValid { get; }"}</code> | Always true. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Calls `CycleAudibleScope` on the resolved voice chat to move to the next audible scope. |

## Used in

Members of other types that take, return or hold a `MuteNonFriendsQuickAccessAction`:

[`MuteNonFriendsActionIcon.action`](/game-api/types/alta-player/mutenonfriendsactionicon#m-action).
