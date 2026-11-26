---
title: "ShowNames.NameBoardHandler"
description: "Tracks the name board for one player or PlayerProxy while Show Names is on: spawns it (after a short delay unless instant), keeps it above the head and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ShowNames.NameBoardHandler

A **private class** in `Root.Township`, `Alta.QuickAccessActions`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Tracks the name board for one player or `PlayerProxy` while Show Names is on: spawns it (after a short delay unless instant), keeps it above the head and facing you, and updates friend status. Client only.

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

| Member | What it is |
| --- | --- |
| <Link id="m-boardtransform" /><code>{"private Transform boardTransform"}</code> | Transform of the spawned name board. |
| <Link id="m-delaytoactivate" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" delayToActivate"}</code> | Coroutine for the delayed spawn, cleared once the board spawns. |
| <Link id="m-hasspawned" /><code>{"private bool hasSpawned"}</code> | True once the board has been taken from the pool. |
| <Link id="m-isfriend" /><code>{"private bool isFriend"}</code> | Whether the player was a friend when the handler was made. |
| <Link id="m-nameboard" /><code>{"private "}<Link to="/game-api/types/alta-player/nameboard">{"NameBoard"}</Link>{" nameBoard"}</code> | The spawned name board. |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The real player, or null for a `PlayerProxy`. |
| <Link id="m-playerhead" /><code>{"private Transform playerHead"}</code> | Head transform the board follows. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings"}</code> | The `ShowNames` action that owns this handler. |
| <Link id="m-username" /><code>{"private string userName"}</code> | Name shown on the board. |
| <Link id="m-userstatus" /><code>{"private int userStatus"}</code> | Member status as an int, used to pick the shield. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Releases the board, or stops the pending spawn, and unhooks the friendship event. |
| <Link id="m-update" /><code>{"void Update(Vector3 toPlayer)"}</code> | Moves the board above the player's head and turns it to face the local player, ignoring height. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | Takes a `NameBoard` from the pool and sets it up with the name, friend state and member status shield. |
| <Link id="m-delaytoactivatename" /><code>{"private IEnumerator DelayToActivateName() (iterator)"}</code> | Coroutine that waits `delayToActivateName` seconds, then calls `Activate`. |
| <Link id="m-updatefriendship" /><code>{"private void UpdateFriendship()"}</code> | Updates the board when the player's friendship status changes. |

</details>

## Used in

Members of other types that take, return or hold a `NameBoardHandler`:

[`ShowNames.activeNames`](/game-api/types/alta-player/shownames#m-activenames).
