//@ts-nocheck
import { processReferences } from '../plugin/index';

export default classyUiMacro;

classyUiMacro.isBabelMacro = true;
classyUiMacro.options = {};

function classyUiMacro({ references, state, babel }) {
  processReferences(babel, state, references.classnames || []);
}
