import { PageScrollConfig } from 'ngx-page-scroll';
import * as ease from './ease';

export class DefaultPageScrollConfig {
  constructor() {
    this.setDefaultConfig();
  }

  setDefaultConfig() {
    PageScrollConfig.defaultDuration = 1000;
    // 1 rem = 14px (defined in styles.scss)
    PageScrollConfig.defaultScrollOffset = 14 * 5;
    PageScrollConfig.defaultInterruptible = false;
    PageScrollConfig.defaultEasingLogic = {
      'ease': ease.easeInOutExpo
    };
  }

  setConfig(config: PageScrollConfig) {
    Object.assign(PageScrollConfig, config);
  }
}