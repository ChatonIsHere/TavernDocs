---
title: "TextButton"
description: "class TextButton in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextButton

A **class** in `Root.Township`, `Alta.Meta.UI`.

- **Listed in** [Menus, UI and platforms](/game-api/types/alta-menus)
- **Inherits or implements** [`ButtonWithEvents`](/game-api/types/alta-menus/buttonwithevents)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TextButton()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-buttonobject" /><code>{"private GameObject buttonObject"}</code> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-setbuttonlayer" /><code>{"void SetButtonLayer(int newLayer)"}</code> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onlabelchanged" /><code>{"private void OnLabelChanged("}<Link to="/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `TextButton`:

[`AssistedSpawnCommandAction.DynamicButtonSetup`](/game-api/types/alta-menus/assistedspawncommandaction#m-dynamicbuttonsetup), [`AssistedSpawnCommandAction.submitButton`](/game-api/types/alta-menus/assistedspawncommandaction#m-submitbutton), [`ServerMultiCommandAction.buttonPrefab`](/game-api/types/alta-menus/servermulticommandaction#m-buttonprefab), [`ServerMultiCommandAction.DynamicButtonSetup`](/game-api/types/alta-menus/servermulticommandaction#m-dynamicbuttonsetup), [`DevToolsBoard.nextPageButton`](/game-api/types/alta-player/devtoolsboard#m-nextpagebutton), [`DevToolsBoard.previousPageButton`](/game-api/types/alta-player/devtoolsboard#m-previouspagebutton), [`DevToolsBoard.SafeSubscribe`](/game-api/types/alta-player/devtoolsboard#m-safesubscribe), [`DevToolsBoard.showConsoleButton`](/game-api/types/alta-player/devtoolsboard#m-showconsolebutton).
