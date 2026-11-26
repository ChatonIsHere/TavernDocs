---
title: "SerializedInterfaceAttribute"
description: "Property attribute that marks a serialized field as holding an object that must implement a given interface, probably for an inspector picker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedInterfaceAttribute

A **class** in `Alta.Attributes`, the global namespace.

Property attribute that marks a serialized field as holding an object that must implement a given interface, probably for an inspector picker.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SerializedInterfaceAttribute(Type interfaceType)"}</code> | <span className="api-desc">Creates a `SerializedInterfaceAttribute` from `interfaceType`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interfacetype" /><code>{"Type InterfaceType { get; private set; }"}</code> | <span className="api-desc">The required interface. Stays null if the type passed in isn't an interface.</span> |
