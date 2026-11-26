---
title: "IQuickAccessDynamicIcon"
description: "Implemented by a quick access bubble icon that changes with its action's state."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IQuickAccessDynamicIcon

An **interface** in `Root.Township`, `Alta.QuickAccessActions`.

Implemented by a quick access bubble icon that changes with its action's state.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Derived types** [`MuteNonFriendsActionIcon`](/game-api/types/alta-player/mutenonfriendsactionicon), [`QuickAccessDynamicIcon`](/game-api/types/alta-player/quickaccessdynamicicon)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setupaction" /><code>{"void SetupAction("}<Link to="/game-api/types/alta-player/quickaccessmenuaction">{"QuickAccessMenuAction"}</Link>{" action)"}</code> | Gives the icon the action it shows, so it can follow the action's events. |
