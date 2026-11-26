---
title: "AccessibilityFeaturesBoard"
description: "Popup board asking the player whether to turn on accessibility features."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AccessibilityFeaturesBoard

A **class** in `Root.Township`, no namespace.

Popup board asking the player whether to turn on accessibility features. Saves the choice to the game config.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`PopupBoard`](/game-api/types/global-p/popupboard)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AccessibilityFeaturesBoard()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-acceptbutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" acceptButton"}</code> | Button that turns the features on. |
| <Link id="m-acceptedmessage" /><code>{"private string acceptedMessage"}</code> | Message shown after accepting. |
| <Link id="m-closebutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" closeButton"}</code> | Button that closes the board after a choice. |
| <Link id="m-declinebutton" /><code>{"private "}<Link to="/game-api/types/global-p/physicalbutton">{"PhysicalButton"}</Link>{" declineButton"}</code> | Button that turns the features off. |
| <Link id="m-declinedmessage" /><code>{"private string declinedMessage"}</code> | Message shown after declining. |

</details>

## Methods

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-accept" /><code>{"private void Accept()"}</code> | Turns accessibility features on and shows the accepted message. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the accept and decline buttons and hides the close button. |
| <Link id="m-decline" /><code>{"private void Decline()"}</code> | Turns accessibility features off and shows the declined message. |
| <Link id="m-setvalue" /><code>{"private void SetValue(bool settingValue)"}</code> | Sets `HasAccessibilityFeatures` in the game config, notifies listeners and saves. |
| <Link id="m-showclosebutton" /><code>{"private void ShowCloseButton()"}</code> | Hides accept and decline and shows the close button. |

</details>
