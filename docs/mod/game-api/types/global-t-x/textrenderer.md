---
title: "TextRenderer"
description: "Draws 3D text in the world (signs, labels, dock counts) by building a mesh per letter from a TextFont."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextRenderer

A **class** in `Root.Township`, the global namespace.

Draws 3D text in the world (signs, labels, dock counts) by building a mesh per letter from a `TextFont`. Client side visuals only: on a headless server setting `Text` stores the string but builds nothing.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`, [`IBakeable`](/mod/game-api/types/global-i-l/ibakeable), [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Nested types** [`AndroidTextRendererQueue`](/mod/game-api/types/global-t-x/textrenderer-androidtextrendererqueue), [`TextRendererDistanceChecker`](/mod/game-api/types/global-t-x/textrenderer-textrendererdistancechecker), [`TextVerticalAlignment`](/mod/game-api/types/global-t-x/textrenderer-textverticalalignment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextRenderer()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>43 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | <span className="api-desc">Colour applied to letters as they're built; colour tags change it mid-line.</span> |
| <Link id="m-actualtext" /><code>{"private string actualText"}</code> | <span className="api-desc">The text currently built, so a refresh with the same text is skipped.</span> |
| <Link id="m-alignment" /><code>{"private TextAlignment alignment"}</code> | <span className="api-desc">Backing field for `Alignment`.</span> |
| <Link id="m-androidmaterial" /><code>{"private Material androidMaterial"}</code> | <span className="api-desc">Material used on Android.</span> |
| <Link id="m-androidtintcolor" /><code>{"private Color androidTintColor"}</code> | <span className="api-desc">Tint used on Android.</span> |
| <Link id="m-bestfittowidth" /><code>{"private bool bestFitToWidth"}</code> | <span className="api-desc">Single-line only: scales the text to fit `maxWidth`, within `minScale` and `maxScale`.</span> |
| <Link id="m-cachedtransform" /><code>{"private Transform cachedTransform"}</code> | <span className="api-desc">Cached transform, used by the distance checker.</span> |
| <Link id="m-coloredmaterials" /><code>{"private static readonly Dictionary<int, Material> coloredMaterials"}</code> | <span className="api-desc">Shared cache of tinted material copies, keyed by material and colour.</span> |
| <Link id="m-coloredmeshes" /><code>{"private static readonly Dictionary<int, Mesh> coloredMeshes"}</code> | <span className="api-desc">Shared cache of vertex-coloured mesh copies, keyed by mesh and colour.</span> |
| <Link id="m-currentcenter" /><code>{"private Vector2 currentCenter"}</code> | <span className="api-desc">Backing field for `CurrentCenter`.</span> |
| <Link id="m-font" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" font"}</code> | <span className="api-desc">Backing field for `Font`.</span> |
| <Link id="m-generated" /><code>{"private List<Mesh> generated"}</code> | <span className="api-desc">Meshes made by this renderer, cleaned on destroy.</span> |
| <Link id="m-haslinelimit" /><code>{"private bool hasLineLimit"}</code> | <span className="api-desc">Multi-line only: whether `maxLines` applies.</span> |
| <Link id="m-htmltagregex" /><code>{"private static readonly Regex htmlTagRegex"}</code> | <span className="api-desc">Regex that finds `<c:colour>` and closing tags in the text.</span> |
| <Link id="m-ignoredchars" /><code>{"private static readonly char[] ignoredChars"}</code> | <span className="api-desc">Characters that don't log a warning when the font lacks them.</span> |
| <Link id="m-isdelayingineditor" /><code>{"private bool isDelayingInEditor"}</code> | <span className="api-desc">Editor: makes the first refresh call wait, so edits are batched.</span> |
| <Link id="m-ismerging" /><code>{"private bool isMerging"}</code> | <span className="api-desc">Builds each line as one merged mesh instead of an object per letter. Always on for baked text.</span> |
| <Link id="m-ismono" /><code>{"private bool isMono"}</code> | <span className="api-desc">True while inside a `\u0002` monospace section.</span> |
| <Link id="m-ismultiline" /><code>{"private bool isMultiLine"}</code> | <span className="api-desc">Wraps the text onto several lines at `lineWidth`.</span> |
| <Link id="m-isrefreshing" /><code>{"private bool isRefreshing"}</code> | <span className="api-desc">Inspector button that calls `DebugRefresh`.</span> |
| <Link id="m-isstatic" /><code>{"private bool isStatic"}</code> | <span className="api-desc">The text never moves, so the distance checker caches its position.</span> |
| <Link id="m-isstatictext" /><code>{"private bool isStaticText"}</code> | <span className="api-desc">Bakes the text during prefab bake and deletes the component.</span> |
| <Link id="m-linespacing" /><code>{"private float lineSpacing"}</code> | <span className="api-desc">Vertical gap between lines.</span> |
| <Link id="m-linewidth" /><code>{"private float lineWidth"}</code> | <span className="api-desc">Wrap width for multi-line text, before scale.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-material" /><code>{"private Material material"}</code> | <span className="api-desc">Material used on non-Android platforms.</span> |
| <Link id="m-maxlines" /><code>{"private int maxLines"}</code> | <span className="api-desc">Most lines shown when `hasLineLimit` is on.</span> |
| <Link id="m-maxlodlevel" /><code>{"private int maxLODLevel"}</code> | <span className="api-desc">How many LOD levels of `staticBatchedLODGroup` the baked text joins.</span> |
| <Link id="m-maxrenderdistancesquared" /><code>{"private float maxRenderDistanceSquared"}</code> | <span className="api-desc">Squared distance from the local player beyond which the text hides; 0 means always shown.</span> |
| <Link id="m-maxscale" /><code>{"private float maxScale"}</code> | <span className="api-desc">Largest scale best fit may use.</span> |
| <Link id="m-maxwidth" /><code>{"private float maxWidth"}</code> | <span className="api-desc">Width best fit scales the text to.</span> |
| <Link id="m-meshcoloring" /><code>{"private static readonly List<Color> meshColoring"}</code> | <span className="api-desc">Scratch list of vertex colours used by `GetMeshForColor`.</span> |
| <Link id="m-minscale" /><code>{"private float minScale"}</code> | <span className="api-desc">Smallest scale best fit may use.</span> |
| <Link id="m-renderers" /><code>{"private readonly HashSet<Renderer> renderers"}</code> | <span className="api-desc">Renderers created for the current text.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |
| <Link id="m-shadowcastingmode" /><code>{"private ShadowCastingMode shadowCastingMode"}</code> | <span className="api-desc">Shadow mode for the letter renderers.</span> |
| <Link id="m-spacing" /><code>{"private float spacing"}</code> | <span className="api-desc">Extra space added to each character's advance.</span> |
| <Link id="m-staticbatchedlodgroup" /><code>{"private LODGroup staticBatchedLODGroup"}</code> | <span className="api-desc">LOD group the baked text renderers are added to during static batching.</span> |
| <Link id="m-supportshtmltags" /><code>{"private bool supportsHTMLTags"}</code> | <span className="api-desc">Backing field for `SupportsHtmlTags`; enables `<c:colour>` tags, which need a vertex colour material.</span> |
| <Link id="m-text" /><code>{"private string text"}</code> | <span className="api-desc">Backing field for `Text`.</span> |
| <Link id="m-tintcolor" /><code>{"private Color tintColor"}</code> | <span className="api-desc">Tint used on non-Android platforms.</span> |
| <Link id="m-useparentlayer" /><code>{"private bool useParentLayer"}</code> | <span className="api-desc">Puts the generated objects on this object's layer.</span> |
| <Link id="m-verticalalignment" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer-textverticalalignment">{"TextRenderer.TextVerticalAlignment"}</Link>{" verticalAlignment"}</code> | <span className="api-desc">Multi-line only: top, centre or bottom alignment of the block.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-alignment-2" /><code>{"TextAlignment Alignment { get; set; }"}</code> | <span className="api-desc">Horizontal alignment (left, centre, right). Takes effect on the next refresh.</span> |
| <Link id="m-color" /><code>{"Color Color { get; set; }"}</code> | <span className="api-desc">Tint colour (a separate value on Android). Setting a new colour forces a rebuild.</span> |
| <Link id="m-currentcenter-2" /><code>{"Vector2 CurrentCenter { get; }"}</code> | <span className="api-desc">Centre of the rendered text in local space, worked out on the last rebuild.</span> |
| <Link id="m-currentheight" /><code>{"float CurrentHeight { get; private set; }"}</code> | <span className="api-desc">Height of the rendered text after scaling, from the last rebuild.</span> |
| <Link id="m-currentlinewidth" /><code>{"float CurrentLineWidth { get; private set; }"}</code> | <span className="api-desc">Width of the rendered line before scaling, from the last rebuild.</span> |
| <Link id="m-currentlinewidthscaled" /><code>{"float CurrentLineWidthScaled { get; }"}</code> | <span className="api-desc">`CurrentLineWidth` times `Scale`.</span> |
| <Link id="m-editormaterial" /><code>{"Material EditorMaterial { set; }"}</code> | <span className="api-desc">Write only. Sets both the normal and Android material.</span> |
| <Link id="m-editortintcolor" /><code>{"Color EditorTintColor { set; }"}</code> | <span className="api-desc">Write only. Sets both the normal and Android tint colour.</span> |
| <Link id="m-font-2" /><code><Link to="/mod/game-api/types/global-t-x/textfont">{"TextFont"}</Link>{" Font { get; set; }"}</code> | <span className="api-desc">The `TextFont` used to build letters.</span> |
| <Link id="m-isduringeditorbake" /><code>{"bool IsDuringEditorBake { get; set; }"}</code> | <span className="api-desc">Set while the text is being baked into static meshes at build time. Clearing is skipped during it.</span> |
| <Link id="m-isqueued" /><code>{"bool IsQueued { get; private set; }"}</code> | <span className="api-desc">Android only: true while the text waits in the shared queue that spreads rebuilds over frames.</span> |
| <Link id="m-isvisible" /><code>{"bool IsVisible { get; private set; }"}</code> | <span className="api-desc">Whether the text is shown. With a max render distance set, it turns off when the local player is far away.</span> |
| <Link id="m-material-2" /><code>{"Material Material { get; }"}</code> | <span className="api-desc">Material for the letters, with a separate one on Android.</span> |
| <Link id="m-maxlines-2" /><code>{"int MaxLines { get; set; }"}</code> | <span className="api-desc">Line limit for multi-line text. Unlimited unless the line limit option is on.</span> |
| <Link id="m-maxscale-2" /><code>{"float MaxScale { get; set; }"}</code> | <span className="api-desc">Largest scale best fit to width may use.</span> |
| <Link id="m-maxwidth-2" /><code>{"float MaxWidth { get; set; }"}</code> | <span className="api-desc">Width best fit to width scales the text into.</span> |
| <Link id="m-minscale-2" /><code>{"float MinScale { get; set; }"}</code> | <span className="api-desc">Smallest scale best fit to width may use.</span> |
| <Link id="m-renderers-2" /><code>{"IEnumerable<Renderer> Renderers { get; }"}</code> | <span className="api-desc">The renderers of the generated letters.</span> |
| <Link id="m-scale-2" /><code>{"float Scale { get; set; }"}</code> | <span className="api-desc">Text scale. Takes effect on the next refresh.</span> |
| <Link id="m-supportshtmltags-2" /><code>{"bool SupportsHtmlTags { get; set; }"}</code> | <span className="api-desc">When on, `c` colour tags in the text are applied. Needs a vertex colour material.</span> |
| <Link id="m-text-2" /><code>{"string Text { get; set; }"}</code> | <span className="api-desc">The text to show. Setting it unescapes sequences such as `\n` and refreshes.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibakeable-isbaked" /><code>{"private bool IBakeable.IsBaked { get; set; }"}</code> | <span className="api-desc">Set once the prefab bake has run.</span> |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Always 0.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onfinishedrendering" /><code>{"event Action OnFinishedRendering"}</code> | <span className="api-desc">Android only: raised when a queued rebuild finishes.</span> |
| <Link id="m-onupdatedtext" /><code>{"event Action OnUpdatedText"}</code> | <span className="api-desc">Raised after each rebuild of the text mesh.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clear" /><code>{"void Clear()"}</code> | <span className="api-desc">Removes the generated letters and empties the text.</span> |
| <Link id="m-onvalidatesettext" /><code>{"void OnValidateSetText(string text)"}</code> | <span className="api-desc">Sets the text without unescaping and refreshes.</span> |
| <Link id="m-refresh" /><code>{"void Refresh(bool isForced = false)"}</code> | <span className="api-desc">Rebuilds the letters if the text changed and the text is visible, or always when forced. Skipped on headless servers unless forced.</span> |
| <Link id="m-setcolor" /><code>{"void SetColor(Color color)"}</code> | <span className="api-desc">Changes the tint and swaps the material on existing letters without rebuilding them.</span> |
| <Link id="m-setuptextandcolor" /><code>{"void SetupTextAndColor(string text, Color color)"}</code> | <span className="api-desc">Sets the tint without a rebuild, then sets `Text`. If the text is unchanged the new colour does not show until a forced refresh.</span> |
| <Link id="m-setvisibility" /><code>{"void SetVisibility(bool isVisible)"}</code> | <span className="api-desc">Shows or hides the letter renderers, and refreshes when shown.</span> |

<details className="api-private">
<summary>25 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-aligntextline" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, Transform lineParent)"}</code> | <span className="api-desc">Scales and positions a finished line for the alignment, line number and vertical alignment; with `bestFitToWidth` it first sets `scale` to fit `maxWidth`.</span> |
| <Link id="m-aligntextline-2" /><code>{"private void AlignTextLine(float lineWidth, int lineNumber, int lineCount, List<Vector3> vertices, int startIndex)"}</code> | <span className="api-desc">Scales and positions a finished line for the alignment, line number and vertical alignment; with `bestFitToWidth` it first sets `scale` to fit `maxWidth`.</span> |
| <Link id="m-bake" /><code>{"private void IBakeable.Bake()"}</code> | <span className="api-desc">Prefab bake: builds the text as merged static meshes, adds them to the static LOD group, then removes this component.</span> |
| <Link id="m-bake-2" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Prefab bake: builds the text as merged static meshes, adds them to the static LOD group, then removes this component.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Empty build-bake step.</span> |
| <Link id="m-convertlinearscale" /><code>{"private Vector3 ConvertLinearScale()"}</code> | <span className="api-desc">The line scale to use: uniform, but with z left at 1 on Android.</span> |
| <Link id="m-createlettermesh" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, GameObject letter, Mesh mesh, Material material, Transform letterTransform, float characterWidth)"}</code> | <span className="api-desc">Adds one letter at the current line offset, either as its own renderer object or into the merged vertex lists, and returns the new line width.</span> |
| <Link id="m-createlettermesh-2" /><code>{"private float CreateLetterMesh(string text, float currentLineWidth, int i, "}<Link to="/mod/game-api/types/global-i-l/lettermesh">{"LetterMesh"}</Link>{" letterMesh, List<Vector3> vertices, List<Vector3> normals, List<int> indices, float characterWidth)"}</code> | <span className="api-desc">Adds one letter at the current line offset, either as its own renderer object or into the merged vertex lists, and returns the new line width.</span> |
| <Link id="m-createmultiline" /><code>{"private void CreateMultiline(Material instancedMaterial)"}</code> | <span className="api-desc">Wraps the text into lines no wider than `lineWidth` (breaking on spaces and new lines), draws up to `MaxLines` of them and works out height and centre.</span> |
| <Link id="m-createtextline" /><code>{"private float CreateTextLine(string text, int lineNumber, int lineCount, List<Vector3> vertices, List<Vector3> normals, List<int> indices, List<Color> colors)"}</code> | <span className="api-desc">Adds one line's letters to the merged vertex, normal, index and colour lists, applying colour tags when `supportsHTMLTags` is on.</span> |
| <Link id="m-debugrefresh" /><code>{"private void DebugRefresh()"}</code> | <span className="api-desc">Inspector button: forces a refresh.</span> |
| <Link id="m-drawgizmoline" /><code>{"private void DrawGizmoLine(float maxWidth)"}</code> | <span className="api-desc">Draws the width guide line for the current alignment.</span> |
| <Link id="m-drawtextline" /><code>{"private float DrawTextLine(string text, int lineNumber, int lineCount, Material material, out float height, out float maxHeight)"}</code> | <span className="api-desc">Builds one line of text under a new `Line N` child, as one object per letter or one merged mesh, and returns its width.</span> |
| <Link id="m-getcolorobjecthash" /><code>{"private int GetColorObjectHash(Object targetObject, Color color)"}</code> | <span className="api-desc">Hash of an object and a colour, used as the key for the coloured material and mesh caches.</span> |
| <Link id="m-getmaterialforcolor" /><code>{"private Material GetMaterialForColor(Material material, Color color)"}</code> | <span className="api-desc">Returns a cached copy of the material tinted to the colour, making it on first use.</span> |
| <Link id="m-getmeshforcolor" /><code>{"private Mesh GetMeshForColor(Mesh mesh, Color color)"}</code> | <span className="api-desc">Returns a cached copy of the mesh with all vertex colours set to the colour.</span> |
| <Link id="m-getwidth" /><code>{"private float GetWidth(char character)"}</code> | <span className="api-desc">Advance width of a character in the font plus spacing. Character `\u0002` toggles monospace mode, in which every character takes a space's width.</span> |
| <Link id="m-internalclear" /><code>{"private void InternalClear()"}</code> | <span className="api-desc">Destroys the generated letter objects and forgets the rendered text.</span> |
| <Link id="m-internalrefresh" /><code>{"private void InternalRefresh()"}</code> | <span className="api-desc">Rebuilds the text meshes now, sets width, height and centre, and raises `OnUpdatedText` (and `OnFinishedRendering` after an Android queue wait).</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up generated meshes.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Clears the text objects and stops distance checks.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the best-fit or multi-line width guide.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Registers for distance checks when it has a render distance; otherwise refreshes right away.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Keeps `maxWidth` non-negative and turns off `bestFitToWidth` when multi-line.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Editor: fills in the default Vinque font and metal material.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TextRenderer`:

<div className="api-used-in">

[`AchievementBoard.title`](/mod/game-api/types/global-a-b/achievementboard#m-title), [`AchievementItem.textRenderer`](/mod/game-api/types/global-a-b/achievementitem#m-textrenderer), [`CaveTeleporter.costRenderer`](/mod/game-api/types/alta-world-generation/caveteleporter#m-costrenderer), [`CosmeticRotatingSlot.indexText`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-indextext), [`MainMenuShopInterface.accountBalanceText`](/mod/game-api/types/alta-customization/mainmenushopinterface#m-accountbalancetext), [`MainMenuShopItem.costText`](/mod/game-api/types/alta-customization/mainmenushopitem#m-costtext), [`MainMenuShopItem.itemName`](/mod/game-api/types/alta-customization/mainmenushopitem#m-itemname), [`ShopInterface.balanceText`](/mod/game-api/types/alta-customization/shopinterface#m-balancetext), [`ShopInterface.totalCost`](/mod/game-api/types/alta-customization/shopinterface#m-totalcost), [`ShopInterfaceItem.costText`](/mod/game-api/types/alta-customization/shopinterfaceitem#m-costtext), [`ShopInterfaceItem.nameText`](/mod/game-api/types/alta-customization/shopinterfaceitem#m-nametext), [`CommunalStorage.localAllowance`](/mod/game-api/types/alta-items/communalstorage#m-localallowance), [`DockVisual.countLabel3D`](/mod/game-api/types/alta-items/dockvisual#m-countlabel3d), [`PooledDockVisual.countLabel3D`](/mod/game-api/types/alta-items/pooleddockvisual#m-countlabel3d), [`PooledDockVisual.CountLabel3D`](/mod/game-api/types/alta-items/pooleddockvisual#m-countlabel3d-2), [`InfoBoard.renderer`](/mod/game-api/types/alta-world/infoboard#m-renderer), [`AssistedSpawnCommandAction.progressText`](/mod/game-api/types/alta-menus/assistedspawncommandaction#m-progresstext), [`CustomScroller.textSides`](/mod/game-api/types/alta-menus/customscroller#m-textsides), [`CustomScroller.valueText`](/mod/game-api/types/alta-menus/customscroller#m-valuetext), [`EnumMenuSettingBase.valueText`](/mod/game-api/types/alta-menus/enummenusettingbase#m-valuetext), [`MenuGameSetting<T>.displayNameText`](/mod/game-api/types/alta-menus/menugamesetting-t#m-displaynametext), [`ScrollerEnumMenuSetting.textSides`](/mod/game-api/types/alta-menus/scrollerenummenusetting#m-textsides), [`ScrollerSelector.textSides`](/mod/game-api/types/alta-menus/scrollerselector#m-textsides), [`ServerCommandAction.buttonText`](/mod/game-api/types/alta-menus/servercommandaction#m-buttontext), [`ServerMultiCommandAction.buttonText`](/mod/game-api/types/alta-menus/servermulticommandaction#m-buttontext), [`StandardFloatAsEnum.textSides`](/mod/game-api/types/alta-menus/standardfloatasenum#m-textsides), [`StandardFloatAsEnum.valueText`](/mod/game-api/types/alta-menus/standardfloatasenum#m-valuetext), [`UserToken.username`](/mod/game-api/types/alta-menus/usertoken#m-username), [`ConfirmPopupPanel.messageText`](/mod/game-api/types/alta-menus/confirmpopuppanel#m-messagetext), [`InputField.textVisuals`](/mod/game-api/types/alta-menus/inputfield#m-textvisuals), [`ListElementWithButtonAndExtraText.extraText`](/mod/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext), [`ListElementWithButtonAndExtraText.ExtraText`](/mod/game-api/types/alta-menus/listelementwithbuttonandextratext#m-extratext-2), [`OptionsPanel.text`](/mod/game-api/types/alta-menus/optionspanel#m-text), [`RecentPlayerPanelListElement.thirdLine`](/mod/game-api/types/alta-menus/recentplayerpanellistelement#m-thirdline), [`CreateServerPanel.canCreateText`](/mod/game-api/types/alta-menus/createserverpanel#m-cancreatetext), [`FriendsInvitesPanel.emptyListText`](/mod/game-api/types/alta-menus/friendsinvitespanel#m-emptylisttext), [`FriendsListPanel.emptyListText`](/mod/game-api/types/alta-menus/friendslistpanel#m-emptylisttext), [`FriendsRequestsPanel.emptyListText`](/mod/game-api/types/alta-menus/friendsrequestspanel#m-emptylisttext), [`GroupInfoTab.infoText`](/mod/game-api/types/alta-menus/groupinfotab#m-infotext), [`GroupMembersPage.emptyListText`](/mod/game-api/types/alta-menus/groupmemberspage#m-emptylisttext), [`GroupMembersPage.tooManyMembersText`](/mod/game-api/types/alta-menus/groupmemberspage#m-toomanymemberstext), [`InboxPanel.infoText`](/mod/game-api/types/alta-menus/inboxpanel#m-infotext), [`IncomingGroupRequestPage.emptyListText`](/mod/game-api/types/alta-menus/incominggrouprequestpage#m-emptylisttext), [`OculusFriendsListPanel.emptyListText`](/mod/game-api/types/alta-menus/oculusfriendslistpanel#m-emptylisttext), [`OutgoingGroupInvitesPage.emptyListText`](/mod/game-api/types/alta-menus/outgoinggroupinvitespage#m-emptylisttext), [`PlayerReportInboxInfoPanel.actionTakenAtText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenattext), [`PlayerReportInboxInfoPanel.actionTakenByText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakenbytext), [`PlayerReportInboxInfoPanel.actionTakenText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-actiontakentext), [`PlayerReportInboxInfoPanel.reasonText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-reasontext), [`PlayerReportInboxInfoPanel.reportedUserText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportedusertext), [`PlayerReportInboxInfoPanel.reporterText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-reportertext), [`PlayerReportInboxInfoPanel.serverText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-servertext), [`PlayerReportInboxInfoPanel.timeText`](/mod/game-api/types/alta-menus/playerreportinboxinfopanel#m-timetext), [`PlayerReportSummaryPanel.actionTakenAtText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenattext), [`PlayerReportSummaryPanel.actionTakenByText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakenbytext), [`PlayerReportSummaryPanel.actionTakenText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-actiontakentext), [`PlayerReportSummaryPanel.reasonText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-reasontext), [`PlayerReportSummaryPanel.reportedUserText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-reportedusertext), [`PlayerReportSummaryPanel.reporterText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-reportertext), [`PlayerReportSummaryPanel.serverText`](/mod/game-api/types/alta-menus/playerreportsummarypanel#m-servertext) and 88 more.

</div>
