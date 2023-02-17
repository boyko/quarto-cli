/*
* types.ts
*
* Copyright (C) 2020-2022 Posit Software, PBC
*
*/
import { Document } from "../core/deno-dom.ts";

import {
  kAppendixAttributionBibTex,
  kAppendixAttributionCiteAs,
  kAtxHeaders,
  kBaseFormat,
  kCache,
  kCalloutCautionCaption,
  kCalloutImportantCaption,
  kCalloutNoteCaption,
  kCalloutTipCaption,
  kCalloutWarningCaption,
  kCiteMethod,
  kCiteproc,
  kCodeFold,
  kCodeLine,
  kCodeLineNumbers,
  kCodeLines,
  kCodeLink,
  kCodeOverflow,
  kCodeSummary,
  kCodeTools,
  kCodeToolsHideAllCode,
  kCodeToolsMenuCaption,
  kCodeToolsShowAllCode,
  kCodeToolsSourceCode,
  kCodeToolsViewSource,
  kCopyButtonTooltip,
  kCopyButtonTooltipSuccess,
  kCrossrefApxPrefix,
  kCrossrefChPrefix,
  kCrossrefCnjTitle,
  kCrossrefCorTitle,
  kCrossrefDefTitle,
  kCrossrefEqPrefix,
  kCrossrefExmTitle,
  kCrossrefExrTitle,
  kCrossrefFigTitle,
  kCrossrefLemTitle,
  kCrossrefLstTitle,
  kCrossrefPrfTitle,
  kCrossrefSecPrefix,
  kCrossrefTblTitle,
  kCrossrefThmTitle,
  kCss,
  kDfPrint,
  kDisplayName,
  kEcho,
  kEmbedResources,
  kEngine,
  kEnvironmentProofTitle,
  kEnvironmentRemarkTitle,
  kEnvironmentSolutionTitle,
  kEPubCoverImage,
  kError,
  kEval,
  kExecuteDaemon,
  kExecuteDaemonRestart,
  kExecuteDebug,
  kExecuteEnabled,
  kExecuteIpynb,
  kExtensionName,
  kFigAlign,
  kFigDpi,
  kFigEnv,
  kFigFormat,
  kFigHeight,
  kFigPos,
  kFigWidth,
  kFilterParams,
  kFilters,
  kFormatLinks,
  kFormatResources,
  kFreeze,
  kGladtex,
  kHighlightStyle,
  kHtmlMathMethod,
  kInclude,
  kIncludeAfterBody,
  kIncludeBeforeBody,
  kIncludeInHeader,
  kIpynbFilters,
  kKatex,
  kKeepHidden,
  kKeepIpynb,
  kKeepMd,
  kKeepSource,
  kKeepTex,
  kLatexAutoInstall,
  kLatexAutoMk,
  kLatexClean,
  kLatexInputPaths,
  kLatexMakeIndex,
  kLatexMakeIndexOpts,
  kLatexMaxRuns,
  kLatexMinRuns,
  kLatexOutputDir,
  kLatexTinyTex,
  kLatexTlmgrOpts,
  kLinkExternalFilter,
  kLinkExternalIcon,
  kLinkExternalNewwindow,
  kListingPageCategoryAll,
  kListingPageFieldAuthor,
  kListingPageFieldCategories,
  kListingPageFieldDate,
  kListingPageFieldDescription,
  kListingPageFieldFileModified,
  kListingPageFieldFileName,
  kListingPageFieldReadingTime,
  kListingPageFieldSubtitle,
  kListingPageFieldTitle,
  kListingPageMinutesCompact,
  kListingPageNoMatches,
  kListingPageOrderBy,
  kListingPageOrderByDateAsc,
  kListingPageOrderByDateDesc,
  kListingPageOrderByDefault,
  kListingPageOrderByNumberAsc,
  kListingPageOrderByNumberDesc,
  kListings,
  kMarkdownHeadings,
  kMathjax,
  kMathml,
  kMergeIncludes,
  kMermaidFormat,
  kNotebookLinks,
  kNotebookView,
  kNotebookViewStyle,
  kNumberOffset,
  kNumberSections,
  kOutput,
  kOutputDivs,
  kOutputExt,
  kOutputFile,
  kPageWidth,
  kPdfEngine,
  kPdfEngineOpt,
  kPdfEngineOpts,
  kPreferHtml,
  kQuartoFilters,
  kReferenceLocation,
  kRelatedFormatsTitle,
  kRelatedNotebooksTitle,
  kRepoActionLinksEdit,
  kRepoActionLinksIssue,
  kRepoActionLinksSource,
  kSearchClearButtonTitle,
  kSearchCopyLinkTitle,
  kSearchDetatchedCancelButtonTitle,
  kSearchHideMatchesText,
  kSearchMatchingDocumentsText,
  kSearchMoreMatchText,
  kSearchNoResultsText,
  kSearchSubmitButtonTitle,
  kSectionDivs,
  kSectionTitleAbstract,
  kSectionTitleAppendices,
  kSectionTitleCitation,
  kSectionTitleCopyright,
  kSectionTitleFootnotes,
  kSectionTitleReferences,
  kSectionTitleReuse,
  kSelfContained,
  kSelfContainedMath,
  kShiftHeadingLevelBy,
  kShortcodes,
  kSlideLevel,
  kSourceNotebookPrefix,
  kStandalone,
  kSyntaxDefinitions,
  kTableOfContents,
  kTargetFormat,
  kTblColwidths,
  kTemplate,
  kTitleBlockAffiliationPlural,
  kTitleBlockAffiliationSingle,
  kTitleBlockAuthorPlural,
  kTitleBlockAuthorSingle,
  kTitleBlockModified,
  kTitleBlockPublished,
  kTitlePrefix,
  kToc,
  kTocDepth,
  kTocTitleDocument,
  kTocTitleWebsite,
  kTopLevelDivision,
  kVariables,
  kVariant,
  kWarning,
  kWebtex,
} from "./constants.ts";

import { TempContext } from "../core/temp-types.ts";
import { HtmlPostProcessor, RenderServices } from "../command/render/types.ts";
import { QuartoFilterSpec } from "../command/render/filters.ts";
import { ExtensionContext } from "../extension/extension-shared.ts";
import { ProjectContext } from "../project/types.ts";

export const kDependencies = "dependencies";
export const kSassBundles = "sass-bundles";
export const kHtmlPostprocessors = "html-postprocessors";
export const kHtmlFinalizers = "html-finalizers";
export const kBodyEnvelope = "body-envelope";
export const kTextHighlightingMode = "text-highlighting-mode";
export const kQuartoCssVariables = "css-variables";
export const kMarkdownAfterBody = "render-after-body";

export type Metadata = {
  [key: string]: unknown;
};

export interface FormatDependency {
  name: string;
  version?: string;
  external?: boolean;
  meta?: Record<string, string>;
  links?: { rel: string; href: string; type?: string }[];
  scripts?: DependencyHtmlFile[];
  stylesheets?: DependencyHtmlFile[];
  serviceworkers?: DependencyServiceWorker[];
  head?: string;
  resources?: DependencyFile[];
}

export interface DependencyFile {
  name: string;
  path: string;
}

export interface DependencyServiceWorker {
  source: string;
  destination?: string;
}

export interface DependencyHtmlFile extends DependencyFile {
  attribs?: Record<string, string>;
  afterBody?: boolean;
}

export interface BodyEnvelope {
  header?: string;
  before?: string;
  afterPreamble?: string;
  afterPostamble?: string;
}

export interface SassLayer {
  uses: string;
  defaults: string;
  functions: string;
  mixins: string;
  rules: string;
}

export interface SassBundleLayers {
  key: string;
  user?: SassLayer;
  quarto?: SassLayer;
  framework?: SassLayer;
  loadPaths?: string[];
}

export interface SassBundle extends SassBundleLayers {
  dependency: string;
  dark?: {
    user?: SassLayer;
    quarto?: SassLayer;
    framework?: SassLayer;
    default?: boolean;
  };
  attribs?: Record<string, string>;
}

export type PandocFilter = {
  type: "json" | "lua";
  path: string;
};

export type QuartoFilter = string | PandocFilter;

export function isPandocFilter(filter: QuartoFilter): filter is PandocFilter {
  return (<PandocFilter> filter).path !== undefined;
}

export interface NotebookPublishOptions {
  notebook: string;
  url?: string;
  title?: string;
}

export interface FormatExtras {
  args?: string[];
  pandoc?: FormatPandoc;
  metadata?: Metadata;
  metadataOverride?: Metadata;
  [kIncludeInHeader]?: string[];
  [kIncludeBeforeBody]?: string[];
  [kIncludeAfterBody]?: string[];
  [kFilters]?: {
    pre?: QuartoFilter[];
    post?: QuartoFilter[];
  };
  [kFilterParams]?: Record<string, unknown>;
  postprocessors?: Array<(output: string) => Promise<void>>;
  templateContext?: FormatTemplateContext;
  html?: {
    [kDependencies]?: FormatDependency[];
    [kSassBundles]?: SassBundle[];
    [kBodyEnvelope]?: BodyEnvelope;
    [kHtmlPostprocessors]?: Array<HtmlPostProcessor>;
    [kHtmlFinalizers]?: Array<
      (doc: Document) => Promise<void>
    >;
    [kTextHighlightingMode]?: "light" | "dark" | "none" | undefined;
    [kQuartoCssVariables]?: string[];
    [kMarkdownAfterBody]?: string[];
  };
}

export interface FormatIdentifier {
  [kBaseFormat]?: string;
  [kTargetFormat]?: string;
  [kDisplayName]?: string;
  [kExtensionName]?: string;
}

// pandoc output format
export interface Format {
  identifier: FormatIdentifier;
  render: FormatRender;
  execute: FormatExecute;
  pandoc: FormatPandoc;
  language: FormatLanguage;
  metadata: Metadata;

  /**
   * mergeAdditionalFormats is populated by render-contexts, and
   * are used to create a Format object with additional formats that
   * have "less priority" than format information from user YAML.
   *
   * Use mergeAdditionalFormats to, e.g., set up custom defaults
   * that are not driven by the output format.
   */
  //deno-lint-ignore no-explicit-any
  mergeAdditionalFormats?: (...configs: any[]) => Format;

  resolveFormat?: (format: Format) => void;
  formatExtras?: (
    input: string,
    markdown: string,
    flags: PandocFlags,
    format: Format,
    libDir: string,
    services: RenderServices,
    offset?: string,
    project?: ProjectContext,
  ) => Promise<FormatExtras>;
  formatPreviewFile?: (
    file: string,
    format: Format,
  ) => string;
  extensions?: Record<string, unknown>;
}

export interface FormatRender {
  [kKeepTex]?: boolean;
  [kKeepSource]?: boolean;
  [kKeepHidden]?: boolean;
  [kPreferHtml]?: boolean;
  [kOutputDivs]?: boolean;
  [kVariant]?: string;
  [kOutputExt]?: string;
  [kPageWidth]?: number;
  [kFigAlign]?: "left" | "right" | "center" | "default";
  [kFigPos]?: string | null;
  [kFigEnv]?: string | null;
  [kCodeFold]?: "none" | "show" | "hide" | boolean;
  [kCodeOverflow]?: "wrap" | "scroll";
  [kCodeLink]?: boolean;
  [kCodeLineNumbers]?: boolean;
  [kCodeTools]?: boolean | {
    source?: boolean;
    toggle?: boolean;
    caption?: string;
  };
  [kTblColwidths]?: "auto" | boolean | number[];
  [kShortcodes]?: string[];
  [kMergeIncludes]?: boolean;
  [kLatexAutoMk]?: boolean;
  [kLatexAutoInstall]?: boolean;
  [kLatexMinRuns]?: number;
  [kLatexMaxRuns]?: number;
  [kLatexClean]?: boolean;
  [kLatexInputPaths]?: string[];
  [kLatexMakeIndex]?: string;
  [kLatexMakeIndexOpts]?: string[];
  [kLatexTlmgrOpts]?: string[];
  [kLatexOutputDir]?: string | null;
  [kLatexTinyTex]?: boolean;
  [kLinkExternalIcon]?: string | boolean;
  [kLinkExternalNewwindow]?: boolean;
  [kLinkExternalFilter]?: string;
  [kSelfContainedMath]?: boolean;
  [kFormatResources]?: string[];
  [kFormatLinks]?: boolean | string[];
  [kNotebookLinks]?: boolean | "inline" | "global";
  [kNotebookViewStyle]?: "document" | "notebook";
  [kNotebookView]?:
    | boolean
    | NotebookPublishOptions
    | NotebookPublishOptions[];
}

export interface FormatExecute {
  // done
  [kFigWidth]?: number;
  [kFigHeight]?: number;
  [kFigFormat]?: "retina" | "png" | "jpeg" | "svg" | "pdf";
  [kFigDpi]?: number;
  [kMermaidFormat]?: "png" | "svg" | "js";
  [kDfPrint]?: "default" | "kable" | "tibble" | "paged";
  [kCache]?: true | false | "refresh" | null;
  [kFreeze]?: true | false | "auto";
  [kExecuteEnabled]?: true | false | null;
  [kExecuteIpynb]?: true | false | null;
  [kExecuteDaemon]?: number | boolean | null;
  [kExecuteDaemonRestart]?: boolean;
  [kExecuteDebug]?: boolean;
  [kEngine]?: string;
  [kEval]?: true | false | null;
  [kError]?: boolean;
  [kEcho]?: boolean | "fenced";
  [kOutput]?: boolean | "all" | "asis";
  [kWarning]?: boolean;
  [kInclude]?: boolean;
  [kKeepMd]?: boolean;
  [kKeepIpynb]?: boolean;
  [kIpynbFilters]?: string[];
}

export interface FormatPandoc {
  from?: string;
  to?: string;
  writer?: string;
  [kTemplate]?: string;
  [kOutputFile]?: string;
  standalone?: boolean;
  [kSelfContained]?: boolean;
  [kEmbedResources]?: boolean;
  [kVariables]?: { [key: string]: unknown };
  [kAtxHeaders]?: boolean;
  [kMarkdownHeadings]?: boolean;
  [kIncludeBeforeBody]?: string[];
  [kIncludeAfterBody]?: string[];
  [kIncludeInHeader]?: string[];
  [kReferenceLocation]?: string;
  [kCiteproc]?: boolean;
  [kCiteMethod]?: string;
  [kFilters]?: QuartoFilter[];
  [kQuartoFilters]?: QuartoFilterSpec;
  [kPdfEngine]?: string;
  [kPdfEngineOpts]?: string[];
  [kPdfEngineOpt]?: string;
  [kEPubCoverImage]?: string;
  [kCss]?: string | string[];
  [kToc]?: boolean;
  [kTableOfContents]?: boolean;
  [kTocDepth]?: number;
  [kListings]?: boolean;
  [kNumberSections]?: boolean;
  [kNumberOffset]?: number[];
  [kHighlightStyle]?: string | Record<string, string> | null;
  [kSectionDivs]?: boolean;
  [kHtmlMathMethod]?: string | { method: string; url: string };
  [kTopLevelDivision]?: string;
  [kShiftHeadingLevelBy]?: number;
  [kTitlePrefix]?: string;
  [kSlideLevel]?: number;
  [kSyntaxDefinitions]?: string[];
}

export interface PandocFlags {
  to?: string;
  output?: string;
  [kStandalone]?: boolean;
  [kSelfContained]?: boolean;
  [kEmbedResources]?: boolean;
  pdfEngine?: string;
  pdfEngineOpts?: string[];
  makeIndexOpts?: string[];
  tlmgrOpts?: string[];
  natbib?: boolean;
  biblatex?: boolean;
  [kToc]?: boolean;
  [kListings]?: boolean;
  [kNumberSections]?: boolean;
  [kNumberOffset]?: number[];
  [kTopLevelDivision]?: string;
  [kShiftHeadingLevelBy]?: string;
  [kIncludeInHeader]?: string;
  [kIncludeBeforeBody]?: string;
  [kIncludeAfterBody]?: string;
  [kReferenceLocation]?: string;
  [kMathjax]?: boolean;
  [kKatex]?: boolean;
  [kMathml]?: boolean;
  [kGladtex]?: boolean;
  [kWebtex]?: boolean;
}

// the requested pdf engine, it's options, and the bib engine
export interface PdfEngine {
  pdfEngine: string;
  pdfEngineOpts?: string[];
  bibEngine?: "natbib" | "biblatex";
  indexEngine?: string;
  indexEngineOpts?: string[];
  tlmgrOpts?: string[];
}

export interface FormatLanguage {
  [kTocTitleDocument]?: string;
  [kTocTitleWebsite]?: string;
  [kRelatedFormatsTitle]?: string;
  [kSourceNotebookPrefix]?: string;
  [kRelatedNotebooksTitle]?: string;
  [kCalloutTipCaption]?: string;
  [kCalloutNoteCaption]?: string;
  [kCalloutWarningCaption]?: string;
  [kCalloutImportantCaption]?: string;
  [kCalloutCautionCaption]?: string;
  [kSectionTitleAbstract]?: string;
  [kSectionTitleCitation]?: string;
  [kAppendixAttributionBibTex]?: string;
  [kAppendixAttributionCiteAs]?: string;
  [kTitleBlockAffiliationPlural]?: string;
  [kTitleBlockAffiliationSingle]?: string;
  [kTitleBlockAuthorSingle]?: string;
  [kTitleBlockAuthorPlural]?: string;
  [kTitleBlockPublished]?: string;
  [kTitleBlockModified]?: string;
  [kSectionTitleFootnotes]?: string;
  [kSectionTitleReferences]?: string;
  [kSectionTitleAppendices]?: string;
  [kSectionTitleReuse]?: string;
  [kSectionTitleCopyright]?: string;
  [kCodeSummary]?: string;
  [kCodeLine]?: string;
  [kCodeLines]?: string;
  [kCodeToolsMenuCaption]?: string;
  [kCodeToolsShowAllCode]?: string;
  [kCodeToolsHideAllCode]?: string;
  [kCodeToolsViewSource]?: string;
  [kCodeToolsSourceCode]?: string;
  [kRepoActionLinksEdit]?: string;
  [kRepoActionLinksSource]?: string;
  [kRepoActionLinksIssue]?: string;
  [kSearchNoResultsText]?: string;
  [kCopyButtonTooltip]?: string;
  [kCopyButtonTooltipSuccess]?: string;
  [kSearchMatchingDocumentsText]?: string;
  [kSearchCopyLinkTitle]?: string;
  [kSearchHideMatchesText]?: string; // FIXME duplicate?
  [kSearchMoreMatchText]?: string;
  [kSearchHideMatchesText]?: string; // FIXME duplicate?
  [kSearchClearButtonTitle]?: string;
  [kSearchDetatchedCancelButtonTitle]?: string;
  [kSearchSubmitButtonTitle]?: string;
  [kCrossrefFigTitle]?: string;
  [kCrossrefTblTitle]?: string;
  [kCrossrefLstTitle]?: string;
  [kCrossrefThmTitle]?: string;
  [kCrossrefLemTitle]?: string;
  [kCrossrefCorTitle]?: string;
  [kCrossrefPrfTitle]?: string;
  [kCrossrefCnjTitle]?: string;
  [kCrossrefDefTitle]?: string;
  [kCrossrefExmTitle]?: string;
  [kCrossrefExrTitle]?: string;
  [kCrossrefChPrefix]?: string;
  [kCrossrefApxPrefix]?: string;
  [kCrossrefSecPrefix]?: string;
  [kCrossrefEqPrefix]?: string;
  [kEnvironmentProofTitle]?: string;
  [kEnvironmentRemarkTitle]?: string;
  [kEnvironmentSolutionTitle]?: string;
  [kListingPageOrderBy]?: string;
  [kListingPageOrderByDateAsc]?: string;
  [kListingPageOrderByDefault]?: string;
  [kListingPageOrderByDateDesc]?: string;
  [kListingPageOrderByNumberAsc]?: string;
  [kListingPageOrderByNumberDesc]?: string;
  [kListingPageFieldDate]?: string;
  [kListingPageFieldTitle]?: string;
  [kListingPageFieldDescription]?: string;
  [kListingPageFieldAuthor]?: string;
  [kListingPageFieldFileName]?: string;
  [kListingPageFieldFileModified]?: string;
  [kListingPageFieldSubtitle]?: string;
  [kListingPageFieldReadingTime]?: string;
  [kListingPageFieldCategories]?: string;
  [kListingPageMinutesCompact]?: string;
  [kListingPageCategoryAll]?: string;
  [kListingPageNoMatches]?: string;

  // langauge variations e.g. eg, fr, etc.
  [key: string]: unknown;
}

export interface FormatTemplateContext {
  template?: string;
  partials?: string[];
}
