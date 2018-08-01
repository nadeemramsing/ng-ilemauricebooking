import { PageScrollConfig } from 'ngx-page-scroll';

export class DefaultPageScrollConfig {
  constructor() {
    this.setDefaultConfig();
  }

  setDefaultConfig() {
    PageScrollConfig.defaultDuration = 600;
    // 1 rem = 14px (defined in styles.scss)
    PageScrollConfig.defaultScrollOffset = 14 * 5;
    PageScrollConfig.defaultInterruptible = false;
    PageScrollConfig.defaultEasingLogic = {
      'ease': (t: number, b: number, c: number, d: number): number => {
        // From https://github.com/Nolanus/ngx-page-scroll
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  setConfig(config: PageScrollConfig) {
    Object.assign(PageScrollConfig, config);
  }
}