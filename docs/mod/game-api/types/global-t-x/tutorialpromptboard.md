---
title: "TutorialPromptBoard"
description: "Popup board asking the player whether to play the tutorial."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TutorialPromptBoard

A **class** in `Root.Township`, the global namespace.

Popup board asking the player whether to play the tutorial. Join loads the tutorial scene; skip closes the board. Client side.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`PopupBoard`](/mod/game-api/types/global-p/popupboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TutorialPromptBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isjoining" /><code>{"private bool isJoining"}</code> | <span className="api-desc">True once join was pressed, to block repeats.</span> |
| <Link id="m-jointutorialbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" joinTutorialButton"}</code> | <span className="api-desc">Button that starts the tutorial.</span> |
| <Link id="m-skiptutorialbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" skipTutorialButton"}</code> | <span className="api-desc">Button that closes the board.</span> |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> | <span className="api-desc">Message text for a follow-up after skipping. Not used in this class.</span> |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> | <span className="api-desc">Title for a follow-up after skipping. Not used in this class.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-jointutorialselected" /><code>{"event Action JoinTutorialSelected"}</code> | <span className="api-desc">Raised when the player picks the tutorial, before it loads.</span> |

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the join button to `JoinTutorial` and the skip button to close.</span> |
| <Link id="m-jointutorial" /><code>{"private async void JoinTutorial()"}</code> | <span className="api-desc">Raises `JoinTutorialSelected`, loads the tutorial scene and closes. Ignores repeat presses.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TutorialPromptBoard`:

<div className="api-used-in">

[`PlayTutorialChecker.popup`](/mod/game-api/types/global-p/playtutorialchecker#m-popup).

</div>
