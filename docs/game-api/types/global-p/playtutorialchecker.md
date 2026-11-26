---
title: "PlayTutorialChecker"
description: "Client tool that, after login, offers players who haven't done the tutorial a prompt to play it, plus a follow-up popup if they skip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayTutorialChecker

A **class** in `Root.Township`, no namespace.

Client tool that, after login, offers players who haven't done the tutorial a prompt to play it, plus a follow-up popup if they skip.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayTutorialChecker()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-followuppopup" /><code>{"private "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" followupPopup"}</code> | The follow-up popup, kept so it can be cancelled. |
| <Link id="m-haspromptedfortutorialkey" /><code>{"private const string HasPromptedForTutorialKey"}</code> | Player preferences key set once the prompt has been shown. |
| <Link id="m-popup" /><code>{"private "}<Link to="/game-api/types/global-t-x/tutorialpromptboard">{"TutorialPromptBoard"}</Link>{" popup"}</code> | The tutorial prompt board to show. |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> | Body text of the follow-up popup. |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> | Title of the follow-up popup. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | Waits a moment after login, then shows the prompt if allowed. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Empty. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelfollowup" /><code>{"private void CancelFollowup()"}</code> | Closes the follow-up popup when the player chooses to join the tutorial. |
| <Link id="m-canshowtutorialprompt" /><code>{"private bool CanShowTutorialPrompt()"}</code> | True when the player hasn't finished the tutorial and the prompted key exists. The key check looks inverted, so the prompt may never show. |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | Hooks the prompt board's join button so the follow-up is cancelled. |
| <Link id="m-showprompt" /><code>{"private void ShowPrompt()"}</code> | Saves the prompted key, then shows the tutorial prompt and the skip follow-up popup. |

</details>
