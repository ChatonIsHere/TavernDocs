---
title: "AccessibilityFeaturesBoard"
description: "Popup board asking the player whether to turn on accessibility features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibilityFeaturesBoard

A **class** in `Root.Township`, the global namespace.

Popup board asking the player whether to turn on accessibility features. Saves the choice to the game config.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`PopupBoard`](/mod/game-api/types/global-p/popupboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AccessibilityFeaturesBoard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" acceptButton"}</code> | <span className="api-desc">Button that turns the features on.</span> |
| <Link id="m-acceptedmessage" /><code>{"private string acceptedMessage"}</code> | <span className="api-desc">Message shown after accepting.</span> |
| <Link id="m-closebutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" closeButton"}</code> | <span className="api-desc">Button that closes the board after a choice.</span> |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/mod/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" declineButton"}</code> | <span className="api-desc">Button that turns the features off.</span> |
| <Link id="m-declinedmessage" /><code>{"private string declinedMessage"}</code> | <span className="api-desc">Message shown after declining.</span> |

</details>

## Methods

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"private void Accept()"}</code> | <span className="api-desc">Turns accessibility features on and shows the accepted message.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the accept and decline buttons and hides the close button.</span> |
| <Link id="m-decline" /><code>{"private void Decline()"}</code> | <span className="api-desc">Turns accessibility features off and shows the declined message.</span> |
| <Link id="m-setvalue" /><code>{"private void SetValue(bool settingValue)"}</code> | <span className="api-desc">Sets `HasAccessibilityFeatures` in the game config, notifies listeners and saves.</span> |
| <Link id="m-showclosebutton" /><code>{"private void ShowCloseButton()"}</code> | <span className="api-desc">Hides accept and decline and shows the close button.</span> |

</details>
