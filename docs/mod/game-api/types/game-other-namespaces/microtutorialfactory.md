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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`IMicroTutorialFactory`](/mod/game-api/types/game-other-namespaces/imicrotutorialfactory)
- **Attributes** `Preserve`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialFactory("}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController, "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem)"}</code> | <span className="api-desc">Creates a `MicroTutorialFactory` from `domainController` and `microTutorialSystem`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-domaincontroller" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/idomaincontroller">{"IDomainController"}</Link>{" domainController"}</code> | <span className="api-desc">Domain controller passed to each tutorial.</span> |
| <Link id="m-microtutorialsystem" /><code>{"private readonly "}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsystem">{"IMicroTutorialSystem"}</Link>{" microTutorialSystem"}</code> | <span className="api-desc">Micro tutorial system passed to each tutorial.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createtutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" CreateTutorial("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Returns a new `MicroTutorial` for the settings and player, using the injected system and domain controller.</span> |
