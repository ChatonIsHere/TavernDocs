---
title: "MainMenuCustomizationInterface"
description: "Sets up the character customization room in the main menu when the player logs in."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MainMenuCustomizationInterface

A **class** in `Root.Township`, `Alta.Customization`.

Sets up the character customization room in the main menu when the player logs in. Client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`LoggedInTool`](/game-api/types/global-i-l/loggedintool)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MainMenuCustomizationInterface()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-customizationinterface" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" customizationInterface"}</code> | The customization manager for the room. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loggedin" /><code>{"protected override void LoggedIn()"}</code> | Calls `InitializeRoom`. |
| <Link id="m-loggedout" /><code>{"protected override void LoggedOut()"}</code> | Hides the customization room. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Saves the current look into `StaticRandomCustomization` for next time. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-initializeroom" /><code>{"private async void InitializeRoom()"}</code> | Works out the subscriber status, loads owned cosmetics and starts the room, then randomizes the look or reloads the saved random one. |

</details>
