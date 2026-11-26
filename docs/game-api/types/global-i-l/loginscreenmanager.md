---
title: "LoginScreenManager"
description: "Internal controller for the registration scene: switches off normal startup and offers starting the tutorial, skipping it, or joining a deep link server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LoginScreenManager

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Internal controller for the registration scene: switches off normal startup and offers starting the tutorial, skipping it, or joining a deep link server. Client.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LoginScreenManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isprocessing" /><code>{"static bool IsProcessing { get; set; }"}</code> | Shared busy flag, also used by `LoginAndRegisterHelper`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loaddeeplinkserver" /><code>{"void LoadDeeplinkServer()"}</code> | Marks a first time player and joins the server from the Oculus deep link. |
| <Link id="m-skiptutorial" /><code>{"void SkipTutorial()"}</code> | Goes to the main menu and records a skipped deep link event. |
| <Link id="m-starttutorial" /><code>{"void StartTutorial()"}</code> | Goes to the tutorial. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Marks the scene as a local test and turns off the regular startup actions. |
| <Link id="m-finishloginscreen" /><code>{"private async void FinishLoginScreen(bool isSkippingTutorial)"}</code> | Loads the tutorial, or the main menu if skipped or the tutorial fails to load. Ignored while busy. |

</details>
