---
title: "TaskCompletedEvent"
description: "class TaskCompletedEvent in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskCompletedEvent

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IAchievementItem`](/game-api/types/global-i-l/iachievementitem)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TaskCompletedEvent()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-description" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" description"}</code> |
| <Link id="m-oncomplete" /><code>{"private UnityEvent onComplete"}</code> |
| <Link id="m-onnoncomplete" /><code>{"private UnityEvent onNonComplete"}</code> |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setachievement" /><code>{"void SetAchievement("}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete()"}</code> |
| <Link id="m-checkcompletetask" /><code>{"private void CheckCompleteTask("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> |
| <Link id="m-getlocalplayer" /><code>{"private void GetLocalPlayer("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TaskCompletedEvent`:

[`AchievementBoard.toSetup`](/game-api/types/global-a-b/achievementboard#m-tosetup).
