import { fireEvent } from "../../../../common/dom/fire_event";
import {
  LovelaceConfig,
  LovelaceStrategyConfig,
} from "../../../../data/lovelace";

export interface DashboardStrategyEditorDialogParams {
  lovelaceConfig: LovelaceConfig;
  saveConfig: (config: LovelaceConfig) => void;
  strategyConfig: LovelaceStrategyConfig;
}

export const loadDashboardStrategyEditorDialog = () =>
  import("./dialog-dashboard-strategy-editor");

export const showDashboardStrategyEditorDialog = (
  element: HTMLElement,
  params: DashboardStrategyEditorDialogParams
): void => {
  fireEvent(element, "show-dialog", {
    dialogTag: "dialog-dashboard-strategy-editor",
    dialogImport: loadDashboardStrategyEditorDialog,
    dialogParams: params,
  });
};
