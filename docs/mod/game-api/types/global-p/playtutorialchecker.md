---
title: "PlayTutorialChecker"
description: "Client tool that, after login, offers players who haven't done the tutorial a prompt to play it, plus a follow-up popup if they skip."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayTutorialChecker

A **class** in `Root.Township`, the global namespace.

Client tool that, after login, offers players who haven't done the tutorial a prompt to play it, plus a follow-up popup if they skip.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`LoggedInTool`](/mod/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayTutorialChecker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-followuppopup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" followupPopup"}</code> | <span className="api-desc">The follow-up popup, kept so it can be cancelled.</span> |
| <Link id="m-haspromptedfortutorialkey" /><code>{"private const string HasPromptedForTutorialKey"}</code> | <span className="api-desc">Player preferences key set once the prompt has been shown.</span> |
| <Link id="m-popup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/tutorialpromptboard">{"TutorialPromptBoard"}</Link>{" popup"}</code> | <span className="api-desc">The tutorial prompt board to show.</span> |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> | <span className="api-desc">Body text of the follow-up popup.</span> |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> | <span className="api-desc">Title of the follow-up popup.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> | <span className="api-desc">Waits a moment after login, then shows the prompt if allowed.</span> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | <span className="api-desc">Empty.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancelfollowup" /><code>{"private void CancelFollowup()"}</code> | <span className="api-desc">Closes the follow-up popup when the player chooses to join the tutorial.</span> |
| <Link id="m-canshowtutorialprompt" /><code>{"private bool CanShowTutorialPrompt()"}</code> | <span className="api-desc">True when the player hasn't finished the tutorial and the prompted key exists. The key check looks inverted, so the prompt may never show.</span> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/mod/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> | <span className="api-desc">Hooks the prompt board's join button so the follow-up is cancelled.</span> |
| <Link id="m-showprompt" /><code>{"private void ShowPrompt()"}</code> | <span className="api-desc">Saves the prompted key, then shows the tutorial prompt and the skip follow-up popup.</span> |

</details>
