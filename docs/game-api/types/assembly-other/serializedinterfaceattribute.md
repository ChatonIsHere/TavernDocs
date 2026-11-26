---
title: "SerializedInterfaceAttribute"
description: "Property attribute that marks a serialized field as holding an object that must implement a given interface, probably for an inspector picker."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SerializedInterfaceAttribute

A **class** in `Alta.Attributes`, no namespace.

Property attribute that marks a serialized field as holding an object that must implement a given interface, probably for an inspector picker.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Inherits or implements** `PropertyAttribute`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SerializedInterfaceAttribute(Type interfaceType)"}</code> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-interfacetype" /><code>{"Type InterfaceType { get; private set; }"}</code> | The required interface. Stays null if the type passed in isn't an interface. |
