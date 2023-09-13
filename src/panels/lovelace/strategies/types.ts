import {
  LovelaceConfig,
  LovelaceStrategyConfig,
  LovelaceViewConfig,
} from "../../../data/lovelace";
import { HomeAssistant } from "../../../types";
import { LovelaceGenericElementEditor } from "../types";

export type LovelaceStrategyParams = {
  narrow?: boolean;
};

export type LovelaceStrategy<T = any> = {
  generate(
    config: LovelaceStrategyConfig,
    hass: HomeAssistant,
    params?: LovelaceStrategyParams
  ): Promise<T>;
  getConfigElement?: () => LovelaceStrategyEditor;
};

export interface LovelaceDashboardStrategy
  extends LovelaceStrategy<LovelaceConfig> {}

export interface LovelaceViewStrategy
  extends LovelaceStrategy<LovelaceViewConfig> {}

export interface LovelaceStrategyEditor extends LovelaceGenericElementEditor {
  setConfig(config: LovelaceStrategyConfig): void;
}
