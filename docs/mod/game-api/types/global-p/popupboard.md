---
title: "PopupBoard"
description: "A world space popup with a title and a message."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupBoard

A **class** in `Root.Township`, the global namespace.

A world space popup with a title and a message. Destroys its own GameObject when closed, unless set not to.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPopupBoard`](/mod/game-api/types/global-i-l/ipopupboard)
- **Derived types** [`AccessibilityFeaturesBoard`](/mod/game-api/types/global-a-b/accessibilityfeaturesboard), [`AccessibilitySeatedStandingBoard`](/mod/game-api/types/game-other-namespaces/accessibilityseatedstandingboard), [`TutorialPromptBoard`](/mod/game-api/types/global-t-x/tutorialpromptboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destroygameobjectonclose" /><code>{"private bool destroyGameObjectOnClose"}</code> | <span className="api-desc">Whether `Close` destroys the board's game object (default true).</span> |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> | <span className="api-desc">Text renderer behind `Message`.</span> |
| <Link id="m-titletext" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleText"}</code> | <span className="api-desc">Text renderer behind `Title`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> | <span className="api-desc">The body text shown on the popup.</span> |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> | <span className="api-desc">The title text shown on the popup.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">The popup's transform, so callers can place it.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> Closed"}</code> | <span className="api-desc">Raised when `Close` is called, before the popup is destroyed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> | <span className="api-desc">Raises `Closed`, then destroys the popup's GameObject if it's set to.</span> |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> | <span className="api-desc">Returns the popup's title and object name, for logs.</span> |

## Used in

Members of other types that take, return or hold a `PopupBoard`:

<div className="api-used-in">

[`AccessibilityFeaturesChecker.accessibilityPopup`](/mod/game-api/types/global-a-b/accessibilityfeatureschecker#m-accessibilitypopup), [`EmailVerificationController.emailVerificationPopup`](/mod/game-api/types/global-e-h/emailverificationcontroller#m-emailverificationpopup), [`PopupManager.defaultBoard`](/mod/game-api/types/global-p/popupmanager#m-defaultboard), [`StoreRotationPopup.popupBoard`](/mod/game-api/types/global-s/storerotationpopup#m-popupboard).

</div>
