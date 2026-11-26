---
title: "FunctionKeyDefinition"
description: "Inspector entry that binds a keyboard key to a UnityEvent, with an optional on-screen key visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FunctionKeyDefinition

A **class** in `Root.Township`, no namespace.

Inspector entry that binds a keyboard key to a `UnityEvent`, with an optional on-screen key visual.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FunctionKeyDefinition()"}</code> | Creates a `FunctionKeyDefinition` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasvisual" /><code>{"bool hasVisual"}</code> | Whether a key visual is shown; the text and transform fields only apply when on. |
| <Link id="m-key" /><code>{"KeyCode key"}</code> | The key that triggers `onPressed`. |
| <Link id="m-keyimage" /><code>{"GameObject keyImage"}</code> | Object used as the key's visual. |
| <Link id="m-onpressed" /><code>{"UnityEvent onPressed"}</code> | Event invoked when the key is pressed. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Position of the key visual. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Rotation of the key visual. |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | Scale of the key visual. |
| <Link id="m-text" /><code>{"string text"}</code> | Label shown on the key visual. |

## Used in

Members of other types that take, return or hold a `FunctionKeyDefinition`:

[`TouchScreenKeyboard.functionKeys`](/game-api/types/global-t-x/touchscreenkeyboard#m-functionkeys), [`TouchScreenKeyboard.MappedFunctionKeys`](/game-api/types/global-t-x/touchscreenkeyboard#m-mappedfunctionkeys).
