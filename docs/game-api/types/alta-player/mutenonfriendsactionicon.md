---
title: "MuteNonFriendsActionIcon"
description: "Bubble icon for the mute non-friends action: shows the icon for the current voice chat scope, with a slash when nobody is audible."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MuteNonFriendsActionIcon

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Bubble icon for the mute non-friends action: shows the icon for the current voice chat scope, with a slash when nobody is audible.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IQuickAccessDynamicIcon`](/game-api/types/alta-player/iquickaccessdynamicicon)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"MuteNonFriendsActionIcon()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/game-api/types/alta-player/mutenonfriendsquickaccessaction">{"MuteNonFriendsQuickAccessAction"}</Link>{" action"}</code> | The mute non-friends action shown. |
| <Link id="m-icons" /><code>{"private GameObject[] icons"}</code> | One icon per voice chat scope. |
| <Link id="m-slash" /><code>{"private GameObject slash"}</code> | Shown when the scope is no one. |
| <Link id="m-voicechat" /><code>{"private "}<Link to="/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | The voice chat interface. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"void OnEnable()"}</code> | Gets the voice chat interface. |
| <Link id="m-setupaction" /><code>{"void SetupAction("}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action)"}</code> | Hooks the action's active event and refreshes the icon. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the action. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Shows the icon matching the voice chat's audible scope and the slash for no one. |

</details>
