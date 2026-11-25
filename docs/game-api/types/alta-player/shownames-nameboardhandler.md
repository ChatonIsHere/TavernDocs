---
title: "ShowNames.NameBoardHandler"
description: "class ShowNames.NameBoardHandler in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShowNames.NameBoardHandler

A **private class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`ShowNames`](/game-api/types/alta-player/shownames)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NameBoardHandler("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> |
| <Link id="m-ctor-2" /><code>{"NameBoardHandler("}<Link to="/game-api/types/alta-player/playerproxy">{"PlayerProxy"}</Link>{" player, "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> |

<details>
<summary>1 private and internal constructor</summary>

| Member |
| --- |
| <Link id="m-ctor-3" /><code>{"private NameBoardHandler(string userName, int userStatus, bool isFriend, Transform playerHead, "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> |

</details>

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-boardtransform" /><code>{"private Transform boardTransform"}</code> |
| <Link id="m-delaytoactivate" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" delayToActivate"}</code> |
| <Link id="m-hasspawned" /><code>{"private bool hasSpawned"}</code> |
| <Link id="m-isfriend" /><code>{"private bool isFriend"}</code> |
| <Link id="m-nameboard" /><code>{"private "}<Link to="/game-api/types/alta-player/nameboard">{"NameBoard"}</Link>{" nameBoard"}</code> |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> |
| <Link id="m-playerhead" /><code>{"private Transform playerHead"}</code> |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings"}</code> |
| <Link id="m-username" /><code>{"private string userName"}</code> |
| <Link id="m-userstatus" /><code>{"private int userStatus"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |
| <Link id="m-update" /><code>{"void Update(Vector3 toPlayer)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> |
| <Link id="m-delaytoactivatename" /><code>{"private IEnumerator DelayToActivateName() (iterator)"}</code> |
| <Link id="m-updatefriendship" /><code>{"private void UpdateFriendship()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `NameBoardHandler`:

[`ShowNames.activeNames`](/game-api/types/alta-player/shownames#m-activenames).
