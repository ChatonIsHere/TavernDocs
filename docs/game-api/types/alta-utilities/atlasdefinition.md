---
title: "AtlasDefinition"
description: "Asset describing a texture atlas: which materials it combines into one baked material, and where each sits in the atlas."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AtlasDefinition

A **class** in `Root.Township`, `Alta.Utilities.Atlas`.

Asset describing a texture atlas: which materials it combines into one baked material, and where each sits in the atlas. `ApplyTo` swaps renderers over to the baked material and rewrites their mesh UVs. Mostly a build and editor tool.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Inherits or implements** `ScriptableObject`
- **Nested types** [`AtlasedMaterial`](/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial), [`MaterialReferences`](/game-api/types/alta-utilities/atlasdefinition-materialreferences)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AtlasDefinition()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-atlasedmaterialname" /><code>{"string atlasedMaterialName"}</code> | Base name for the atlas's files. |
| <Link id="m-atlassize" /><code>{"int atlasSize"}</code> | Atlas texture size in pixels (a power of two). |
| <Link id="m-bakedmaterial" /><code>{"Material bakedMaterial"}</code> | The combined material renderers are switched to. |
| <Link id="m-freedetails" /><code>{"string freeDetails"}</code> | Text describing how full the atlas is. |
| <Link id="m-generalpaddingvalue" /><code>{"int generalPaddingValue"}</code> | Default padding between atlas entries. |
| <Link id="m-isdisablingalphaondifuse" /><code>{"bool isDisablingAlphaOnDifuse"}</code> | Turns off alpha in the diffuse atlas. Forced on for metal atlases. |
| <Link id="m-isforcingnoemission" /><code>{"bool isForcingNoEmission"}</code> | Leaves emission out of the atlas. |
| <Link id="m-materials" /><code>{"List<"}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{"> materials"}</code> | The materials in the atlas, each with its rectangle, scale and padding. |
| <Link id="m-needstobake" /><code>{"bool needsToBake"}</code> | Set when the atlas needs to be baked again. |
| <Link id="m-priority" /><code>{"uint priority"}</code> | Order among atlases. |
| <Link id="m-smallesttextureheight" /><code>{"int smallestTextureHeight"}</code> | Height of the smallest texture in the atlas. |
| <Link id="m-smallesttexturewidth" /><code>{"int smallestTextureWidth"}</code> | Width of the smallest texture in the atlas. |
| <Link id="m-target" /><code><Link to="/game-api/types/alta-utilities/atlastarget">{"AtlasTarget"}</Link>{" target"}</code> | Flags for which builds or uses this atlas targets. |
| <Link id="m-type" /><code><Link to="/game-api/types/alta-utilities/atlastype">{"AtlasType"}</Link>{" type"}</code> | Kind of atlas, which picks the atlased shader (common, foliage, metal). |
| <Link id="m-uvfixtype" /><code><Link to="/game-api/types/alta-utilities/uvfixtype">{"UVFixType"}</Link>{" uvFixType"}</code> | How UVs are remapped: through an extra UV channel (`Texcoord`) or by rewriting UV 0 (`None`). |

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bakedmeshes" /><code>{"private Dictionary<int, Mesh> bakedMeshes"}</code> | Cache of atlased meshes keyed by a mesh and material hash, so each pair is only rebuilt once. Cleared by `ClearBakedMeshes`. |
| <Link id="m-colors" /><code>{"private static List<Color> colors"}</code> | Shared scratch list of colours. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-materialreferences" /><code>{"private Dictionary<Material, "}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{"> materialReferences"}</code> | Lookup from source material to its `AtlasedMaterial` entry, built by `PrepareReferences`. |
| <Link id="m-offsetscaleuvs" /><code>{"private static List<Vector4> offsetScaleUVs"}</code> | Shared scratch list of UVs reused by `FixMeshUVs`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-basepath" /><code>{"static string BasePath { get; }"}</code> | Resource folder for atlases: `Atlases/Standalone/` or `Atlases/Android/`. |
| <Link id="m-definitionspath" /><code>{"static string DefinitionsPath { get; }"}</code> | Folder for atlas definitions under `BasePath`. |

<details>
<summary>6 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-horizontaltakensize" /><code>{"private int HorizontalTakenSize { get; }"}</code> | How many of the smallest textures fit across the atlas width. |
| <Link id="m-materialspath" /><code>{"private static string MaterialsPath { get; }"}</code> | Project folder for baked atlas materials, under `ProjectPath`. |
| <Link id="m-meshespath" /><code>{"private static string MeshesPath { get; }"}</code> | Project folder for baked atlas meshes, under `ProjectPath`. |
| <Link id="m-projectpath" /><code>{"private static string ProjectPath { get; }"}</code> | `Assets/` plus `BasePath`, which differs for Android and standalone. |
| <Link id="m-texturespath" /><code>{"private static string TexturesPath { get; }"}</code> | Project folder for baked atlas textures, under `ProjectPath`. |
| <Link id="m-verticaltakensize" /><code>{"private int VerticalTakenSize { get; }"}</code> | How many of the smallest textures fit down the atlas height. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applyto" /><code>{"bool ApplyTo(IEnumerable<Renderer> renderers, bool isSavingMeshAsAsset = false, bool isSavingToTemporaryFolder = false)"}</code> | Points matching renderers (or one mesh) at the baked material, using UV-fixed mesh copies that are cached. True if anything changed. |
| <Link id="m-applyto-2" /><code>{"bool ApplyTo(Mesh originalMesh, Material baseMaterial, out Mesh resultMesh, bool isSavingToTemporaryFolder = false)"}</code> | Points matching renderers (or one mesh) at the baked material, using UV-fixed mesh copies that are cached. True if anything changed. |
| <Link id="m-autoestimatesize" /><code>{"void AutoEstimateSize(bool forceRebake = true)"}</code> | Works out the atlas size from the materials' texture sizes and fills in `freeDetails`. Marks it for rebake by default. |
| <Link id="m-bake" /><code>{"void Bake()"}</code> | Runs `AutoEstimateSize` if the atlas has a name and materials. It does not draw the atlas itself. |
| <Link id="m-clearbakedmeshes" /><code>{"void ClearBakedMeshes()"}</code> | Forgets the cached UV-fixed meshes. |
| <Link id="m-filterrenderers" /><code>{"IEnumerable<Renderer> FilterRenderers(IEnumerable<Renderer> renderers) (iterator)"}</code> | Yields the renderers that use any of the atlas's materials (once per matching material). |
| <Link id="m-getmaterialrect" /><code>{"bool GetMaterialRect(Material material, out "}<Link to="/game-api/types/alta-utilities/atlasdefinition-atlasedmaterial">{"AtlasDefinition.AtlasedMaterial"}</Link>{" reference)"}</code> | Finds the atlas entry for a material. |
| <Link id="m-istargeting" /><code>{"bool IsTargeting("}<Link to="/game-api/types/alta-utilities/atlastarget">{"AtlasTarget"}</Link>{" target)"}</code> | True if the atlas is for the given target. |
| <Link id="m-preparereferences" /><code>{"void PrepareReferences()"}</code> | Rebuilds the material lookup and clears the mesh cache. |
| <Link id="m-preparereferencesifneeded" /><code>{"void PrepareReferencesIfNeeded()"}</code> | Builds the material lookup if it is empty. |
| <Link id="m-updateshader" /><code>{"void UpdateShader()"}</code> | Sets the baked material's shader from the atlas type. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-blit" /><code>{"private void Blit(bool rendersEmission, RenderTexture diffuseRT, RenderTexture normalRT, RenderTexture emissionRT, Texture2D defaultWhiteTexture, Texture2D defaultNormal, Texture2D defaultEmission, Vector4 rect, Vector4 interiorRect, Material material)"}</code> | Picks the shader-specific blit for a material and draws its textures into the atlas render textures. Logs an error for unmapped shaders. |
| <Link id="m-clearrt" /><code>{"private void ClearRT(RenderTexture renderTexture)"}</code> | Clears a render texture to transparent, restoring the previously active one. |
| <Link id="m-deletetexture" /><code>{"private void DeleteTexture(string textureName)"}</code> | Deletes the atlas PNG for a texture name from disk. The one-argument overload is empty. |
| <Link id="m-deletetexture-2" /><code>{"private void DeleteTexture(string textureBasePath, string textureName)"}</code> | Deletes the atlas PNG for a texture name from disk. The one-argument overload is empty. |
| <Link id="m-fixmeshuvs" /><code>{"private Mesh FixMeshUVs(List<int> triangles, Vector4 offsetScale, Mesh workingMesh, bool hasMultipleSubmeshes, int subMeshIndex, bool isOriginal)"}</code> | Rewrites a mesh's UVs for the atlas rect: writes offset/scale into UV channel 3, or remaps UV0, by `uvFixType`. Clones originals first. |
| <Link id="m-getshader" /><code>{"private Shader GetShader()"}</code> | Finds the hidden atlased shader for `type`, adding a `Texcoord` suffix for that UV mode. Used by `UpdateShader`. |
| <Link id="m-savetofile" /><code>{"private bool SaveToFile(string basePath, string textureName, RenderTexture renderTexture, bool isLinear, TextureFormat format = 4)"}</code> | Reads a render texture back to a PNG on disk. Returns false and writes nothing if every pixel is empty. |
| <Link id="m-settexture" /><code>{"private void SetTexture(string textureName, bool isNormal)"}</code> | Empty in this build. |

</details>

## Used in

Members of other types that take, return or hold a `AtlasDefinition`:

[`MeshPlacementData.BakeAtlas`](/game-api/types/alta-crafting/meshplacementdata#m-bakeatlas), [`MeshPlacementData.forcedAtlasDefinition`](/game-api/types/alta-crafting/meshplacementdata#m-forcedatlasdefinition), [`TreeAttachment.GenerateRenderers`](/game-api/types/alta-crafting/treeattachment#m-generaterenderers), [`TreeSpecies.FixMaterials`](/game-api/types/alta-crafting/treespecies#m-fixmaterials), [`WoodcutTreeBaker.attachmentDefinitions`](/game-api/types/alta-crafting/woodcuttreebaker#m-attachmentdefinitions), [`WoodcutTreeBaker.trunkDefinitions`](/game-api/types/alta-crafting/woodcuttreebaker#m-trunkdefinitions), [`ForcedAtlasDefinition.androidDefinition`](/game-api/types/global-e-h/forcedatlasdefinition#m-androiddefinition), [`ForcedAtlasDefinition.standaloneDefinition`](/game-api/types/global-e-h/forcedatlasdefinition#m-standalonedefinition), [`PhysicalMaterial.Setup`](/game-api/types/global-p/physicalmaterial#m-setup), [`PhysicalMaterial.MaterialChannel.SetupOffsetScale`](/game-api/types/global-p/physicalmaterial-materialchannel#m-setupoffsetscale), [`PooledMeshReplaceObjectDefinition.Bake`](/game-api/types/global-p/pooledmeshreplaceobjectdefinition#m-bake).
