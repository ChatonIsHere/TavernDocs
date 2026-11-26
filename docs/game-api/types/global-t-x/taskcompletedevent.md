---
title: "TaskCompletedEvent"
description: "Component that fires one of two UnityEvents depending on whether the local player has completed an achievement, and shows its description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskCompletedEvent

A **class** in `Root.Township`, no namespace.

Component that fires one of two UnityEvents depending on whether the local player has completed an achievement, and shows its description. Client side.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IAchievementItem`](/game-api/types/global-i-l/iachievementitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaskCompletedEvent()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" description"}</code> | Text renderer that shows the achievement's description. |
| <Link id="m-oncomplete" /><code>{"private UnityEvent onComplete"}</code> | Event fired when the achievement is complete. |
| <Link id="m-onnoncomplete" /><code>{"private UnityEvent onNonComplete"}</code> | Event fired when the achievement isn't complete yet. |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> | The achievement to watch. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setachievement" /><code>{"void SetAchievement("}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Sets the target achievement and sets the component up for it. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete()"}</code> | Runs after a task sync arrives: fires `onComplete` if the achievement is now done. |
| <Link id="m-checkcompletetask" /><code>{"private void CheckCompleteTask("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | Fires `onComplete` when the local player completes the achievement. |
| <Link id="m-getlocalplayer" /><code>{"private void GetLocalPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Fires `onComplete` if already done, otherwise `onNonComplete`, and starts listening for completion. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from the local player and achievement events. |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | Shows the achievement description and checks the local player, waiting for one if none is set yet. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Calls `Setup` if an achievement is assigned. |

</details>

## Used in

Members of other types that take, return or hold a `TaskCompletedEvent`:

[`AchievementBoard.toSetup`](/game-api/types/global-a-b/achievementboard#m-tosetup).
