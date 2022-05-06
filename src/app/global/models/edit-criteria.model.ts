import { OperationTypeEnum } from "../enums/operation-type.enum";
import { Validation } from "../validation";
import { IsDefined, IsNumber } from "../validation/decorators";

export class EditCriteriaRM extends Validation {

    @IsNumber()
    @IsDefined()
    price: number;

    @IsNumber()
    @IsDefined()
    cryptoId: number;

    @IsDefined()
    operation: OperationTypeEnum;

    @IsDefined()
    criteriaId: number;

    errors = {
        price: false,
        cryptoId: false,
        operation: false,
        criteriaId: false
    };

    getModel() {
        return {
            price: this.price,
            cryptoId: this.cryptoId,
            operation: this.operation,
            criteriaId: this.criteriaId
        }
    };
}