//@ts-nocheck
import { processReferences } from '../plugin/index';

export default classyUiMacro;

classyUiMacro.isBabelMacro = true;
classyUiMacro.options = {};

function classyUiMacro({ references, state, babel }) {
  processReferences(
    babel,
    state,
    Object.values(references).reduce((aggr, bindings) => {
      return (aggr = aggr.concat(bindings));
    }, []),
  );
}
