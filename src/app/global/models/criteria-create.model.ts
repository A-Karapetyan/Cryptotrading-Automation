import { OperationTypeEnum } from "../enums/operation-type.enum";
import { Validation } from "../validation";
import { IsDefined, IsNumber } from "../validation/decorators";

export class CriteriaCreateRM extends Validation {

    @IsNumber()
    @IsDefined()
    amount: number;
    @IsDefined()
    @IsNumber()
    cryptoId: number;
    @IsDefined()
    operation: OperationTypeEnum;

    errors = {
        amount: false,
        cryptoId: false,
        operation: false
    };

    getModel() {
        return {
            amount: this.amount,
            cryptoId: this.cryptoId,
            operation: this.operation
        }
    };
}