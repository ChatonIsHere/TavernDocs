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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`ShowNames`](/mod/game-api/types/alta-player/shownames)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NameBoardHandler("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `ShowNames.NameBoardHandler` from `userName`, `userStatus`, `isFriend`, `playerHead` and `settings`.</span> |
| <Link id="m-ctor-2" /><code>{"NameBoardHandler("}<Link to="/mod/game-api/types/alta-player/playerproxy">{"PlayerProxy"}</Link>{" player, "}<Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `ShowNames.NameBoardHandler` from `userName`, `userStatus`, `isFriend`, `playerHead` and `settings`.</span> |

<details className="api-private">
<summary>1 private and internal constructor</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ctor-3" /><code>{"private NameBoardHandler(string userName, int userStatus, bool isFriend, Transform playerHead, "}<Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings)"}</code> | <span className="api-desc">Creates a `ShowNames.NameBoardHandler` from `userName`, `userStatus`, `isFriend`, `playerHead` and `settings`.</span> |

</details>

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boardtransform" /><code>{"private Transform boardTransform"}</code> | <span className="api-desc">Transform of the spawned name board.</span> |
| <Link id="m-delaytoactivate" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" delayToActivate"}</code> | <span className="api-desc">Coroutine for the delayed spawn, cleared once the board spawns.</span> |
| <Link id="m-hasspawned" /><code>{"private bool hasSpawned"}</code> | <span className="api-desc">True once the board has been taken from the pool.</span> |
| <Link id="m-isfriend" /><code>{"private bool isFriend"}</code> | <span className="api-desc">Whether the player was a friend when the handler was made.</span> |
| <Link id="m-nameboard" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/nameboard">{"NameBoard"}</Link>{" nameBoard"}</code> | <span className="api-desc">The spawned name board.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The real player, or null for a `PlayerProxy`.</span> |
| <Link id="m-playerhead" /><code>{"private Transform playerHead"}</code> | <span className="api-desc">Head transform the board follows.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/shownames">{"ShowNames"}</Link>{" settings"}</code> | <span className="api-desc">The `ShowNames` action that owns this handler.</span> |
| <Link id="m-username" /><code>{"private string userName"}</code> | <span className="api-desc">Name shown on the board.</span> |
| <Link id="m-userstatus" /><code>{"private int userStatus"}</code> | <span className="api-desc">Member status as an int, used to pick the shield.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Releases the board, or stops the pending spawn, and unhooks the friendship event.</span> |
| <Link id="m-update" /><code>{"void Update(Vector3 toPlayer)"}</code> | <span className="api-desc">Moves the board above the player's head and turns it to face the local player, ignoring height.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"private void Activate()"}</code> | <span className="api-desc">Takes a `NameBoard` from the pool and sets it up with the name, friend state and member status shield.</span> |
| <Link id="m-delaytoactivatename" /><code>{"private IEnumerator DelayToActivateName() (iterator)"}</code> | <span className="api-desc">Coroutine that waits `delayToActivateName` seconds, then calls `Activate`.</span> |
| <Link id="m-updatefriendship" /><code>{"private void UpdateFriendship()"}</code> | <span className="api-desc">Updates the board when the player's friendship status changes.</span> |

</details>

## Used in

Members of other types that take, return or hold a `NameBoardHandler`:

<div className="api-used-in">

[`ShowNames.activeNames`](/mod/game-api/types/alta-player/shownames#m-activenames).

</div>
