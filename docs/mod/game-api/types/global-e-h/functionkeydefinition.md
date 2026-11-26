---
title: "FunctionKeyDefinition"
description: "Inspector entry that binds a keyboard key to a UnityEvent, with an optional on-screen key visual."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FunctionKeyDefinition

A **class** in `Root.Township`, the global namespace.

Inspector entry that binds a keyboard key to a `UnityEvent`, with an optional on-screen key visual.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"FunctionKeyDefinition()"}</code> | <span className="api-desc">Creates a `FunctionKeyDefinition` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hasvisual" /><code>{"bool hasVisual"}</code> | <span className="api-desc">Whether a key visual is shown; the text and transform fields only apply when on.</span> |
| <Link id="m-key" /><code>{"KeyCode key"}</code> | <span className="api-desc">The key that triggers `onPressed`.</span> |
| <Link id="m-keyimage" /><code>{"GameObject keyImage"}</code> | <span className="api-desc">Object used as the key's visual.</span> |
| <Link id="m-onpressed" /><code>{"UnityEvent onPressed"}</code> | <span className="api-desc">Event invoked when the key is pressed.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Position of the key visual.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Rotation of the key visual.</span> |
| <Link id="m-scale" /><code>{"Vector3 scale"}</code> | <span className="api-desc">Scale of the key visual.</span> |
| <Link id="m-text" /><code>{"string text"}</code> | <span className="api-desc">Label shown on the key visual.</span> |

## Used in

Members of other types that take, return or hold a `FunctionKeyDefinition`:

<div className="api-used-in">

[`TouchScreenKeyboard.functionKeys`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-functionkeys), [`TouchScreenKeyboard.MappedFunctionKeys`](/mod/game-api/types/global-t-x/touchscreenkeyboard#m-mappedfunctionkeys).

</div>
