---
title: "TutorialPromptBoard"
description: "Popup board asking the player whether to play the tutorial."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TutorialPromptBoard

A **class** in `Root.Township`, no namespace.

Popup board asking the player whether to play the tutorial. Join loads the tutorial scene; skip closes the board. Client side.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PopupBoard`](/game-api/types/global-p/popupboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TutorialPromptBoard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isjoining" /><code>{"private bool isJoining"}</code> | True once join was pressed, to block repeats. |
| <Link id="m-jointutorialbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" joinTutorialButton"}</code> | Button that starts the tutorial. |
| <Link id="m-skiptutorialbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" skipTutorialButton"}</code> | Button that closes the board. |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> | Message text for a follow-up after skipping. Not used in this class. |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> | Title for a follow-up after skipping. Not used in this class. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-jointutorialselected" /><code>{"event Action JoinTutorialSelected"}</code> | Raised when the player picks the tutorial, before it loads. |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the join button to `JoinTutorial` and the skip button to close. |
| <Link id="m-jointutorial" /><code>{"private async void JoinTutorial()"}</code> | Raises `JoinTutorialSelected`, loads the tutorial scene and closes. Ignores repeat presses. |

</details>

## Used in

Members of other types that take, return or hold a `TutorialPromptBoard`:

[`PlayTutorialChecker.popup`](/game-api/types/global-p/playtutorialchecker#m-popup).
