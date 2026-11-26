---
title: "CommentAttribute"
description: "Inspector attribute that shows a comment box above a field."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommentAttribute

A **class** in `Alta.Attributes`, no namespace.

Inspector attribute that shows a comment box above a field.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`
- **Nested types** [`MessageType`](/game-api/types/assembly-other/commentattribute-messagetype)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CommentAttribute(string message, float numberOfLines = 3, "}<Link to="/game-api/types/assembly-other/commentattribute-messagetype">{"CommentAttribute.MessageType"}</Link>{" messageType = 0)"}</code> | Creates a `CommentAttribute` from `message`, `numberOfLines` and `messageType`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-message" /><code>{"string Message { get; private set; }"}</code> | Text shown. |
| <Link id="m-numberoflines" /><code>{"float NumberOfLines { get; private set; }"}</code> | Height of the box in lines. Default 3. |
| <Link id="m-typeofmessage" /><code><Link to="/game-api/types/assembly-other/commentattribute-messagetype">{"CommentAttribute.MessageType"}</Link>{" TypeOfMessage { get; private set; }"}</code> | Icon style: none, info, warning or error. |
