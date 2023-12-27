import { DocBuilder } from "./DocBuilder";
import { FormElement } from "./FormElement";
import { xmind } from "./XmindFormatter";
import { adoc } from "./AdocFormatter";
import { ExportFormat, FormatElementFn } from "./DocFormatter";

export const formatDvCodedText = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;

    default:
      fn = adoc.dvTypes.formatDvCodedText
      break;
  }

  if (fn)
    fn(docBuilder, f);
}

export const formatDvText = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;
    default:
      fn = adoc.dvTypes.formatDvText
      break;
  }
  if (fn)
    fn(docBuilder, f);
}

export const formatDvCount = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;
    default:
      fn = adoc.dvTypes.formatDvCount
      break;
  }
  if (fn)
    fn(docBuilder, f);
}

export const formatDvQuantity = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;
    default:
      fn = adoc.dvTypes.formatDvQuantity
      break;
  }
  if (fn)
    fn(docBuilder, f);
}

export const formatDvOrdinal = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;
    default:
      fn = adoc.dvTypes.formatDvQuantity
      break;
  }
  if (fn)
    fn(docBuilder, f);
}
export const formatDvDefault = (docBuilder: DocBuilder, f: FormElement): void => {

  let fn: FormatElementFn;

  switch (docBuilder.exportFormat) {
    case ExportFormat.xmind, ExportFormat.fsh:
      break;
    default:
      fn = adoc.dvTypes.formatDvDefault
      break;
  }
  if (fn)
    fn(docBuilder, f);
}