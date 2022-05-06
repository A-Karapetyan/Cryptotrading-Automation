import { OperationTypeEnum } from "../enums/operation-type.enum";
import { Validation } from "../validation";
import { IsDefined, IsNumber, Min } from "../validation/decorators";

export class CriteriaCreateRM extends Validation {

    @IsNumber()
    @IsDefined()
    price: number;

    @IsNumber()
    @IsDefined()
    cryptoId: number;

    @IsDefined()
    operation: OperationTypeEnum;

    errors = {
        price: false,
        cryptoId: false,
        operation: false
    };

    getModel() {
        return {
            price: this.price,
            cryptoId: this.cryptoId,
            operation: this.operation
        }
    };
}