---
title: "TaskCompletedEvent"
description: "Component that fires one of two UnityEvents depending on whether the local player has completed an achievement, and shows its description."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TaskCompletedEvent

A **class** in `Root.Township`, the global namespace.

Component that fires one of two UnityEvents depending on whether the local player has completed an achievement, and shows its description. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IAchievementItem`](/mod/game-api/types/global-i-l/iachievementitem)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TaskCompletedEvent()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-description" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" description"}</code> | <span className="api-desc">Text renderer that shows the achievement's description.</span> |
| <Link id="m-oncomplete" /><code>{"private UnityEvent onComplete"}</code> | <span className="api-desc">Event fired when the achievement is complete.</span> |
| <Link id="m-onnoncomplete" /><code>{"private UnityEvent onNonComplete"}</code> | <span className="api-desc">Event fired when the achievement isn't complete yet.</span> |
| <Link id="m-targetachievement" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" targetAchievement"}</code> | <span className="api-desc">The achievement to watch.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setachievement" /><code>{"void SetAchievement("}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Sets the target achievement and sets the component up for it.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-checkcomplete" /><code>{"private void CheckComplete()"}</code> | <span className="api-desc">Runs after a task sync arrives: fires `onComplete` if the achievement is now done.</span> |
| <Link id="m-checkcompletetask" /><code>{"private void CheckCompleteTask("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/global-e-h/gameachievement">{"GameAchievement"}</Link>{" achievement)"}</code> | <span className="api-desc">Fires `onComplete` when the local player completes the achievement.</span> |
| <Link id="m-getlocalplayer" /><code>{"private void GetLocalPlayer("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Fires `onComplete` if already done, otherwise `onNonComplete`, and starts listening for completion.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from the local player and achievement events.</span> |
| <Link id="m-setup" /><code>{"private void Setup()"}</code> | <span className="api-desc">Shows the achievement description and checks the local player, waiting for one if none is set yet.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Calls `Setup` if an achievement is assigned.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TaskCompletedEvent`:

<div className="api-used-in">

[`AchievementBoard.toSetup`](/mod/game-api/types/global-a-b/achievementboard#m-tosetup).

</div>
