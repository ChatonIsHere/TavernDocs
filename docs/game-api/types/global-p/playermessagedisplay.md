---
title: "PlayerMessageDisplay"
description: "class PlayerMessageDisplay in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerMessageDisplay

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerMessageDisplay()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-androidonscreentext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" androidOnScreenText"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-messagedisplaycoroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" messageDisplayCoroutine"}</code> |
| <Link id="m-messagequeue" /><code>{"private List<DisplayMessage> messageQueue"}</code> |
| <Link id="m-onscreentext" /><code>{"private Text onScreenText"}</code> |
| <Link id="m-playercontroller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController"}</code> |
| <Link id="m-positionfromhead" /><code>{"private Vector3 positionFromHead"}</code> |
| <Link id="m-rotationfromhead" /><code>{"private Quaternion rotationFromHead"}</code> |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> |
| <Link id="m-display" /><code>{"void Display(string message, float duration = 2, "}<Link to="/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> |
| <Link id="m-display-2" /><code>{"void Display(DisplayMessage message, "}<Link to="/game-api/types/global-c-d/displaymessagetype">{"DisplayMessageType"}</Link>{" type = 2)"}</code> |

<details>
<summary>6 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |
| <Link id="m-displaymessagequeue" /><code>{"private IEnumerator DisplayMessageQueue() (iterator)"}</code> |
| <Link id="m-displaytextdelayedcoroutine" /><code>{"private IEnumerator DisplayTextDelayedCoroutine(float time, string message, float textFadeOutDuration = 5) (iterator)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-onloginattemptfailed" /><code>{"private void OnLoginAttemptFailed(string message)"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerMessageDisplay`:

[`PlayerController.messageDisplay`](/game-api/types/global-p/playercontroller#m-messagedisplay), [`PlayerController.MessageDisplay`](/game-api/types/global-p/playercontroller#m-messagedisplay-2).
