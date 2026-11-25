---
title: "PopupBoard"
description: "class PopupBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopupBoard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`, [`IPopupBoard`](/game-api/types/global-i-l/ipopupboard)
- **Derived types** [`AccessibilityFeaturesBoard`](/game-api/types/global-a-b/accessibilityfeaturesboard), [`AccessibilitySeatedStandingBoard`](/game-api/types/game-other-namespaces/accessibilityseatedstandingboard), [`TutorialPromptBoard`](/game-api/types/global-t-x/tutorialpromptboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopupBoard()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destroygameobjectonclose" /><code>{"private bool destroyGameObjectOnClose"}</code> |  |
| <Link id="m-messagetext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" messageText"}</code> |  |
| <Link id="m-titletext" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" titleText"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; set; }"}</code> |  |
| <Link id="m-title" /><code>{"string Title { get; set; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-closed" /><code>{"event Action<"}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{"> Closed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"void Close()"}</code> |  |
| <Link id="m-tostring" /><code>{"override string ToString()"}</code> |  |

## Used in

Members of other types that take, return or hold a `PopupBoard`:

[`AccessibilityFeaturesChecker.accessibilityPopup`](/game-api/types/global-a-b/accessibilityfeatureschecker#m-accessibilitypopup), [`EmailVerificationController.emailVerificationPopup`](/game-api/types/global-e-h/emailverificationcontroller#m-emailverificationpopup), [`PopupManager.defaultBoard`](/game-api/types/global-p/popupmanager#m-defaultboard), [`StoreRotationPopup.popupBoard`](/game-api/types/global-s/storerotationpopup#m-popupboard).
