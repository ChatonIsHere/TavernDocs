---
title: "CommentAttribute"
description: "Inspector attribute that shows a comment box above a field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommentAttribute

A **class** in `Alta.Attributes`, the global namespace.

Inspector attribute that shows a comment box above a field.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Nested types** [`MessageType`](/mod/game-api/types/assembly-other/commentattribute-messagetype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommentAttribute(string message, float numberOfLines = 3, "}<Link to="/mod/game-api/types/assembly-other/commentattribute-messagetype">{"CommentAttribute.MessageType"}</Link>{" messageType = 0)"}</code> | <span className="api-desc">Creates a `CommentAttribute` from `message`, `numberOfLines` and `messageType`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; private set; }"}</code> | <span className="api-desc">Text shown.</span> |
| <Link id="m-numberoflines" /><code>{"float NumberOfLines { get; private set; }"}</code> | <span className="api-desc">Height of the box in lines. Default 3.</span> |
| <Link id="m-typeofmessage" /><code><Link to="/mod/game-api/types/assembly-other/commentattribute-messagetype">{"CommentAttribute.MessageType"}</Link>{" TypeOfMessage { get; private set; }"}</code> | <span className="api-desc">Icon style: none, info, warning or error.</span> |
