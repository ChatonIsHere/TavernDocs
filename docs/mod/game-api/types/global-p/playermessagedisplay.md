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
| <Link id="m-ctor" /><code>{"PlayerMessageDisplay()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> | <span className="api-desc">Android text renderer; not used by this code.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger; logs each message shown.</span> |
| <Link id="m-messagedisplaycoroutine" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" messageDisplayCoroutine"}</code> | <span className="api-desc">The running queue coroutine.</span> |
| <Link id="m-messagequeue" /><code>{"private List<DisplayMessage> messageQueue"}</code> | <span className="api-desc">Messages waiting; the first is the one shown. Capped at about 1000.</span> |
| <Link id="m-onscreentext" /><code>{"private Text onScreenText"}</code> | <span className="api-desc">UI text that shows the message.</span> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> | <span className="api-desc">The owning player controller.</span> |
| <Link id="m-positionfromhead" /><code>{"private Vector3 positionFromHead"}</code> | <span className="api-desc">Offset from the head; not used by this code.</span> |
| <Link id="m-rotationfromhead" /><code>{"private Quaternion rotationFromHead"}</code> | <span className="api-desc">Rotation from the head; not used by this code.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Always 0.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Empty build step.</span> |
| <Link id="m-display" /><code>{"void Display(string message, float duration = 2, "}<Link to="/mod/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> | <span className="api-desc">Shows a message. By default it replaces the current one; it can also queue or go next.</span> |
| <Link id="m-display-2" /><code>{"void Display(DisplayMessage message, "}<Link to="/mod/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> | <span className="api-desc">Shows a message. By default it replaces the current one; it can also queue or go next.</span> |

<details className="api-private">
<summary>6 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Empty.</span> |
| <Link id="m-displaymessagequeue" /><code>{"private IEnumerator DisplayMessageQueue() (iterator)"}</code> | <span className="api-desc">Coroutine: shows each queued message with its fade in, duration and fade out, then hides the text.</span> |
| <Link id="m-displaytextdelayedcoroutine" /><code>{"private IEnumerator DisplayTextDelayedCoroutine(float time, string message, float textFadeOutDuration = 5) (iterator)"}</code> | <span className="api-desc">Coroutine: after a delay, shows text and fades it out. Nothing in this code starts it.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the login failure event.</span> |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> | <span className="api-desc">Shows the failed login message in red.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks `LoginManager.LoginAttemptFailed`.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerMessageDisplay`:

<div className="api-used-in">

[`PlayerController.messageDisplay`](/mod/game-api/types/global-p/playercontroller#m-messagedisplay), [`PlayerController.MessageDisplay`](/mod/game-api/types/global-p/playercontroller#m-messagedisplay-2).

</div>
