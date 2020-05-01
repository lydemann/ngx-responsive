import { TestBed, inject } from '@angular/core/testing';
import { PlatformService } from './platform.service';

describe('PlatformService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PlatformService]
        });
    });

    describe('isEnabledForPlatform', () => {
        it('should be enabled if browser but renderOnServer true in config', () => {
            expect().toBe();
        });

        it('should be enabled if NOT browser but renderOnServer true in config', () => {
            expect().toBe();
        });

        it('should be enabled if browser and renderOnServer false in config', () => {
            expect().toBe();
        });

        it('should NOT be enabled if NOT browser and renderOnServer false in config', () => {
            expect().toBe();
        });
    });
    
});
