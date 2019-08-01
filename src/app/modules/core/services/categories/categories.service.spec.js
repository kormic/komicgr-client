"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const categories_service_1 = require("./categories.service");
describe('CategoriesService', () => {
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({
            providers: [categories_service_1.CategoriesService]
        });
    });
    it('should be created', testing_1.inject([categories_service_1.CategoriesService], (service) => {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=categories.service.spec.js.map