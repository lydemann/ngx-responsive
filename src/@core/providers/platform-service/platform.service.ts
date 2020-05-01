

import { Inject, PLATFORM_ID, Injectable } from '@angular/core';
import { ResponsiveConfig } from '../responsive-config/responsive-config';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class PlatformService {

  constructor(
    @Inject(PLATFORM_ID) private readonly _platformId,
    @Inject(ResponsiveConfig) private responsiveConfig: ResponsiveConfig
  ) {
  }

  public isEnabledForPlatform() {
    return isPlatformBrowser(this._platformId) || this.responsiveConfig.config.renderOnServer;
  }
}