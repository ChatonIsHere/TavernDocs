---
title: "TreeChopDetector"
description: "Fails a growth stage when its tree is chopped down to a small size, so young trees that are cut stop growing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeChopDetector

A **class** in `Root.Township`, the global namespace.

Fails a growth stage when its tree is chopped down to a small size, so young trees that are cut stop growing.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TreeChopDetector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-growthstage" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{" growthStage"}</code> | <span className="api-desc">The growth stage that is failed.</span> |
| <Link id="m-minsizetostunt" /><code>{"private int minSizeToStunt"}</code> | <span className="api-desc">Tree size at or below which a chop stunts it.</span> |
| <Link id="m-tree2" /><code>{"private "}<Link to="/mod/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree2"}</code> | <span className="api-desc">The woodcut tree whose chops are watched.</span> |

</details>

## Methods

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Subscribes to chops if the growth stage is set up, and listens for setup changes.</span> |
| <Link id="m-handlesetupchanged" /><code>{"private void HandleSetupChanged("}<Link to="/mod/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{" obj)"}</code> | <span className="api-desc">Re-subscribes or unsubscribes from chops when the growth stage's setup changes.</span> |
| <Link id="m-starthandlingchopped" /><code>{"private void StartHandlingChopped(bool isSubscribing)"}</code> | <span className="api-desc">Unhooks the tree's chop event and hooks it again if `isSubscribing` is true.</span> |
| <Link id="m-treechopped" /><code>{"private void TreeChopped()"}</code> | <span className="api-desc">Fails the growth stage (without destroying) if the tree's total size is at or below `minSizeToStunt`.</span> |

</details>
