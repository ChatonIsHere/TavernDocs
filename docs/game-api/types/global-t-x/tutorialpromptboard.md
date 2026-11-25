---
title: "TutorialPromptBoard"
description: "class TutorialPromptBoard in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TutorialPromptBoard

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`PopupBoard`](/game-api/types/global-p/popupboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TutorialPromptBoard()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-isjoining" /><code>{"private bool isJoining"}</code> |
| <Link id="m-jointutorialbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" joinTutorialButton"}</code> |
| <Link id="m-skiptutorialbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" skipTutorialButton"}</code> |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> |

</details>

## Events

| Member |
| --- |
| <Link id="m-jointutorialselected" /><code>{"event Action JoinTutorialSelected"}</code> |

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-jointutorial" /><code>{"private async void JoinTutorial()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TutorialPromptBoard`:

[`PlayTutorialChecker.popup`](/game-api/types/global-p/playtutorialchecker#m-popup).
