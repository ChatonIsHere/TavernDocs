---
title: "PlayTutorialChecker"
description: "class PlayTutorialChecker in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayTutorialChecker

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayTutorialChecker()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-followuppopup" /><code>{"private "}<Link to="/game-api/types/global-p/popupmanager-ipopupconfig">{"PopupManager.IPopupConfig"}</Link>{" followupPopup"}</code> |
| <Link id="m-haspromptedfortutorialkey" /><code>{"private const string HasPromptedForTutorialKey"}</code> |
| <Link id="m-popup" /><code>{"private "}<Link to="/game-api/types/global-t-x/tutorialpromptboard">{"TutorialPromptBoard"}</Link>{" popup"}</code> |
| <Link id="m-skiptutorialfollowupmessage" /><code>{"private string skipTutorialFollowupMessage"}</code> |
| <Link id="m-skiptutorialfollowuptitle" /><code>{"private string skipTutorialFollowupTitle"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-loggedin" /><code>{"protected override async void LoggedIn()"}</code> |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-cancelfollowup" /><code>{"private void CancelFollowup()"}</code> |
| <Link id="m-canshowtutorialprompt" /><code>{"private bool CanShowTutorialPrompt()"}</code> |
| <Link id="m-setup" /><code>{"private void Setup("}<Link to="/game-api/types/global-i-l/ipopupboard">{"IPopupBoard"}</Link>{" board)"}</code> |
| <Link id="m-showprompt" /><code>{"private void ShowPrompt()"}</code> |

</details>
