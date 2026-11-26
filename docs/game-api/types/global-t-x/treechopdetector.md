---
title: "TreeChopDetector"
description: "Fails a growth stage when its tree is chopped down to a small size, so young trees that are cut stop growing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TreeChopDetector

A **class** in `Root.Township`, no namespace.

Fails a growth stage when its tree is chopped down to a small size, so young trees that are cut stop growing.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TreeChopDetector()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-growthstage" /><code>{"private "}<Link to="/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{" growthStage"}</code> | The growth stage that is failed. |
| <Link id="m-minsizetostunt" /><code>{"private int minSizeToStunt"}</code> | Tree size at or below which a chop stunts it. |
| <Link id="m-tree2" /><code>{"private "}<Link to="/game-api/types/alta-crafting/woodcuttree">{"WoodcutTree"}</Link>{" tree2"}</code> | The woodcut tree whose chops are watched. |

</details>

## Methods

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes to chops if the growth stage is set up, and listens for setup changes. |
| <Link id="m-handlesetupchanged" /><code>{"private void HandleSetupChanged("}<Link to="/game-api/types/global-e-h/growthstagecomponent">{"GrowthStageComponent"}</Link>{" obj)"}</code> | Re-subscribes or unsubscribes from chops when the growth stage's setup changes. |
| <Link id="m-starthandlingchopped" /><code>{"private void StartHandlingChopped(bool isSubscribing)"}</code> | Unhooks the tree's chop event and hooks it again if `isSubscribing` is true. |
| <Link id="m-treechopped" /><code>{"private void TreeChopped()"}</code> | Fails the growth stage (without destroying) if the tree's total size is at or below `minSizeToStunt`. |

</details>
