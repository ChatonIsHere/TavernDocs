---
title: "MicroTutorialFactory"
description: "Creates MicroTutorial instances for a player."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialFactory

A **class** in `Root.Township`, `ATT.MicroTutorial`.

Creates `MicroTutorial` instances for a player. Registered in the DI container.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IMicroTutorialFactory`](/game-api/types/game-other-namespaces/imicrotutorialfactory)
- **Attributes** `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFactory("}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController, "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem)"}</code> | Creates a `MicroTutorialFactory` from `domainController` and `microTutorialSystem`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domaincontroller" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> | Domain controller passed to each tutorial. |
| <Link id="m-microtutorialsystem" /><code>{"private readonly "}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> | Micro tutorial system passed to each tutorial. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createtutorial" /><code><Link to="/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" CreateTutorial("}<Link to="/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Returns a new `MicroTutorial` for the settings and player, using the injected system and domain controller. |
