---
title: "TextButton"
description: "A menu button whose label is drawn by a TextRenderer, kept in step with the button's Label."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextButton

A **class** in `Root.Township`, `Alta.Meta.UI`.

A menu button whose label is drawn by a `TextRenderer`, kept in step with the button's `Label`.

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`ButtonWithEvents`](/mod/game-api/types/alta-menus/buttonwithevents)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextButton()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buttonobject" /><code>{"private GameObject buttonObject"}</code> | <span className="api-desc">The GameObject that `SetButtonLayer` changes.</span> |
| <Link id="m-textrenderer" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" textRenderer"}</code> | <span className="api-desc">The text that shows the label.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setbuttonlayer" /><code>{"void SetButtonLayer(int newLayer)"}</code> | <span className="api-desc">Moves the button object to another physics or render layer.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Copies the label onto the text and keeps it updated when the label changes.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onlabelchanged" /><code>{"private void OnLabelChanged("}<Link to="/mod/game-api/types/alta-menus/button">{"Button"}</Link>{" obj)"}</code> | <span className="api-desc">Copies the new label to the text renderer.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: syncs the label and the text renderer, taking the text when the label is empty.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TextButton`:

<div className="api-used-in">

[`AssistedSpawnCommandAction.DynamicButtonSetup`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-dynamicbuttonsetup), [`AssistedSpawnCommandAction.submitButton`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-submitbutton), [`ServerMultiCommandAction.buttonPrefab`](/mod/game-api/types/alta-menus/servermulticommandaction#m-buttonprefab), [`ServerMultiCommandAction.DynamicButtonSetup`](/mod/game-api/types/alta-menus/servermulticommandaction#m-dynamicbuttonsetup), [`DevToolsBoard.nextPageButton`](/mod/game-api/types/alta-player/devtoolsboard#m-nextpagebutton), [`DevToolsBoard.previousPageButton`](/mod/game-api/types/alta-player/devtoolsboard#m-previouspagebutton), [`DevToolsBoard.SafeSubscribe`](/mod/game-api/types/alta-player/devtoolsboard#m-safesubscribe), [`DevToolsBoard.showConsoleButton`](/mod/game-api/types/alta-player/devtoolsboard#m-showconsolebutton).

</div>
