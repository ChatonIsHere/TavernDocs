---
title: "PlayerMessageDisplay"
description: "Client text shown in front of the player's view, such as login errors."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMessageDisplay

A **class** in `Root.Township`, the global namespace.

Client text shown in front of the player's view, such as login errors. Messages queue and fade in and out.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerMessageDisplay()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> | Android text renderer; not used by this code. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger; logs each message shown. |
| <Link id="m-messagedisplaycoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" messageDisplayCoroutine"}</code> | The running queue coroutine. |
| <Link id="m-messagequeue" /><code>{"private List<DisplayMessage> messageQueue"}</code> | Messages waiting; the first is the one shown. Capped at about 1000. |
| <Link id="m-onscreentext" /><code>{"private Text onScreenText"}</code> | UI text that shows the message. |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | The owning player controller. |
| <Link id="m-positionfromhead" /><code>{"private Vector3 positionFromHead"}</code> | Offset from the head; not used by this code. |
| <Link id="m-rotationfromhead" /><code>{"private Quaternion rotationFromHead"}</code> | Rotation from the head; not used by this code. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Always 0. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Empty build step. |
| <Link id="m-display" /><code>{"void Display(string message, float duration = 2, "}<Link to="/mod/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> | Shows a message. By default it replaces the current one; it can also queue or go next. |
| <Link id="m-display-2" /><code>{"void Display(DisplayMessage message, "}<Link to="/mod/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> | Shows a message. By default it replaces the current one; it can also queue or go next. |

<details>
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Empty. |
| <Link id="m-displaymessagequeue" /><code>{"private IEnumerator DisplayMessageQueue() (iterator)"}</code> | Coroutine: shows each queued message with its fade in, duration and fade out, then hides the text. |
| <Link id="m-displaytextdelayedcoroutine" /><code>{"private IEnumerator DisplayTextDelayedCoroutine(float time, string message, float textFadeOutDuration = 5) (iterator)"}</code> | Coroutine: after a delay, shows text and fades it out. Nothing in this code starts it. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the login failure event. |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> | Shows the failed login message in red. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks `LoginManager.LoginAttemptFailed`. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerMessageDisplay`:

[`PlayerController.messageDisplay`](/mod/game-api/types/global-p/playercontroller#m-messagedisplay), [`PlayerController.MessageDisplay`](/mod/game-api/types/global-p/playercontroller#m-messagedisplay-2).
