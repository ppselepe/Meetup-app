import { TestBed, inject } from '@angular/core/testing';
import { GroupService } from './group.service';
describe('GroupService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [GroupService]
        });
    });
    it('should be created', inject([GroupService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=group.service.spec.js.map