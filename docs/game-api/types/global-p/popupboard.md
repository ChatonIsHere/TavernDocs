---
title: "PopupBoard"
description: "A world space popup with a title and a message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupBoard

A **class** in `Root.Township`, no namespace.

A world space popup with a title and a message. Destroys its own GameObject when closed, unless set not to.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPopupBoard`](/game-api/types/global-i-l/ipopupboard)
- **Derived types** [`AccessibilityFeaturesBoard`](/game-api/types/global-a-b/accessibilityfeaturesboard), [`AccessibilitySeatedStandingBoard`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard), [`TutorialPromptBoard`](/game-api/types/global-t-x/tutorialpromptboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroygameobjectonclose" /><code>{"private bool destroyGameObjectOnClose"}</code> | Whether `Close` destroys the board's game object (default true). |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | Text renderer behind `Message`. |
| <Link id="m-titletext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleText"}</code> | Text renderer behind `Title`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | The body text shown on the popup. |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | The title text shown on the popup. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | The popup's transform, so callers can place it. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> Closed"}</code> | Raised when `Close` is called, before the popup is destroyed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | Raises `Closed`, then destroys the popup's GameObject if it's set to. |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | Returns the popup's title and object name, for logs. |

## Used in

Members of other types that take, return or hold a `PopupBoard`:

[`AccessibilityFeaturesChecker.accessibilityPopup`](/game-api/types/global-a-b/accessibilityfeatureschecker#m-accessibilitypopup), [`EmailVerificationController.emailVerificationPopup`](/game-api/types/global-e-h/emailverificationcontroller#m-emailverificationpopup), [`PopupManager.defaultBoard`](/game-api/types/global-p/popupmanager#m-defaultboard), [`StoreRotationPopup.popupBoard`](/game-api/types/global-s/storerotationpopup#m-popupboard).
