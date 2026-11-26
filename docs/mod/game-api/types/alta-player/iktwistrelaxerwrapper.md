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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"IKTwistRelaxerWrapper()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-twistrelaxer" /><code>{"private TwistRelaxer twistRelaxer"}</code> | <span className="api-desc">Backing field for `TwistRelaxer`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-twistrelaxer-2" /><code>{"TwistRelaxer TwistRelaxer { get; set; }"}</code> | <span className="api-desc">The twist relaxer this drives.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | <span className="api-desc">Relaxes the twist, then runs the base fixed update.</span> |
