---
title: "IMicroTutorialFactory"
description: "Makes micro tutorial instances."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IMicroTutorialFactory

An **interface** in `Root.Township`, `ATT.MicroTutorial`.

Makes micro tutorial instances. Implemented by `MicroTutorialFactory` and used by the server controller.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Derived types** [`MicroTutorialFactory`](/mod/game-api/types/game-other-namespaces/microtutorialfactory)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createtutorial" /><code><Link to="/mod/game-api/types/game-other-namespaces/imicrotutorial">{"IMicroTutorial"}</Link>{" CreateTutorial("}<Link to="/mod/game-api/types/game-other-namespaces/imicrotutorialsettings">{"IMicroTutorialSettings"}</Link>{" settings, "}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Creates a tutorial for a player from its settings. |

## Used in

Members of other types that take, return or hold a `IMicroTutorialFactory`:

[`ServerController.ServerController`](/mod/game-api/types/game-other-namespaces/servercontroller#m-ctor), [`ServerController.tutorialFactory`](/mod/game-api/types/game-other-namespaces/servercontroller#m-tutorialfactory).
