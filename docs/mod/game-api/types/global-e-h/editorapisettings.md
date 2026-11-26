---
title: "EditorApiSettings"
description: "Global settings for how the editor talks to the web API: offline mode, which endpoint to use, and an optional credentials override file."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditorApiSettings

A **class** in `Root.Township`, the global namespace.

Global settings for how the editor talks to the web API: offline mode, which endpoint to use, and an optional credentials override file. Read through `GlobalSettings<EditorApiSettings>.Instance`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** [`GlobalSettings<EditorApiSettings>`](/mod/game-api/types/assembly-other/globalsettings-t)
- **Derived types** [`EditorApiSettings`](/mod/game-api/types/global-e-h/editorapisettings)
- **Attributes** `GlobalSettings`, `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditorApiSettings()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-credentialoverridefile" /><code>{"private TextAsset credentialOverrideFile"}</code> | <span className="api-desc">Text asset holding the override credentials JSON.</span> |
| <Link id="m-customendpoint" /><code>{"private string customEndpoint"}</code> | <span className="api-desc">Backing field for `CustomEndpoint`.</span> |
| <Link id="m-defaulteditoroverridecredentialsfilename" /><code>{"private const string DefaultEditorOverrideCredentialsFilename"}</code> | <span className="api-desc">Default file name for the override credentials, `MyEditorCredentials.json`.</span> |
| <Link id="m-defaulteditoroverridecredentialspath" /><code>{"private const string DefaultEditorOverrideCredentialsPath"}</code> | <span className="api-desc">Default asset folder for the override credentials file.</span> |
| <Link id="m-endpointineditor" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" endpointInEditor"}</code> | <span className="api-desc">Backing field for `EndpointInEditor`.</span> |
| <Link id="m-isignoringinternetoffline" /><code>{"private bool isIgnoringInternetOffline"}</code> | <span className="api-desc">Backing field for `IsIgnoringInternetOffline`.</span> |
| <Link id="m-isoffline" /><code>{"private bool isOffline"}</code> | <span className="api-desc">Backing field for `IsOffline`.</span> |
| <Link id="m-isoverridingcredentialineditor" /><code>{"private bool isOverridingCredentialInEditor"}</code> | <span className="api-desc">Backing field for `IsOverridingCredentialInEditor`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-customendpoint-2" /><code>{"string CustomEndpoint { get; }"}</code> | <span className="api-desc">URL used when the editor endpoint is set to custom.</span> |
| <Link id="m-endpointineditor-2" /><code><Link to="/mod/game-api/types/global-a-b/apiendpoint">{"ApiEndpoint"}</Link>{" EndpointInEditor { get; }"}</code> | <span className="api-desc">Which API endpoint the editor uses.</span> |
| <Link id="m-isignoringinternetoffline-2" /><code>{"bool IsIgnoringInternetOffline { get; }"}</code> | <span className="api-desc">Whether the editor ignores the internet being offline.</span> |
| <Link id="m-isoffline-2" /><code>{"bool IsOffline { get; }"}</code> | <span className="api-desc">Whether the editor runs without the API.</span> |
| <Link id="m-isoverridingcredentialineditor-2" /><code>{"static bool IsOverridingCredentialInEditor { get; }"}</code> | <span className="api-desc">True only in the editor when the override credentials option is on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getoverridecredentials" /><code>{"static "}<Link to="/mod/game-api/types/global-e-h/editoroverridecredentials">{"EditorOverrideCredentials"}</Link>{" GetOverrideCredentials()"}</code> | <span className="api-desc">Parses the override credentials JSON file, throwing if there is none.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultcredentialoverridefile" /><code>{"private static void CreateDefaultCredentialOverrideFile()"}</code> | <span className="api-desc">Empty in this build, so `GetOverrideCredentials` throws when no file is set.</span> |

</details>
