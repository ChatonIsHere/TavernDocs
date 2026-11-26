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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`, [`IQuickAccessDynamicIcon`](/mod/game-api/types/alta-player/iquickaccessdynamicicon)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MuteNonFriendsActionIcon()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-action" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/mutenonfriendsquickaccessaction">{"MuteNonFriendsQuickAccessAction"}</Link>{" action"}</code> | <span className="api-desc">The mute non-friends action shown.</span> |
| <Link id="m-icons" /><code>{"private GameObject[] icons"}</code> | <span className="api-desc">One icon per voice chat scope.</span> |
| <Link id="m-slash" /><code>{"private GameObject slash"}</code> | <span className="api-desc">Shown when the scope is no one.</span> |
| <Link id="m-voicechat" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/ivoicechat">{"IVoiceChat"}</Link>{" voiceChat"}</code> | <span className="api-desc">The voice chat interface.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onenable" /><code>{"void OnEnable()"}</code> | <span className="api-desc">Gets the voice chat interface.</span> |
| <Link id="m-setupaction" /><code>{"void SetupAction("}<Link to="/mod/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action)"}</code> | <span className="api-desc">Hooks the action's active event and refreshes the icon.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the action.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows the icon matching the voice chat's audible scope and the slash for no one.</span> |

</details>
