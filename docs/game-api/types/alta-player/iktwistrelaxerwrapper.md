---
title: "IKTwistRelaxerWrapper"
description: "Character component that runs a Final IK TwistRelaxer as part of the character's fixed update."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IKTwistRelaxerWrapper

A **class** in `Root.Township`, `Alta.Character`.

Character component that runs a Final IK `TwistRelaxer` as part of the character's fixed update.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IKTwistRelaxerWrapper()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-twistrelaxer" /><code>{"private TwistRelaxer twistRelaxer"}</code> | Backing field for `TwistRelaxer`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-twistrelaxer-2" /><code>{"TwistRelaxer TwistRelaxer { get; set; }"}</code> | The twist relaxer this drives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Relaxes the twist, then runs the base fixed update. |
